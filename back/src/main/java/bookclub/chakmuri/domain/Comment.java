package bookclub.chakmuri.domain;

import lombok.Getter;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;

import static javax.persistence.FetchType.LAZY;

@Entity
@Getter
@Table(name = "comments")
public class Comment {
    @Id @GeneratedValue
    @Column(name = "comment_id")
    private Long id;

    @JoinColumn(name = "feed_id")
    @ManyToOne(fetch = LAZY)
    private Feed feed;

    @JoinColumn(name = "user_id")
    @ManyToOne(fetch = LAZY, cascade = CascadeType.ALL)
    private User user;

    @Size(max = 500)
    @Column(nullable = false)
    private String contents;

    @Column(nullable = false)
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
