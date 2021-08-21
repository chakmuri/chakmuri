package bookclub.chakmuri.controller.club;

import bookclub.chakmuri.domain.Club;
import bookclub.chakmuri.domain.ClubStatus;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Getter
@NoArgsConstructor
public class ClubUpdateRequestDto {
    //TODO : clubStatus 관리 -> 만약 만료되었는데 startDate 를 변경한다면?

    private String title;
    private String contents;
    private String imgUrl;
    private int minPersonnel;
    private int maxPersonnel;
    private LocalDate startDate;
    private LocalDate endDate;
    private String tags;
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
