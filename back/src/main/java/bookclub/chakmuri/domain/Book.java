package bookclub.chakmuri.domain;

import lombok.Getter;

import javax.persistence.*;

@Embeddable
@Getter
public class Book {

    private String bookTitle;

    private String bookAuthor;

    @Lob
    private String bookImgUrl;

    protected Book() {

    }

    public Book(String bookTitle, String bookAuthor, String bookImgUrl) {
        this.bookTitle = bookTitle;
        this.bookAuthor = bookAuthor;
        this.bookImgUrl = bookImgUrl;
    }

}
