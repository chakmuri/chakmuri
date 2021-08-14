package bookclub.chakmuri.repository;

import bookclub.chakmuri.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {


    @Override
    Optional<User> findById(Long aLong);
}
