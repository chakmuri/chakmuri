package bookclub.chakmuri.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import static javax.persistence.FetchType.LAZY;

@Entity
@NoArgsConstructor
@ToString(exclude = {"commentList", "bookList", "memberList"})
@Table(name = "clubs")
@Getter
public class Club {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) //데이터베이스에 위임(자동생성, auto_increment)
    //@Column(name = "club_id")
    private Long id;

    @JoinColumn(name = "user_id")
    @OneToOne(fetch = LAZY, cascade = CascadeType.ALL)
    private User user;

    @OneToMany(mappedBy = "club")
    private List<Comment> commentList = new ArrayList<>();

    @OneToMany(mappedBy = "club")
    private List<Book> bookList = new ArrayList<>();

    @OneToMany(mappedBy = "club")
    private List<Member> memberList = new ArrayList<>();

    @Column(length = 2000, nullable = false) @Size(max = 2000)
    private String description;

    @Column(length = 2000) @Size(max = 2000)
    private String bookDescription;

    @Column(nullable = false)
    private String title;

    @Lob
    private String imgUrl;

    @Column(nullable = false)
    private String contents;

    @Column(nullable = false)
    private LocalDate startDate;

    @Column(nullable = false)
    private LocalDate endDate;

    private String tags;        //TODO: FE에 "," 기준 split 으로 분리 요청

    @Column(nullable = false)
    private int minPersonnel;

    @Column(nullable = false)
    private int maxPersonnel;

    private String addressDetail;

    private String addressStreet;

    private int likes;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private ClubStatus clubStatus; // [ACTIVE, EXPIRED]

    @Builder    //TODO : List<Book> bookList, user 에 final 추가
    public Club(User user, String title, String contents, String imgUrl, int minPersonnel, int maxPersonnel,
                LocalDate startDate, LocalDate endDate, String tags, int likes, List<Book> bookList, String bookDescription, String description,
                String addressDetail, String addressStreet, ClubStatus clubStatus){
        this.user = user;
        this.title = title;
        this.contents = contents;
        this.imgUrl = imgUrl;
        this.minPersonnel = minPersonnel;
        this.maxPersonnel = maxPersonnel;
        this.startDate = startDate;
        this.endDate = endDate;
        this.tags = tags;
        this.likes = likes;
        this.bookList = bookList;   //TODO: 어떻게 처리할지
        this.bookDescription = bookDescription;
        this.description = description;
        this.addressDetail = addressDetail;
        this.addressStreet = addressStreet;
        this.clubStatus = clubStatus;
    }

    public void updateClub(String title, String contents, String imgUrl,
                           int minPersonnel, int maxPersonnel,
                           LocalDate startDate, LocalDate endDate,
                           String tags, String bookDescription, String description,
                           String addressDetail, String addressStreet){
        this.title = title;
        this.contents = contents;
        this.imgUrl = imgUrl;
        this.minPersonnel = minPersonnel;
        this.maxPersonnel = maxPersonnel;
        this.startDate = startDate;
        this.endDate = endDate;
        this.tags = tags;
        this.bookDescription = bookDescription;
        this.description = description;
        this.addressDetail = addressDetail;
        this.addressStreet = addressStreet;
    }
}
