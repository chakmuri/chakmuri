package jpabook.jpashop.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import static javax.persistence.FetchType.LAZY;

@Entity
@Table(name = "feeds")
@Getter @Setter
public class Feed {
    @Id @GeneratedValue
    @Column(name = "feedId")
    private Long id;

    @JoinColumn(name = "userId")
    @ManyToOne(fetch = LAZY, cascade = CascadeType.ALL)
    private User user;

    @JoinColumn(name = "commentId")
    @OneToMany(mappedBy = "feed")
    private List<Comment> commentList = new ArrayList<>();

    private String title;
    private int likes;
    private String contents;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private String imgUrl;


}
