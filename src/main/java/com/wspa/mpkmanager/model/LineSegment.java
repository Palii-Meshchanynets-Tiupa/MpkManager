package com.wspa.mpkmanager.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;

@Entity
@Setter
@Getter
@NoArgsConstructor
@ToString(callSuper = true)
public class LineSegment extends AbstractUniqueEntity {

    @NotNull
    @ManyToOne
    @JoinColumn(name = "line_id")
    @JsonManagedReference
    private Line line;

    @ManyToOne
    @JoinColumn(name = "bus_stop_from_id")
    private BusStop busStopFrom;

    @ManyToOne
    @JoinColumn(name = "bus_stop_to_id")
    private BusStop busStopTo;

}
