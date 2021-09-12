package bookclub.chakmuri.service;

import bookclub.chakmuri.common.error.exception.ClubNotFoundException;
import bookclub.chakmuri.common.error.exception.MemberNotFoundException;
import bookclub.chakmuri.common.error.exception.UserNotFoundException;
import bookclub.chakmuri.controller.member.MemberApproveRequestDto;
import bookclub.chakmuri.controller.member.MemberCreateRequestDto;
import bookclub.chakmuri.domain.*;
import bookclub.chakmuri.repository.ClubRepository;
import bookclub.chakmuri.repository.MemberRepository;
import bookclub.chakmuri.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.*;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class MemberService {

    private final MemberRepository memberRepository;
    private final UserRepository userRepository;
    private final ClubRepository clubRepository;
    private final MailService mailService;

    @Transactional
    public Member apply(MemberCreateRequestDto request) {
        User user = userRepository.findById(request.getUserId()).orElseThrow(UserNotFoundException::new);
        Club club = clubRepository.findById(request.getClubId()).orElseThrow(ClubNotFoundException::new);

        if (memberRepository.findByUserAndClub(user, club).isPresent()) {
            return null;
        }

        String address = club.getUser().getEmail();
        String subject = "[책무리] " + club.getUser().getName() + "님, " + club.getTitle()
                + " 독서모임에 새로운 참여 신청이 있습니다.";
        String text = "안녕하세요, " + club.getUser().getName() + "님.\n\n운영중이신 " + club.getTitle()
                + " 독서모임에 <" + user.getName() + ">님으로부터 새로운 참여 신청이 도착했습니다.\n\n참여 신청자 정보는 "
                + "[마이페이지 > 내가 운영중인 독서모임 > 참여자 관리] 에서 확인하실 수 있으며,\n"
                + "만약 참여 신청자가 신청을 취소한 경우 승인 대기자 목록에서 조회되지 않을 수 있습니다.\n\n감사합니다."
                + "\n\n- 책무리팀";

        // 메일 전송 - 10초 이상 지연되는 작업
        sendAsyncMail(address, subject, text);

        Member member = Member.builder().user(user).club(club).approvalStatus(ApprovalStatus.WAITING).build();
        return memberRepository.save(member);
    }

    // 메일 전송 비동기 처리
    private void sendAsyncMail(String address, String subject, String text) {
        CompletableFuture<Void> future = new CompletableFuture<>();
        new Thread(
                () -> {
                    mailService.mailSend(address, subject, text);
                    future.complete(null);
                }
        ).start();
    }

    @Transactional
    public void deleteMember(String userId, Long clubId, String deleteStatus) {
        User user = userRepository.findById(userId).orElseThrow(UserNotFoundException::new);
        Club club = clubRepository.findById(clubId).orElseThrow(ClubNotFoundException::new);
        Member member = memberRepository.findByUserAndClub(user, club).orElseThrow(MemberNotFoundException::new);
        memberRepository.delete(member);

        String address = member.getUser().getEmail();
        String subject, text;

        // 없으면 참여신청 취소, no 면 거절, out 이면 내보내기
        if (deleteStatus.equals("no")) {
            subject = "[책무리] " + member.getUser().getName() + "님, " + member.getClub().getTitle()
                    + " 독서모임 참여 신청이 거절되었습니다.";
            text = "안녕하세요, " + member.getUser().getName() + "님.\n\n요청하신 " + member.getClub().getTitle()
                    + " 독서모임의 참여 신청이 거절되었습니다.\n"
                    + "아쉽지만 다른 독서모임에 참여 신청 부탁드립니다.\n\n감사합니다."
                    + "\n\n- 책무리팀";
            sendAsyncMail(address, subject, text);
        } else if (deleteStatus.equals("out")) {
            subject = "[책무리] " + member.getUser().getName() + "님, " + member.getClub().getTitle()
                    + " 독서모임의 참여자에서 내보내기 되었습니다.";
            text = "안녕하세요, " + member.getUser().getName() + "님.\n\n" + member.getClub().getTitle()
                    + " 독서모임 참여자 목록에서 내보내기 된 내역이 확인되었습니다.\n"
                    + "아쉽지만 다른 독서모임에 참여 신청 부탁드립니다.\n\n감사합니다."
                    + "\n\n- 책무리팀";
            sendAsyncMail(address, subject, text);
        }
    }

    @Transactional
    public void approveMember(MemberApproveRequestDto requestDto) {
        Member member = memberRepository.findById(requestDto.getMemberId()).orElseThrow(MemberNotFoundException::new);
        member.changeStatus(ApprovalStatus.CONFIRMED);

        String address = member.getUser().getEmail();
        String subject, text;

        subject = "[책무리] " + member.getUser().getName() + "님, " + member.getClub().getTitle()
                + " 독서모임 참여 신청이 승인되었습니다.";
        text = "안녕하세요, " + member.getUser().getName() + "님.\n\n요청하신 " + member.getClub().getTitle()
                + " 독서모임의 참여 신청이 승인되었습니다.\n"
                + "즐거운 모임 가지시길 바랍니다.\n\n감사합니다."
                + "\n\n- 책무리팀";
        sendAsyncMail(address, subject, text);

    }

    public Page<Member> getMemberList(String userId, String approvalStatus, int page) {
        User user = userRepository.findById(userId).orElseThrow(UserNotFoundException::new);
        Club club = clubRepository.findByUser(user).orElseThrow(ClubNotFoundException::new);
        PageRequest pageRequest = PageRequest.of((page - 1), 3, Sort.by(Sort.Direction.DESC, "id"));
        ApprovalStatus status;
        if (!approvalStatus.equals(ApprovalStatus.CONFIRMED.toString())) {
            status = ApprovalStatus.WAITING;
        } else {
            status = ApprovalStatus.CONFIRMED;
        }
        return memberRepository.findByClubAndApprovalStatus(club, status, pageRequest);
    }

    public Page<Member> getJoiningClubList(String userId, int page) {
        User user = userRepository.findById(userId).orElseThrow(UserNotFoundException::new);
        PageRequest pageRequest = PageRequest.of((page - 1), 3, Sort.by(Sort.Direction.DESC, "id"));
        return memberRepository.findAllByUser(user, pageRequest);
    }

    public List<Long> getJoiningClubIds(String userId) {
        User user = userRepository.findById(userId).orElseThrow(UserNotFoundException::new);
        List<Member> joiningClubList = memberRepository.findAllByUser(user);
        List<Long> joiningClubIdList = new ArrayList<>();
        for (Member member : joiningClubList) {
            joiningClubIdList.add(member.getClub().getId());
        }
        return joiningClubIdList;
    }

}