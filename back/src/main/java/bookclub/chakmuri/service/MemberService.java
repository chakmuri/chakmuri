package bookclub.chakmuri.service;

import bookclub.chakmuri.controller.member.MemberCreateRequestDto;
import bookclub.chakmuri.domain.ApprovalStatus;
import bookclub.chakmuri.domain.Club;
import bookclub.chakmuri.domain.Member;
import bookclub.chakmuri.domain.User;
import bookclub.chakmuri.repository.ClubRepository;
import bookclub.chakmuri.repository.LikedClubRepository;
import bookclub.chakmuri.repository.MemberRepository;
import bookclub.chakmuri.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class MemberService {

    private final MemberRepository memberRepository;
    private final UserRepository userRepository;
    private final ClubRepository clubRepository;
    private final MailService mailService;

    @Transactional
    public Member apply(MemberCreateRequestDto request){
        User user = userRepository.findById(request.getUserId()).orElseThrow();
        Club club = clubRepository.findById(request.getClubId()).orElseThrow();

        if(memberRepository.findByUserAndClub(user, club).isPresent()){
            return null;
        }

        Member member = Member.builder().user(user).club(club).approvalStatus(ApprovalStatus.WAITING).build();
        return memberRepository.save(member);
    }

    @Transactional
    public void deleteMember(String userId, Long clubId, String deleteStatus){
        User user = userRepository.findById(userId).orElseThrow();
        Club club = clubRepository.findById(clubId).orElseThrow();
        Member member = memberRepository.findByUserAndClub(user, club).orElseThrow();
        memberRepository.delete(member);

        String address = user.getEmail();
        String subject, text;

        // 없으면 참여신청 취소, no 면 거절, out 이면 내보내기
        if(deleteStatus.equals("no")){
            subject = "[책무리] " + user.getName() + "님, " + club.getTitle()
                    + " 독서모임 참여 신청이 거절되었습니다.";
            text = "안녕하세요, " + user.getName() + "님.\n\n요청하신 " + club.getTitle()
                    + " 독서모임의 참여 신청이 거절되었습니다.\n"
                    + "아쉽지만 다른 독서모임에 참여 신청 부탁드립니다.\n\n감사합니다."
                    + "\n\n- 책무리팀";
            mailService.mailSend(address, subject, text);
        } else if(deleteStatus.equals("out")){
            subject = "[책무리] " + user.getName() + "님, " + club.getTitle()
                    + " 독서모임의 참여자에서 내보내기 되었습니다.";
            text = "안녕하세요, " + user.getName() + "님.\n\n" + club.getTitle()
                    + " 독서모임 참여자 목록에서 내보내기 된 내역이 확인되었습니다.\n"
                    + "아쉽지만 다른 독서모임에 참여 신청 부탁드립니다.\n\n감사합니다."
                    + "\n\n- 책무리팀";
            mailService.mailSend(address, subject, text);
        }
    }

    public Page<Member> getMemberList(String userId, String approvalStatus, int page){
        User user = userRepository.findById(userId).orElseThrow();
        PageRequest pageRequest = PageRequest.of((page - 1), 3, Sort.by(Sort.Direction.DESC, "id"));
        ApprovalStatus status;
        if(!approvalStatus.equals(ApprovalStatus.CONFIRMED.toString())){
            status = ApprovalStatus.WAITING;
        }else {
            status = ApprovalStatus.CONFIRMED;
        }
        return memberRepository.findByUserAndApprovalStatus(user, status, pageRequest);
    }

    public Page<Member> getJoiningClubList(String userId, int page) {
        User user = userRepository.findById(userId).orElseThrow();
        PageRequest pageRequest = PageRequest.of((page - 1), 3, Sort.by(Sort.Direction.DESC, "id"));
        return memberRepository.findAllByUser(user, pageRequest);
    }
}
