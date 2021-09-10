package bookclub.chakmuri.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

import static javax.persistence.FetchType.EAGER;

@Entity
@Getter
@NoArgsConstructor
@Table(name = "likedclubs")
public class LikedClub {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    //@Column(name = "likedClub_id")
    private Long id;

    @JoinColumn(name = "user_id")
    @ManyToOne(fetch = EAGER)
    private User user;

    @JoinColumn(name = "club_id")
    @ManyToOne(fetch = EAGER)
    private Club club;

    @Builder
    public LikedClub(User user, Club club) {
        this.user = user;
        this.club = club;
    }
}