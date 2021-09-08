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
    private LocalDateTime createdAt;
    private List<JoiningClubResponse> joingClubList;

    public JoiningClubPageResponse(Long totalCount, List<JoiningClubResponse> joingClubList) {
        this.totalCount = totalCount;
        this.joingClubList = joingClubList;
    }
}
