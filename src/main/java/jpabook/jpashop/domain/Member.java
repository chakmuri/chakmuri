package jpabook.jpashop.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

import static javax.persistence.FetchType.LAZY;

@Entity
@Table(name = "members")
@Getter @Setter
public class Member {

    @Id @GeneratedValue
    @Column(name = "memberId")
    private String id;

    @JoinColumn(name = "userId")
    @ManyToOne(fetch = LAZY, cascade = CascadeType.ALL)
    private User user;


    @JoinColumn(name = "clubId")
    @ManyToOne(fetch = LAZY, cascade = CascadeType.ALL)
    private Club club;

    @Enumerated(EnumType.STRING)
    private ApprovalStatus status; //승인상태 [CONFIRMED, DENIED]


}
