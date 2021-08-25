package bookclub.chakmuri.controller.club;

import bookclub.chakmuri.domain.Club;
import bookclub.chakmuri.service.ClubService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.stream.Collectors;

import static bookclub.chakmuri.util.Utils.getStatusCode;

@RestController
@RequestMapping("/clubs")
@RequiredArgsConstructor
public class ClubController {

    private final ClubService clubService;

    //TODO: AWS S3 서비스 이용, pageable 설정
    //TODO: 독서모임 검색(검색조건 - 태그, 모집중 여부, 정렬, 검색 키워드)
    //TODO: 독서모임 만료 로직 -> status가 expired면 참여신청 불가

    //독서모임 생성
    @PostMapping
    public ResponseEntity<ClubCreateRequestDto> createClub(
            @RequestBody ClubCreateRequestDto clubCreateRequestDto,
            @RequestParam(value = "img", required = false) MultipartFile file) {
        //이 유저가 만든 독서모임이 있는지 체크(한사람당 한 개)
        //400 에러 -> 잘못된 요청
        if(clubService.findClubByUserId(clubCreateRequestDto.getUserId()) != null){
            return new ResponseEntity("한 사람 당 하나의 독서모임만 생성할 수 있습니다.", HttpStatus.BAD_REQUEST);
        }
        else {
            Club club = clubService.createClub(clubCreateRequestDto, file);
            return new ResponseEntity("독서모임 등록이 완료되었습니다. (clubId: " + club.getId() + ")", HttpStatus.OK);
        }
    }

    //독서모임 리스트 조회(검색조건 x)
    @GetMapping
    public ResponseEntity<List<ClubResponseDto>> getClubs() {
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
            @PathVariable Long clubId) {
        return ResponseEntity.ok(
                new ClubDetailResponseDto(clubService.findClubById(clubId))
        );
    }

    //사용자가 만든 독서모임 조회
    @GetMapping("/{userId}")
    public ResponseEntity<ClubDetailResponseDto> getUserClub(
            @PathVariable String userId) {
        Club club = clubService.findClubByUserId(userId);
        if (club != null) {
            return ResponseEntity.ok(new ClubDetailResponseDto(club));
        } else {
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        }
    }

    // 독서모임 수정 (my page)
    @PatchMapping("/{userId}")
    public ResponseEntity<Void> updateClub(
            @RequestBody ClubUpdateRequestDto clubUpdateRequestDto,
            @PathVariable String userId) {
        clubService.updateClub(clubUpdateRequestDto, userId);
        return new ResponseEntity("독서모임 수정이 완료되었습니다.", HttpStatus.OK);
    }

    // 독서모임 삭제 (my page)
    @DeleteMapping("/{userId}")
    public ResponseEntity<Void> deleteClub(
            @PathVariable String userId) {
        clubService.deleteClub(userId);
        return new ResponseEntity("독서모임 삭제가 완료되었습니다.", HttpStatus.OK);
    }

}