package bookclub.chakmuri.controller.user;

import bookclub.chakmuri.domain.User;
import lombok.*;
import org.springframework.beans.BeanUtils;

@Getter
@Setter
@NoArgsConstructor
public class UserResponseDto { //DTO : 로직x. 순수한 데이터 객체, getter, setter만을 가짐

    private String id;
    private String name;
    private String email;
    private String imgUrl;

    public UserResponseDto(User user){
        BeanUtils.copyProperties(user, this);
    }
}
