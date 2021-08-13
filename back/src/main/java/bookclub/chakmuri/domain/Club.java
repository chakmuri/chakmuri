package bookclub.chakmuri.domain;

import lombok.Getter;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import static javax.persistence.FetchType.LAZY;

@Entity
@Table(name = "clubs")
@Getter
public class Club {

    @Id @GeneratedValue
    @Column(name = "club_id")
    private Long id;

    //FK
    @JoinColumn(name = "user_id")
    @OneToOne(fetch = LAZY, cascade = CascadeType.ALL)
    private User user;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "tag_id")
    private Tag tag;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "book_id")
    private Book book;

    @OneToMany(mappedBy = "club")
    private List<Member> memberList = new ArrayList<>();

    @Size(max = 2000) @Column(nullable = false)
    private String description;

    @Size(max = 2000)
    private String bookDescription;

    @Column(nullable = false)
    private String title;

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

    @Column(nullable = false)
    private int likes;

    @Column(nullable = false)
    private LocalDateTime createdAt; // datetime

    private LocalDateTime updatedAt;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private ClubStatus clubStatus; // [ACTIVE, EXPIRED]



}
