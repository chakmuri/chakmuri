package bookclub.chakmuri.domain;

import lombok.Getter;

import javax.persistence.*;

import static javax.persistence.FetchType.LAZY;

@Entity
@Table(name = "members")
@Getter
public class Member {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "member_id")
    private String id;

    @JoinColumn(name = "user_id")
    @ManyToOne(fetch = LAZY, cascade = CascadeType.ALL)
    private User user;

    @JoinColumn(name = "club_id")
    @ManyToOne(fetch = LAZY, cascade = CascadeType.ALL)
    private Club club;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private ApprovalStatus approvalStatus; //승인상태 [WAITING, CONFIRMED]


}
