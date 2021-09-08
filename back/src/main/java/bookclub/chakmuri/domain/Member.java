package bookclub.chakmuri.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

import static javax.persistence.FetchType.EAGER;
import static javax.persistence.FetchType.LAZY;

@Entity
@NoArgsConstructor
@ToString
@Table(name = "members")
@Getter
public class Member {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    //@Column(name = "member_id")
    private Long id;

    @JoinColumn(name = "user_id")
    @ManyToOne(fetch = LAZY)
    private User user;

    @JoinColumn(name = "club_id")
    @ManyToOne(fetch = EAGER)
    private Club club;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private ApprovalStatus approvalStatus; //승인상태 [WAITING, CONFIRMED]

    @Builder
    public Member(User user, Club club, ApprovalStatus approvalStatus){
        this.user = user;
        this.club = club;
        this.approvalStatus = approvalStatus;
    }

}
