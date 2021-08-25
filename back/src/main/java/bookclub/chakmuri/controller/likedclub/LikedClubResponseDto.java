package bookclub.chakmuri.controller.likedclub;

import bookclub.chakmuri.domain.LikedClub;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class LikedClubResponseDto {
    private Long likedClubId;
    private Long clubId;


    public LikedClubResponseDto(LikedClub likedClub) {
        this.likedClubId = likedClub.getId();
        this.clubId = likedClub.getClub().getId();
    }
}