package bookclub.chakmuri.controller.member;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class JoiningClubPageResponse {
    private Long totalCount;
    private List<JoiningClubResponse> joiningClubList;

    public JoiningClubPageResponse(Long totalCount, List<JoiningClubResponse> joiningClubList) {
        this.totalCount = totalCount;
        this.joiningClubList = joiningClubList;
    }
}
