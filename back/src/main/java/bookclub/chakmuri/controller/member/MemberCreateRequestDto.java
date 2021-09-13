package bookclub.chakmuri.controller.member;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class MemberCreateRequestDto {
    private String userId;
    private Long clubId;
}
