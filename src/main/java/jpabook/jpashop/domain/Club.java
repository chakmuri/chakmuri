package jpabook.jpashop.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import static javax.persistence.FetchType.*;

@Entity
@Table(name = "clubs")
@Getter @Setter
public class Club {

    @Id @GeneratedValue
    @Column(name = "clubId")
    private long id;

    //FK
    @JoinColumn(name = "userId")
    @OneToOne(fetch = LAZY, cascade = CascadeType.ALL)
    private User user;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "tagId")
    private Tag tag;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "bookId") // Column에너테이션은 필요없나요?
    private Book book;

    @OneToMany(mappedBy = "club")
    private List<Member> memberList = new ArrayList<>();

    private String title;
    private String imgUrl;
    private String contents;

    private LocalDate start_date;
    private LocalDate end_date;

    private int min_personnel; // tinyint 자료형 int ok?
    private int max_personnel;

    private String address_detail;
    private String address_street;
    private String description;
    private int likes;

    private LocalDateTime created_at; // datetime
    private LocalDateTime updated_at;

    private String book_description;
    private boolean expired;



}
