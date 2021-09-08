package bookclub.chakmuri.controller.member;

import bookclub.chakmuri.domain.Club;
import bookclub.chakmuri.domain.ClubStatus;
import bookclub.chakmuri.domain.Member;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.beans.BeanUtils;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
public class JoiningClubResponse {
    /**
     * "id": 1,
     *       "clubId": 1,
     *       "title": "스프링부트",
     *       "contents": "스프링부트 공부 모임",
     *       "imgUrl": null,
     *       "endDate": "2021-08-31",
     *       "tags": "온라인, 친목",
     *       "likes": 2,
     *       "clubStatus": "ACTIVE"
     */
    private Long id;
    private String title;
    private String contents;
    private String imgUrl;
    private LocalDate endDate; //
    private String tags;
    private Long likes;
    private ClubStatus clubStatus; //

    public JoiningClubResponse(Club club) {
        BeanUtils.copyProperties(club, this);

    }

}
