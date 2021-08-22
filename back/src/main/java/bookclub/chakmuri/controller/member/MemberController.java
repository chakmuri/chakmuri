package bookclub.chakmuri.controller.member;

import bookclub.chakmuri.domain.Member;
import bookclub.chakmuri.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/members")
@RequiredArgsConstructor
public class MemberController {

    private MemberService memberService;

    //참여신청, 참여신청 취소
    @PostMapping
    public ResponseEntity memberApply(
            @RequestBody MemberCreateRequestDto memberCreateRequestDto) {
        Member member = memberService.apply(memberCreateRequestDto);
        return new ResponseEntity(member.toString(), HttpStatus.OK);
    }

    //참여 승인

    //참여 거절, 참여자 내보내기

    //참여중인 독서모임에 추가
}
