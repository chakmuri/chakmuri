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
    public void deleteMember(String userId, Long clubId){
        User user = userRepository.findById(userId).orElseThrow();
        Club club = clubRepository.findById(clubId).orElseThrow();
        Member member = memberRepository.findByUserAndClub(user, club).orElseThrow();
        memberRepository.delete(member);
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

    public Page<Club> getJoingClubList(String userId, String approvalStatus, int page) {
        User user = userRepository.findById(userId).orElseThrow();
        Club club = clubRepository.findByUser(user).orElseThrow();
        PageRequest pageRequest = PageRequest.of((page - 1), 3, Sort.by(Sort.Direction.DESC, "id"));

        if(approvalStatus.equals(ApprovalStatus.CONFIRMED.toString())) {
            return memberRepository.findAllByClub(club, pageRequest);
        } else {
            return null;
        }
    }
}
