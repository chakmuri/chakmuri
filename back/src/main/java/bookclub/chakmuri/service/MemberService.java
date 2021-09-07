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
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class MemberService {

    private final MemberRepository memberRepository;
    private final UserRepository userRepository;
    private final ClubRepository clubRepository;

    //TODO: LikedClubRepositoryCustom 설정 후 applyId 생성 작업
    @Transactional
    public Member apply(MemberCreateRequestDto request){
        User user = userRepository.findById(request.getUserId()).orElseThrow();
        Club club = clubRepository.findById(request.getClubId()).orElseThrow();
        Member member = Member.builder().user(user).club(club).approvalStatus(ApprovalStatus.WAITING).build();
        return memberRepository.save(member);
    }

    @Transactional
    public void deleteMember(String userId){

    }

//    public Page<Member> getMemberList(Long clubId, String approvalStauts, int page){
//        Club club = clubRepository.findById(clubId).orElseThrow();
//
//    }
}
