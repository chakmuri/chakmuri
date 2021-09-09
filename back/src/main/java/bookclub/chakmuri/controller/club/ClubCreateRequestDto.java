package bookclub.chakmuri.controller.club;

import bookclub.chakmuri.domain.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter
@NoArgsConstructor
public class ClubCreateRequestDto {

    private String userId;
    private String title;
    private String contents;
    private String imgUrl;
    private int minPersonnel;
    private int maxPersonnel;
    private String startDate;
    private String endDate;
    private String tags;
    private String bookTitle;
    private String author;
    private String publisher;
    private int publishedAt;
    private String bookDescription;
    private String description;
    private String addressDetail;
    private String addressStreet;

    public Club toEntity(){
        return Club.builder()
                .title(title)
                .contents(contents)
                .imgUrl(imgUrl)
                .minPersonnel(minPersonnel)
                .maxPersonnel(maxPersonnel)
                .tags(tags)
                .description(description)
                .addressDetail(addressDetail)
                .addressStreet(addressStreet)
                .build();
    }
}