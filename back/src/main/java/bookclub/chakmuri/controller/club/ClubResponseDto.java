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
public class ClubResponseDto {

    private Long id;                    //독서모임 아이디
    private String title;               //독서모임 이름
    private String contents;            //독서모임 한줄소개
    private String imgUrl;              //독서모임 썸네일 이미지
    private LocalDate startDate;        //독서모임 시작일
    private String tags;                //독서모임 태그
    private int likes;                  //독서모임 좋아요 수
    private ClubStatus clubStatus;      //독서모임 모집여부

    public ClubResponseDto(Club club){
        BeanUtils.copyProperties(club, this);
    }
}
