package bookclub.chakmuri.controller.member;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class MemberPageResponseDto {
    private Long totalCount;
    private List<MemberResponseDto> memberList;

    public MemberPageResponseDto(Long totalCount, List<MemberResponseDto> memberList) {
        this.totalCount = totalCount;
        this.memberList = memberList;
    }
}
