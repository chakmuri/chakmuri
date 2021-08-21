package bookclub.chakmuri.controller.club;

import bookclub.chakmuri.domain.*;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Getter
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
    private int likes;
    private String bookDescription;
    private String description;
    private String addressDetail;
    private String addressStreet;
    private ClubStatus clubStatus;

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
