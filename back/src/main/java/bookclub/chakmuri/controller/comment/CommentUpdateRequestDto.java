package bookclub.chakmuri.controller.comment;

import bookclub.chakmuri.domain.Comment;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CommentUpdateRequestDto {

    private String userId; // 유저 아이디 -> 해당 댓글을 작성한 사람인지 확인
    private String contents; // 댓글 내용

   

}
