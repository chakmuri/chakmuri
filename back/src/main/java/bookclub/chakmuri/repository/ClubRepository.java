package bookclub.chakmuri.repository;

import bookclub.chakmuri.domain.Club;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ClubRepository extends JpaRepository<Club, Long> {
    //List<Club> findByTags_Name(String name);
}
