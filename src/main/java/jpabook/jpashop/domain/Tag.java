package jpabook.jpashop.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;

@Entity
@Table(name = "tags")
@Getter @Setter
public class Tag {

    @Id @GeneratedValue
    @Column(name = "tagId")
    private Long id;



    private boolean minor;
    private boolean online;
    private boolean offline;
    private boolean onoff;
    private boolean capital;
    private boolean province;
    private boolean amity;
    private boolean other;

}
