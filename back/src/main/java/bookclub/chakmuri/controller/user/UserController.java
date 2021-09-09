package bookclub.chakmuri.controller.user;

import bookclub.chakmuri.domain.User;
import bookclub.chakmuri.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
//@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    public UserController(final UserService userService) {
        this.userService = userService;
    }

    //유저 정보 상세 조회
    @GetMapping("/{userId}")
    public ResponseEntity<UserResponseDto> searchUser(
            @PathVariable final String userId) {
        User user = userService.searchUser(userId);
        if (user != null) {
            return ResponseEntity.ok(
                    new UserResponseDto(userService.searchUser(userId))
            );
        } else {
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        }
    }

    //유저 정보 등록
    @PostMapping
    public ResponseEntity<UserResponseDto> createUser(
            @RequestBody final UserCreateRequestDto userCreateRequestDto) {
        final User user = userService.searchUser(userCreateRequestDto.toEntity().getId());

        // 유저 정보가 등록되어 있다면
        if (user != null) {
            return ResponseEntity.ok(
                    new UserResponseDto(userService.searchUser(userCreateRequestDto.toEntity().getId()))
            );
        }

        // 유저 정보가 등록되어 있지 않다면
        return ResponseEntity.ok(
                new UserResponseDto(userService.createUser(userCreateRequestDto.toEntity()))
        );
    }
}