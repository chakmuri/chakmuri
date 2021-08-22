package bookclub.chakmuri.repository;

import bookclub.chakmuri.domain.Club;
import bookclub.chakmuri.domain.Comment;
import bookclub.chakmuri.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {

    List<Comment> findAllById(Long id);

    List<Comment> findAllByClubOrderByCreatedAtDesc(Club club);

    List<Comment> findAllByUserOrderByCreatedAtDesc(User user);
}
