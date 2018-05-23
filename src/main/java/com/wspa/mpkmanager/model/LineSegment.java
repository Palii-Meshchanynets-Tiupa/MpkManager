package com.wspa.mpkmanager.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Setter
@Getter
@NoArgsConstructor
@ToString(callSuper = true)
@Table(uniqueConstraints = @UniqueConstraint(name = "line_segment__uuid__unique", columnNames = {"uuid"}))
public class LineSegment extends AbstractUniqueEntity {

    @NotNull
    @ManyToOne
    @JoinColumn(name = "line_id", foreignKey = @ForeignKey(name = "line_segment__line__fk"))
    @JsonBackReference
    private Line line;

    @ManyToOne
    @JoinColumn(name = "bus_stop_from_id", foreignKey = @ForeignKey(name = "line_segment__bus_stop_from__fk"))
    private BusStop busStopFrom;

    @ManyToOne
    @JoinColumn(name = "bus_stop_to_id", foreignKey = @ForeignKey(name = "line_segment__bus_stop_to__fk"))
    private BusStop busStopTo;

}
