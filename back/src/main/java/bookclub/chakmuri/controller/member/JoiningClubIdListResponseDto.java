package bookclub.chakmuri.controller.member;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class JoiningClubIdListResponseDto {
    private List<Long> joiningClubIdList;

    public JoiningClubIdListResponseDto(List<Long> joiningClubIdList) {
        this.joiningClubIdList = joiningClubIdList;
    }
}