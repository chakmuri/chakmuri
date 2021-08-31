package bookclub.chakmuri.controller.comment;

import bookclub.chakmuri.domain.Comment;
import bookclub.chakmuri.service.CommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@RequestMapping("/comments")
public class CommentController {

    private final CommentService commentService;

    // 댓글 등록
    @PostMapping
    public ResponseEntity<CommentResponseDto> createComment(
            @RequestBody CommentCreateRequestDto commentCreateRequestDto) {
        Comment comment = commentService.createComment(commentCreateRequestDto);
        return new ResponseEntity(
                "댓글이 성공적으로 등록되었습니다. (commentId: " + comment.getId() + ")",
                HttpStatus.OK
        );
    }

    // 댓글 수정
    @PutMapping("/{commentId}")
    public ResponseEntity<Void> updateComment(
            @RequestBody CommentUpdateRequestDto commentUpdateRequestDto,
            @PathVariable("commentId") Long commentId) {
        commentService.updateComment(commentUpdateRequestDto, commentId);

        return new ResponseEntity(
                "댓글이 성공적으로 수정되었습니다. (commentId: " + commentId + ")",
                HttpStatus.OK
        );

    }

    // 댓글 삭제
    @DeleteMapping("/{commentId}")
    public ResponseEntity<Void> deleteComment(
            @PathVariable("commentId") Long commentId) {
        commentService.deleteComment(commentId);
        return new ResponseEntity(
                "댓글이 성공적으로 삭제되었습니다. (commentId: " + commentId + ")",
                HttpStatus.OK
        );
    }

    // 모임상세 댓글 전체 조회
    @GetMapping("/clubs/{clubId}")
    public ResponseEntity<CommentPageResponseDto> getClubComments(
            @PathVariable("clubId") Long clubId, @RequestParam("page") int page){
        Page<Comment> allClubComments = commentService.findAllClubComments(clubId, page);
        Long totalCount = allClubComments.getTotalElements();
        List<CommentResponseDto> response = allClubComments
                .stream()
                .map(CommentResponseDto::new)
                .collect(Collectors.toList());
        CommentPageResponseDto pageResponseDto = new CommentPageResponseDto(totalCount, response);
        return new ResponseEntity(pageResponseDto, HttpStatus.OK);
    }

    // 사용자 댓글 전체 조회
    @GetMapping("/users/{userId}")
    public ResponseEntity<CommentPageResponseDto> getUserComments(
                @PathVariable("userId") String userId, @RequestParam("page") int page) {
        Page<Comment> allClubComments = commentService.findAllUserComments(userId, page);
        Long totalCount = allClubComments.getTotalElements();
        List<CommentResponseDto> response = allClubComments
                .stream()
                .map(CommentResponseDto::new)
                .collect(Collectors.toList());
        CommentPageResponseDto pageResponseDto = new CommentPageResponseDto(totalCount, response);
        return new ResponseEntity(pageResponseDto, HttpStatus.OK);
    }

    // 댓글 전체 삭제
//    @DeleteMapping
//    public ResponseEntity<Void> deleteAllComment() {
//        commentService.deleteAll();
//        return new ResponseEntity(
//                "댓글이 모두 삭제되었습니다.",
//                HttpStatus.OK
//        );
//
//    }

}
