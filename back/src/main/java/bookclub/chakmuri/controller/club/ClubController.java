package bookclub.chakmuri.controller.club;

import bookclub.chakmuri.service.ClubService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

import static bookclub.chakmuri.util.Utils.getStatusCode;

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

    //독서모임 리스트 조회(검색조건 x)
    @GetMapping("/")    // "/"으로 할지 아니면 아예 없앨지 결정할 것
    public ResponseEntity<List<ClubResponseDto>> getClubs(){
        List<ClubResponseDto> clubResponseDtoList = clubService.findAllClubs()
                .stream()
                .map(ClubResponseDto::new)  //조회한 클럽 리스트 항목 하나하나를 ClubResponseDto와 매핑해 줌
                .collect(Collectors.toList());  //스트림에서 작업한 결과를 담은 리스트로 반환
        //Collectors.joining(delimeter, prefix, suffix)로 스트링으로 조합할 수 있음
        return new ResponseEntity<>(clubResponseDtoList, getStatusCode(clubResponseDtoList));
        //getStatusCode -> 검색 결과가 없습니다(204) 포함
    }

    //독서모임 상세조회
    @GetMapping("/{clubId}")
    public ResponseEntity<ClubDetailResponseDto> getClubDetail(
            @PathVariable(value = "clubId") Long clubId){
        return ResponseEntity.ok(
                new ClubDetailResponseDto(clubService.findClubById(clubId))
        );
    }

    //좋아요한 독서모임에 추가

    //참여신청
}
