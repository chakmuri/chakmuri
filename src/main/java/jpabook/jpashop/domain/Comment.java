package jpabook.jpashop.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

import static javax.persistence.FetchType.LAZY;

@Entity
@Getter @Setter
@Table(name = "comments")
public class Comment {
    @Id @GeneratedValue
    @Column(name = "commentId")
    private long id;

    @JoinColumn(name = "feedId")
    @ManyToOne(fetch = LAZY)
    private Feed feed;

    @JoinColumn(name = "userId")
    @ManyToOne(fetch = LAZY, cascade = CascadeType.ALL)
    private User user;


    private String contents;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
