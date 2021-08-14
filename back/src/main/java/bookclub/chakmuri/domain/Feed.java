package bookclub.chakmuri.domain;

import lombok.Getter;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import static javax.persistence.FetchType.LAZY;

@Entity
@Table(name = "feeds")
@Getter
public class Feed {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "feed_id")
    private Long id;

    @JoinColumn(name = "user_id")
    @ManyToOne(fetch = LAZY, cascade = CascadeType.ALL)
    private User user;

    @JoinColumn(name = "comment_id")
    @OneToMany(mappedBy = "feed")
    private List<Comment> commentList = new ArrayList<>();

    @Column(length = 2000) @Size(max = 2000)
    private String contents;

    @Column(nullable = false)
    private String title;

    private int likes;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;

    @Lob
    private String imgUrl;


}
