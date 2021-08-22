package bookclub.chakmuri.controller.club;

import bookclub.chakmuri.domain.Club;
import bookclub.chakmuri.domain.ClubStatus;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.beans.BeanUtils;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
public class ClubDetailResponseDto {    //태그와 선정도서는 따로 처리

    private Long id;                    //독서모임 아이디
    private String userId;              //독서모임 생성자 아이디
    private String title;               //독서모임 이름
    private String contents;            //독서모임 한줄소개
    private String imgUrl;              //독서모임 썸네일 이미지
    private int minPersonnel;           //독서모임 최소인원
    private int maxPersonnel;           //독서모임 최대인원
    private LocalDate startDate;        //독서모임 시작일
    private LocalDate endDate;          //독서모임 종료일
    private int likes;                  //독서모임 좋아요 수
    private String bookDescription;     //독서모임 선정도서 소개글
    private String description;         //독서모임 상세설명
    private String addressDetail;       //독서모임 위치 상세주소
    private String addressStreet;       //독서모임 위치 도로명주소
    private ClubStatus clubStatus;      //독서모임 모집여부

    public ClubDetailResponseDto(Club club){
        BeanUtils.copyProperties(club, this);
    }
}
