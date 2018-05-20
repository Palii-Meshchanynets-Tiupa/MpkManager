package com.wspa.mpkmanager.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;

@Entity
@Setter
@Getter
@NoArgsConstructor
public class BusStopTypePosition extends AbstractUniqueEntity  {

    @NotNull
    @ManyToOne
    @JoinColumn(name = "bus_stop_id")
    @JsonBackReference
    private BusStop busStop;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "bus_stop_type_id")
    private BusStopType busStopType;

}
