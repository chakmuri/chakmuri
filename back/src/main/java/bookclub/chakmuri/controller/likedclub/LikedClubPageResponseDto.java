package bookclub.chakmuri.controller.likedclub;

import java.util.List;

public class LikedClubPageResponseDto {

    private Long totalCount;
    private List<LikedClubResponseDto> likedClubList;

    public LikedClubPageResponseDto(Long totalCount, List<LikedClubResponseDto> likedClubList) {
        this.totalCount = totalCount;
        this.likedClubList = likedClubList;
    }
}