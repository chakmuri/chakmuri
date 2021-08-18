package bookclub.chakmuri.controller.club;

import bookclub.chakmuri.domain.*;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Getter
@NoArgsConstructor
public class ClubCreateRequestDto { //태그와 선정도서는 따로 처리

    private String userId;
    private String title;
    private String contents;
    private String imgUrl;
    private int minPersonnel;
    private int maxPersonnel;
    private LocalDate startDate;
    private LocalDate endDate;
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
                .likes(likes)
                .bookDescription(bookDescription)
                .description(description)
                .addressDetail(addressDetail)
                .addressStreet(addressStreet)
                .clubStatus(clubStatus)
                .build();
    }
}
