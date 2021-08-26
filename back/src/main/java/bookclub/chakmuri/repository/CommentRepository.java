package bookclub.chakmuri.repository;

import bookclub.chakmuri.domain.Club;
import bookclub.chakmuri.domain.Comment;
import bookclub.chakmuri.domain.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {

    List<Comment> findAllById(Long id);

    List<Comment> findAllByClubOrderByCreatedAtDesc(Club club);

    void deleteAllByClubId(Long clubId);

    Page<Comment> findAllByUser(User user, Pageable pageable);

    Page<Comment> findAllByClubId(Long clubId, Pageable pageable);
}
