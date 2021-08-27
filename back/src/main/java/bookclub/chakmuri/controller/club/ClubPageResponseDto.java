package bookclub.chakmuri.controller.club;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class ClubPageResponseDto {
    private Long totalCount;
    private List<ClubResponseDto> clubList;

    public ClubPageResponseDto(Long totalCount, List<ClubResponseDto> clubList){
        this.totalCount = totalCount;
        this.clubList = clubList;
    }
}
