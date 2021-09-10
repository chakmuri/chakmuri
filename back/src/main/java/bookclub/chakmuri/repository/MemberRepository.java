package bookclub.chakmuri.repository;

import bookclub.chakmuri.domain.ApprovalStatus;
import bookclub.chakmuri.domain.Club;
import bookclub.chakmuri.domain.Member;
import bookclub.chakmuri.domain.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MemberRepository extends JpaRepository<Member, Long> {
    Optional<Member> findByUserAndClub(User user, Club club);

    Page<Member> findByClubAndApprovalStatus(Club club, ApprovalStatus approvalStatus, Pageable pageable);

    Page<Member> findAllByUser(User user, Pageable pageable);
}
