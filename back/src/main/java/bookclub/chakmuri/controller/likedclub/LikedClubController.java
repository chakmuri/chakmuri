package bookclub.chakmuri.controller.likedclub;

import bookclub.chakmuri.domain.LikedClub;
import bookclub.chakmuri.service.LikedClubService;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/likedClubs")
public class LikedClubController {

    private LikedClubService likedClubService;

    public LikedClubController(LikedClubService likedClubService) {
        this.likedClubService = likedClubService;
    }

    @PostMapping
    public ResponseEntity<LikedClubResponseDto> createLikedClub(
            @RequestBody LikedClubCreateRequestDto likedClubRequestDto) {

        if(likedClubService.createLikedClub(likedClubRequestDto) == null) {
            return new ResponseEntity(
                    "이미 좋아요한 독서모임 입니다.", HttpStatus.OK
            );
        }

        return new ResponseEntity(
                "정상적으로 등록됐습니다.", HttpStatus.OK
        );
    }

    @DeleteMapping("/{likeClubId}")
    public ResponseEntity<Void> deleteLikedClub(
            @PathVariable("likeClubId") Long likeClubId) {
        likedClubService.deleteLikedClub(likeClubId);
        return new ResponseEntity(
                "정상적으로 삭제되었습니다.", HttpStatus.OK
        );
    }

    // 사용자가 등록한 좋아요 모임 조회
    @GetMapping("/users/{userId}")
    public ResponseEntity<LikedClubPageResponseDto> getUserLikedClubs(
            @PathVariable("userId") String userId,
            @RequestParam("page") int page) {
        Page<LikedClub> allUserLikedClubs = likedClubService.findAllUserLikedClubs(userId, page);
        Long totalCount = allUserLikedClubs.getTotalElements();
        List<LikedClubResponseDto> response = allUserLikedClubs
                .stream()
                .map(LikedClubResponseDto::new)
                .collect(Collectors.toList());
        LikedClubPageResponseDto likedClubPageResponseDto = new LikedClubPageResponseDto(totalCount, response);
        return new ResponseEntity(likedClubPageResponseDto, HttpStatus.OK);
    }

}