package bookclub.chakmuri.controller.comment;

import bookclub.chakmuri.service.CommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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


    @DeleteMapping("/{commentId}")
    public ResponseEntity<Void> deleteComment(
            @RequestBody CommentDeleteRequestDto commentDeleteRequestDto,
            @PathVariable("commentId") Long commentId) {
        commentService.deleteComment(commentDeleteRequestDto.getUserId(), commentId);
        return ResponseEntity.noContent().build(); // 204 반환
    }






}
