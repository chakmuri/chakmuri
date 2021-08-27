package bookclub.chakmuri.repository;

import bookclub.chakmuri.domain.LikedClub;
import bookclub.chakmuri.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LikedClubRepository extends JpaRepository<LikedClub, Long> {

    List<LikedClub> findAllByUser(User user);
    void deleteByClubId(Long clubId);
}