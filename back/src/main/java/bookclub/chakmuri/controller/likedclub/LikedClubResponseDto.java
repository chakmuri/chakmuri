package bookclub.chakmuri.controller.likedclub;

import bookclub.chakmuri.domain.Club;
import bookclub.chakmuri.domain.ClubStatus;
import bookclub.chakmuri.domain.LikedClub;
import lombok.*;
import org.springframework.beans.BeanUtils;

import java.time.LocalDate;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class LikedClubResponseDto {
    private Long id;                    // 좋아요한 독서모임 아이디
    private Long clubId;
    private String title;               //독서모임 이름
    private String contents;            //독서모임 한줄소개
    private String imgUrl;              //독서모임 썸네일 이미지
    private LocalDate endDate;        //독서모임 시작일
    private String tags;                //독서모임 태그
    private int likes;                  //독서모임 좋아요 수
    private ClubStatus clubStatus;      //독서모임 모집여부


    public LikedClubResponseDto(LikedClub likedClub) {
        this.id = likedClub.getId();
        this.clubId = likedClub.getClub().getId();
        this.title = likedClub.getClub().getTitle();
        this.contents = likedClub.getClub().getContents();
        this.imgUrl = likedClub.getClub().getImgUrl();
        this.endDate = likedClub.getClub().getEndDate();
        this.tags = likedClub.getClub().getTags();
        this.likes = likedClub.getClub().getLikes();
        this.clubStatus = likedClub.getClub().getClubStatus();
    }
}