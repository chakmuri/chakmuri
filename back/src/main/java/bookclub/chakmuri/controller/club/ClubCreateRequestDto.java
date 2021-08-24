package bookclub.chakmuri.controller.club;

import bookclub.chakmuri.domain.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter @Setter
@NoArgsConstructor
public class ClubCreateRequestDto {

    private String userId;
    private String title;
    private String contents;
    private String imgUrl;
    private int minPersonnel;
    private int maxPersonnel;
    private LocalDate startDate;
    private LocalDate endDate;
    private String tags;            // TODO: string 데이터 형식 결정. 검색기능 구현하면서 바뀔 여지 있음
    private String books;
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
                .startDate(startDate)
                .endDate(endDate)
                .tags(tags)
                .bookDescription(bookDescription)
                .description(description)
                .addressDetail(addressDetail)
                .addressStreet(addressStreet)
                .build();
    }
}