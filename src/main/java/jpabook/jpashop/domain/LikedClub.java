package jpabook.jpashop.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "likedclubs")
@Getter @Setter
public class LikedClub {

    @Id @GeneratedValue
    @Column(name = "likedClubId")
    private Long id;

    @JoinColumn(name = "userId")
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private User user;

    @JoinColumn(name = "clubId")
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Club club;

}
