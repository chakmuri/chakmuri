package bookclub.chakmuri.controller.likedclub;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class LikedClubPageResponseDto {
    private Long totalCount;
    private List<LikedClubResponseDto> likedClubList;

    public LikedClubPageResponseDto(Long totalCount, List<LikedClubResponseDto> likedClubList) {
        this.totalCount = totalCount;
        this.likedClubList = likedClubList;
    }
}
