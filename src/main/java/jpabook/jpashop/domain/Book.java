package jpabook.jpashop.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "books")
@Getter @Setter
public class Book {
    @Id
    @GeneratedValue
    @Column(name = "bookId")
    private Long id;
    private String title;
    private String author;
    private String imgUrl;

}
