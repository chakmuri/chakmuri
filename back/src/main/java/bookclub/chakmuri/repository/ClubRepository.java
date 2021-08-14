package bookclub.chakmuri.repository;

import bookclub.chakmuri.domain.Club;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClubRepository extends JpaRepository<Club, Long> {
}
