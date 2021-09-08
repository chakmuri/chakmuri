package bookclub.chakmuri.controller.member;

import bookclub.chakmuri.domain.ApprovalStatus;
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
    private Long clubId;
    private String title;
    private String contents;
    private String imgUrl;
    private LocalDate endDate;
    private String tags;
    private int likes;
    private ApprovalStatus approvalStatus;
    private ClubStatus clubStatus;

    public JoiningClubResponse(Member member) {
        this.id = member.getId();
        this.clubId = member.getClub().getId();
        this.title = member.getClub().getTitle();
        this.contents = member.getClub().getContents();
        this.imgUrl = member.getClub().getImgUrl();
        this.endDate = member.getClub().getEndDate();
        this.tags = member.getClub().getTags();
        this.likes = member.getClub().getLikes();
        this.approvalStatus = member.getApprovalStatus();
        this.clubStatus = member.getClub().getClubStatus();
    }

}
