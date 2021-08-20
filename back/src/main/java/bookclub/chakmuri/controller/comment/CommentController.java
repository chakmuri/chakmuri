package bookclub.chakmuri.controller.comment;

import bookclub.chakmuri.service.CommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

import static bookclub.chakmuri.util.Utils.getStatusCode;

@RestController
@RequiredArgsConstructor
@RequestMapping("/comments")
public class CommentController {

    private final CommentService commentService;

    // 댓글 등록
    @PostMapping
    public ResponseEntity<CommentResponseDto> createComment(
            @RequestBody CommentCreateRequestDto commentCreateRequestDto) {
        return ResponseEntity.ok(
                new CommentResponseDto(commentService.createComment(
                        commentCreateRequestDto.toEntity(),
                        commentCreateRequestDto.getUserId(),
                        commentCreateRequestDto.getClubId()))
                );
    }

    // 댓글 수정
    @PatchMapping("/{commentId}")
    public ResponseEntity<Void> updateComment(
            @RequestBody CommentUpdateRequestDto commentUpdateRequestDto,
            @PathVariable("commentId") Long commentId) {
         commentService.updateComment(
                commentUpdateRequestDto.toEntity(),
                commentId,
                commentUpdateRequestDto.getUserId());
        return ResponseEntity.ok().build();
    }

    // 댓글 삭제
    @DeleteMapping("/{commentId}")
    public ResponseEntity<Void> deleteComment(
            @PathVariable("commentId") Long commentId) {
        commentService.deleteComment(commentId);
        return ResponseEntity.noContent().build(); // 204 반환
    }

    // 모임상세 댓글 전체 조회
    @GetMapping("/club/{clubId}")
    public ResponseEntity<List<CommentResponseDto>> getClubComments(
            @PathVariable("clubId") Long clubId) {
        List<CommentResponseDto> response = commentService.findAllClubComments(clubId)
                .stream()
                .map(CommentResponseDto::new)
                .collect(Collectors.toList());
        return new ResponseEntity<>(response, getStatusCode(response));
    }






}
