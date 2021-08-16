package bookclub.chakmuri.domain;

import lombok.Getter;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import static javax.persistence.FetchType.LAZY;

@Entity
@Table(name = "clubs")
@Getter
public class Club {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) //데이터베이스에 위임(자동생성, auto_increment)
    @Column(name = "club_id")
    private Long id;

    @JoinColumn(name = "user_id")
    @OneToOne(fetch = LAZY, cascade = CascadeType.ALL)
    private User user;

    @OneToMany(mappedBy = "club")
    private List<Comment> commentList = new ArrayList<>();

    @ManyToMany(mappedBy = "clubs")
    private Set<Tag> tags = new HashSet<>();

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

}
