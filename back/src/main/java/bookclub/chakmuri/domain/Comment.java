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
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "comment_id")
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
}
