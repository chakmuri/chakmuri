package bookclub.chakmuri.controller.club;

import bookclub.chakmuri.domain.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter @Setter
@NoArgsConstructor
public class ClubCreateRequestDto { //TODO:태그-> string 으로 처리, 선정도서 문제

    private String userId;
    private String title;
    private String contents;
    private String imgUrl;
    private int minPersonnel;
    private int maxPersonnel;
    private LocalDate startDate;
    private LocalDate endDate;
    private String tags;
    private int likes;              // TODO: 삭제, 자동생성 항목으로 지정(default : 0)
    private String bookDescription;
    private String description;
    private String addressDetail;
    private String addressStreet;
    private ClubStatus clubStatus;  // TODO: 삭제, 자동생성 항목으로 지정(default : ACTIVE)

    public Club toEntity(){
        return Club.builder()
                .title(title)
                .contents(contents)
                .imgUrl(imgUrl)
                .minPersonnel(minPersonnel)
                .maxPersonnel(maxPersonnel)
                .startDate(startDate)
                .endDate(endDate)
                .tags(tags)
                .likes(likes)
                .bookDescription(bookDescription)
                .description(description)
                .addressDetail(addressDetail)
                .addressStreet(addressStreet)
                .clubStatus(clubStatus)
                .build();
    }
}
