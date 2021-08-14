package bookclub.chakmuri.repository;

import bookclub.chakmuri.domain.Tag;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TagRepository extends JpaRepository<Tag, Long> {
}
