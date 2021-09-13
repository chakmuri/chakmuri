package bookclub.chakmuri.repository;

import bookclub.chakmuri.domain.Club;
import bookclub.chakmuri.domain.Comment;
import bookclub.chakmuri.domain.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {

    void deleteAllByClub(Club club);

    Page<Comment> findAllByUser(User user, Pageable pageable);

    Page<Comment> findAllByClubId(Long clubId, Pageable pageable);
}
