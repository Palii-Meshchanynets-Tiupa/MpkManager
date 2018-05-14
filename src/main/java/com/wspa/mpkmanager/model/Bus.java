package com.wspa.mpkmanager.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Setter
@Getter
@NoArgsConstructor
@ToString(callSuper = true)
public class Bus extends AbstractUniqueEntity {

    @NotNull
    @ManyToOne
    @JoinColumn(name = "line_id")
    private Line line;

    @NotNull
    @Size(max = 17)
    private String vin;

    @NotNull
    private String number;

    @NotNull
    @Size(max = 4)
    private String sideNumber;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "bus_type_id")
    private BusType busType;
}
