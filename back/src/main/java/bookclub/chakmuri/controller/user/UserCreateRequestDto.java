package bookclub.chakmuri.controller.user;

import bookclub.chakmuri.domain.User;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserCreateRequestDto {

    private String id;
    private String name;
    private String email;
    private String imgUrl;

    public User toEntity(){
        return User.builder()
                .id(id)
                .name(name)
                .email(email)
                .imgUrl(imgUrl)
                .build();
    }
}
