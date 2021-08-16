package bookclub.chakmuri.repository;

import bookclub.chakmuri.domain.Club;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ClubRepository extends JpaRepository<Club, Long> {
    //List<Club> findByTags_Name(String name);
}
