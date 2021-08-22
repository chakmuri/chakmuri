package bookclub.chakmuri.service;

import bookclub.chakmuri.controller.member.MemberCreateRequestDto;
import bookclub.chakmuri.domain.Club;
import bookclub.chakmuri.domain.Member;
import bookclub.chakmuri.domain.User;
import bookclub.chakmuri.repository.ClubRepository;
import bookclub.chakmuri.repository.LikedClubRepository;
import bookclub.chakmuri.repository.MemberRepository;
import bookclub.chakmuri.repository.UserRepository;
import lombok.RequiredArgsConstructor;
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
    public Member apply(MemberCreateRequestDto memberCreateRequestDto){
        final Member newMember = convertToMember(memberCreateRequestDto.toEntity(),
                memberCreateRequestDto.getUserId(),
                memberCreateRequestDto.getClubId());
        return memberRepository.save(newMember);
    }

    private Member convertToMember(Member member, String userId, Long clubId){
        User user = userRepository.findById(userId)
                .orElseThrow(); // TODO: UserNotFoundException
        Club club = clubRepository.findById(clubId)
                .orElseThrow(); // TODO: ClubNotFoundException
        return member.builder()
                .user(user)
                .club(club)
                .approvalStatus(member.getApprovalStatus())
                .build();
    }
}
