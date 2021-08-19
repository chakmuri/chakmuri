package bookclub.chakmuri.repository;

import bookclub.chakmuri.domain.LikedClub;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LikedClubRepository extends JpaRepository<LikedClub, Long> {
}
