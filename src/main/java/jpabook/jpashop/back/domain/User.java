package jpabook.jpashop.back.domain;

import lombok.Getter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

import static javax.persistence.FetchType.LAZY;

@Entity
@Table(name = "users")
@Getter
public class User {

    @Id
    @GeneratedValue
    @Column(name = "user_id")
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private String platform; // OAuth 종류

    private String imgUrl;

    @OneToOne(mappedBy = "user", fetch = LAZY)
    private Club club; // 내가 만든 독서모임

    @OneToMany(mappedBy = "user") // 내가 참여중인 독서모임
    private List<Member> memberList = new ArrayList<>();

    @OneToMany(mappedBy = "user") // 내가 좋아요한 독서모임
    private List<LikedClub> likedClubList = new ArrayList<>();


    @OneToMany(mappedBy = "user")
    private List<Feed> feedList = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private List<Comment> commentList = new ArrayList<>();
}
