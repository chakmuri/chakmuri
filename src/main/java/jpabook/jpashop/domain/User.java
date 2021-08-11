package jpabook.jpashop.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

import java.util.ArrayList;
import java.util.List;

import static javax.persistence.FetchType.*;

@Entity
@Table(name = "users")
@Getter
@Setter
public class User {

    @Id
    @GeneratedValue
    @Column(name = "userId")
    private int id;
    private String name;
    private String email;
    private String imgUrl;
    private String platform; // Aouth 종류

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
