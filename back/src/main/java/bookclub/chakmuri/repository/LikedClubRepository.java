package bookclub.chakmuri.repository;

import bookclub.chakmuri.domain.Club;
import bookclub.chakmuri.domain.LikedClub;
import bookclub.chakmuri.domain.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LikedClubRepository extends JpaRepository<LikedClub, Long> {

    Page<LikedClub> findAllByUser(User user, Pageable pageable);

    LikedClub findByClubAndUser(Club club, User user);

    void deleteByClubId(Long clubId);

    List<LikedClub> findAllByUser(User user);

}