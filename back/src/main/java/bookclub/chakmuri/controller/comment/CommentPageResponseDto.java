package bookclub.chakmuri.controller.comment;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class CommentPageResponseDto {

    private Long totalCount;
    private List<CommentResponseDto> commentList;

    public CommentPageResponseDto(Long totalCount, List<CommentResponseDto> commentList) {
        this.totalCount = totalCount;
        this.commentList = commentList;
    }
}
