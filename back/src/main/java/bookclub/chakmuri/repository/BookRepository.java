package bookclub.chakmuri.repository;

import bookclub.chakmuri.domain.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Long> {
}
