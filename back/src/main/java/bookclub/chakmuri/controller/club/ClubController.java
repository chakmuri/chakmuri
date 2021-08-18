package bookclub.chakmuri.controller.club;

import bookclub.chakmuri.repository.ClubRepository;
import bookclub.chakmuri.service.ClubService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/clubs")
@RequiredArgsConstructor
public class ClubController {

    private final ClubService clubService;

    //독서모임 생성
    @PostMapping("/create")
    public ResponseEntity createClub(
            @RequestBody ClubCreateRequestDto clubCreateRequestDto){
        return ResponseEntity.ok(
                new ClubResponseDto(
                        clubService.createClub(clubCreateRequestDto.toEntity(),
                                clubCreateRequestDto.getUserId())
                )
        );
    }

    //독서모임 리스트 조회

    //독서모임 상세조회
    @GetMapping("/{clubId}")
    public ResponseEntity<ClubDetailResponseDto> searchClubDetail(
            @PathVariable(value = "clubId") Long clubId){
        return ResponseEntity.ok(
                new ClubDetailResponseDto(clubService.searchClub(clubId))
        );
    }

    //좋아요한 독서모임에 추가

    //참여신청
}
