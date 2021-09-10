package bookclub.chakmuri.controller.member;

import bookclub.chakmuri.domain.ApprovalStatus;
import bookclub.chakmuri.domain.Member;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.beans.BeanUtils;

@Getter
@Setter
@NoArgsConstructor
public class MemberResponseDto {
    private Long id;
    private Long clubId;
    private String userId;
    private String imgUrl;
    private String name;
    private String email;
    private ApprovalStatus approvalStatus;

    public MemberResponseDto(Member member) {
        BeanUtils.copyProperties(member, this);
        this.clubId = member.getClub().getId();
        this.userId = member.getUser().getId();
        this.imgUrl = member.getUser().getImgUrl();
        this.name = member.getUser().getName();
        this.email = member.getUser().getEmail();
    }
}
