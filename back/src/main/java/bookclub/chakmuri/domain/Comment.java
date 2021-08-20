package bookclub.chakmuri.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;
import static javax.persistence.FetchType.LAZY;

@Entity
@NoArgsConstructor
@Getter
@Table(name = "comments")
public class Comment {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    //@Column(name = "comment_id")
    private Long id;


    @JoinColumn(name = "club_id")
    @ManyToOne(fetch = LAZY, cascade = CascadeType.ALL)
    private Club club;

    @JoinColumn(name = "user_id")
    @ManyToOne(fetch = LAZY, cascade = CascadeType.ALL)
    private User user;

    @Column(length = 500, nullable = false) @Size(max = 500)
    private String contents;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;


    // 댓글 수정 -> setter역할 (변경감지 활용)
    public void updateComment(String newComment) {
        this.contents = newComment;
    }

    /**
     * 1. 사용자 이미지 -> 어떻게 가져올까?
     * 2. 작성자 아이디(유저 아이디)
     * 3. 작성 시간 (미정)
     * 4. 댓글내용
     */
    @Builder
    public Comment(Club club, User user, String contents) {
        this(null, club, user, contents, null, null);
    }

    public Comment(Long id, Club club, User user, String contents, LocalDateTime createdAt, LocalDateTime updatedAt) {
        this.id = id;
        this.club = club;
        this.user = user;
        this.contents = contents;
        this.createdAt = LocalDateTime.now(); // 추후 수정 꼭 !!
        this.updatedAt = updatedAt; // null
    }
}
