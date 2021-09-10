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
public class CommentCreateRequestDto {

    private String userId; // 유저 아이디
    private Long clubId; // 모임 페이지 번호
    private String contents; // 댓글 내용

    // JSON -> Entity (DTO)
    public Comment toEntity() {
        return Comment.builder()
                .contents(contents)
                .build();
    }

}
