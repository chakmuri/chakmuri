package bookclub.chakmuri.domain;

import lombok.Getter;

import javax.persistence.*;

@Entity
@Table(name = "tags")
@Getter
public class Tag {

    @Id @GeneratedValue
    @Column(name = "tag_id")
    private Long id;

    //boolean으로 할건지 0, 1 이니까 tinyint로 할 건지 정해야 (아니면 enum타입?)
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
