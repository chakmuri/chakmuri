package bookclub.chakmuri.domain;

import lombok.Getter;

import javax.persistence.*;

import static javax.persistence.FetchType.LAZY;

@Entity
@Table(name = "likedclubs")
@Getter
public class LikedClub {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "likedClub_id")
    private Long id;

    @JoinColumn(name = "user_id")
    @ManyToOne(fetch = LAZY, cascade = CascadeType.ALL)
    private User user;

    @JoinColumn(name = "club_id")
    @ManyToOne(fetch = LAZY, cascade = CascadeType.ALL)
    private Club club;

}
