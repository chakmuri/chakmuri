package bookclub.chakmuri.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

import static javax.persistence.FetchType.LAZY;

@Entity
@NoArgsConstructor //파라미터 x 생성자 자동 생성
@ToString(exclude = {"club", "memberList", "likedClubList", "commentList"})
@Table(name = "users")
@Getter
public class User {

    @Id
    //@Column(name = "user_id")
    private String id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String email;

    @Column(length = 500, nullable = false)
    private String imgUrl;

    @OneToOne(mappedBy = "user", fetch = LAZY)
    private Club club; // 내가 만든 독서모임

    @OneToMany(mappedBy = "user")
    private List<Member> memberList = new ArrayList<>();

    @OneToMany(mappedBy = "user") // 내가 좋아요한 독서모임
    private List<LikedClub> likedClubList = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private List<Comment> commentList = new ArrayList<>();

    @Builder //생성자에 @Builder를 설정하게되면 해당 생성자를 사용하는 Builder가 생성되어 의미있는 객체만 생성할 수 있음
    public User(final String id, final String name, final String email, final String imgUrl) {   //변수에 final -> 이 변수는 수정 불가
        this.id = id;
        this.name = name;
        this.email = email;
        this.imgUrl = imgUrl;
    }
}
