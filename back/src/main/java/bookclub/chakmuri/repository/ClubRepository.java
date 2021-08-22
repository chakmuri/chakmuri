package bookclub.chakmuri.repository;

import bookclub.chakmuri.domain.Club;
import bookclub.chakmuri.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ClubRepository extends JpaRepository<Club, Long> {
    //List<Club> findByTags_Name(String name);

    Optional<Club> findByUser(User user);
}
