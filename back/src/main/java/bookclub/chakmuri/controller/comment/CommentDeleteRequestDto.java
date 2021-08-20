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
public class CommentDeleteRequestDto {
    private String userId;
}
