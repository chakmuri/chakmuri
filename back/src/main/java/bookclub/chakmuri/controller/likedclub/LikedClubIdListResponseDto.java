package bookclub.chakmuri.controller.likedclub;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class LikedClubIdListResponseDto {
    private List<Long> likedClubIdList;

    public LikedClubIdListResponseDto(List<Long> likedClubIdList) {
        this.likedClubIdList = likedClubIdList;
    }
}
