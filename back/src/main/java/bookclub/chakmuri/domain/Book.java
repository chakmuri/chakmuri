package bookclub.chakmuri.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

import static javax.persistence.FetchType.LAZY;

@Embeddable
@Getter
public class Book {

    @Column(nullable = false)
    private String bookTitle;

    @Column(nullable = false)
    private String bookAuthor;

    @Lob
    @Column(nullable = false)
    private String bookImgUrl;

    protected Book() {

    }

    public Book(String bookTitle, String bookAuthor, String bookImgUrl) {
        this.bookTitle = bookTitle;
        this.bookAuthor = bookAuthor;
        this.bookImgUrl = bookImgUrl;
    }

}
