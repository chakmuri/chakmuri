package bookclub.chakmuri.controller.member;

import bookclub.chakmuri.domain.Member;
import bookclub.chakmuri.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/members")
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;

    //참여신청 -> 독서모임장에게 메일
    @PostMapping
    public ResponseEntity<MemberResponseDto> memberApply(
            @RequestBody MemberCreateRequestDto memberCreateRequestDto) {
        try {
            Member member = memberService.apply(memberCreateRequestDto);
            return new ResponseEntity("참여신청이 완료되었습니다. (memberId : " + member.getId() + ")", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity("이미 참여신청된 독서모임 입니다.", HttpStatus.BAD_REQUEST);
        }
    }

    //참여신청 취소, 참여신청 거절, 참여자 내보내기 -> 참여신청자에게 메일(거절/ 내보내기)
    @DeleteMapping
    public ResponseEntity<MemberResponseDto> memberCancel(
            @RequestParam("userId") String userId,
            @RequestParam("clubId") Long clubId,
            @RequestParam("delete") String deleteStatus) {
        memberService.deleteMember(userId, clubId, deleteStatus);
        return new ResponseEntity("독서모임 참여가 취소되었습니다.", HttpStatus.OK);
    }

    //참여 승인 -> 참여중인 독서모임에 추가, 참여 신청자에게 메일(승인되었습니다)
    @PutMapping
    public ResponseEntity<MemberResponseDto> memberApprove(
            @RequestParam("memberId") Long memberId) {
        memberService.approveMember(memberId);
        return new ResponseEntity("참여가 승인되었습니다.", HttpStatus.OK);
    }

    //승인 대기자 목록 조회, 참여자 목록 조회 (approvalStatus: WAITING -> 승인대기자, COMFIRMED -> 참여자)
    @GetMapping
    public ResponseEntity<MemberPageResponseDto> getMembers(
            @RequestParam("userId") String userId,
            @RequestParam("approvalStatus") String approvalStatus,
            @RequestParam("page") int page) {
        Page<Member> allMembers = memberService.getMemberList(userId, approvalStatus, page);
        Long totalCount = allMembers.getTotalElements();
        List<MemberResponseDto> response = allMembers
                .stream()
                .map(MemberResponseDto::new)
                .collect(Collectors.toList());
        MemberPageResponseDto memberPageResponseDto = new MemberPageResponseDto(totalCount, response);
        return new ResponseEntity(memberPageResponseDto, HttpStatus.OK);
    }

    //참여중인 독서모임 조회
    @GetMapping("/users/{userId}")
    public ResponseEntity<JoiningClubPageResponse> getJoiningClubs(
            @PathVariable("userId") String userId,
            @RequestParam("page") int page) {
        Page<Member> allJoiningClubs = memberService.getJoiningClubList(userId, page);
        Long totalCount = allJoiningClubs.getTotalElements();
        List<JoiningClubResponse> response = allJoiningClubs
                .stream()
                .map(JoiningClubResponse::new)
                .collect(Collectors.toList());
        JoiningClubPageResponse joiningClubPageResponse = new JoiningClubPageResponse(totalCount, response);
        return new ResponseEntity(joiningClubPageResponse, HttpStatus.OK);
    }
}
