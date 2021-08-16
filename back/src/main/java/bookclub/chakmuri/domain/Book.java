package bookclub.chakmuri.domain;

import lombok.Getter;

import javax.persistence.*;

import static javax.persistence.FetchType.LAZY;

@Entity
@Table(name = "books")
@Getter
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "book_id")
    private Long id;

    @ManyToOne(fetch = LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "club_id")
    private Club club;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String author;

    @Lob
    @Column(nullable = false)
    private String imgUrl;

}
