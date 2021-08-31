package bookclub.chakmuri.domain;

import lombok.Getter;

import javax.persistence.*;
import javax.validation.constraints.Size;

@Embeddable
@Getter
public class Book {

    @Column(nullable = false)
    private String bookTitle;

    @Column(nullable = false)
    private String author;

    private String publisher;

    private int publishedAt;

    @Column(length = 2000, nullable = false)
    @Size(max = 2000)
    private String bookDescription;

    protected Book() {

    }

    public Book(String bookTitle, String author, String publisher, int publishedAt, String bookDescription) {
        this.bookTitle = bookTitle;
        this.author = author;
        this.publisher = publisher;
        this.publishedAt = publishedAt;
        this.bookDescription = bookDescription;
    }

}
