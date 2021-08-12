package jpabook.jpashop.back.domain;

import lombok.Getter;

import javax.persistence.*;

@Entity
@Table(name = "books")
@Getter
public class Book {
    @Id
    @GeneratedValue
    @Column(name = "book_id")
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String author;

    @Column(nullable = false)
    private String imgUrl;

}
