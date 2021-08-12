package jpabook.jpashop.back.domain;

import lombok.Getter;

import javax.persistence.*;

@Entity
@Table(name = "tags")
@Getter
public class Tag {

    @Id @GeneratedValue
    @Column(name = "tag_id")
    private Long id;

    @Column(nullable = false)
    private boolean minor;

    @Column(nullable = false)
    private boolean online;

    @Column(nullable = false)
    private boolean offline;

    @Column(nullable = false)
    private boolean onoff;

    @Column(nullable = false)
    private boolean capital;

    @Column(nullable = false)
    private boolean province;

    @Column(nullable = false)
    private boolean amity;

    @Column(nullable = false)
    private boolean other;

}
