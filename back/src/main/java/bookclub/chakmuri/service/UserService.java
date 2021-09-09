package bookclub.chakmuri.service;

import bookclub.chakmuri.domain.User;
import bookclub.chakmuri.repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true) //-> 값을 변경하는 경우 해당 메서드 앞에 readonly 없는 @Transactional을 써준다
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User searchUser(String userId){
        return userRepository.findById(userId)
                .orElse(null);
    }

    @Transactional
    public User createUser(User user){
        return userRepository.save(user);
    }
}
