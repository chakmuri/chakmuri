package bookclub.chakmuri.repository;

import bookclub.chakmuri.domain.Feed;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FeedRepository extends JpaRepository<Feed, Long> {
}
