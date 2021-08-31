package bookclub.chakmuri.controller.member;

import bookclub.chakmuri.domain.ApprovalStatus;
import bookclub.chakmuri.domain.Member;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class MemberCreateRequestDto {

    private String userId;
    private Long clubId;
    private ApprovalStatus approvalStatus;

    public Member toEntity(){
        return Member.builder()
                .approvalStatus(approvalStatus)
                .build();
    }
}
