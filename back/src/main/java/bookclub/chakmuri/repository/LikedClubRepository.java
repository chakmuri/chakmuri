package bookclub.chakmuri.repository;

import bookclub.chakmuri.domain.LikedClub;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LikedClubRepository extends JpaRepository<LikedClub, Long> {
}
