package com.wspa.mpkmanager.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Setter
@Getter
@NoArgsConstructor
@Table(uniqueConstraints = {
        @UniqueConstraint(name = "bus_stop_type_pos__uuid__unique", columnNames = {"uuid"}),
        @UniqueConstraint(name = "bus_stop_type_pos__both__unique", columnNames = {"bus_stop_id", "bus_stop_type_id"})
})
public class BusStopTypePosition extends AbstractUniqueEntity  {

    @NotNull
    @ManyToOne
    @JoinColumn(name = "bus_stop_id", foreignKey = @ForeignKey(name = "bus_stop_type_pos__bus_stop__fk"))
    @JsonBackReference
    private BusStop busStop;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "bus_stop_type_id", foreignKey = @ForeignKey(name = "bus_stop_type_pos__bus_stop_type__fk"))
    private BusStopType busStopType;

}
