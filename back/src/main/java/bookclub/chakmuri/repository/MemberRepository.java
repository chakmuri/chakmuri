package bookclub.chakmuri.repository;

import bookclub.chakmuri.domain.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, Long> {
}
