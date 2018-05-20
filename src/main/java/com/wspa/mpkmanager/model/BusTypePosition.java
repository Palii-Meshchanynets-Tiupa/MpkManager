package com.wspa.mpkmanager.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
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
public class BusTypePosition extends AbstractUniqueEntity  {

    @NotNull
    @ManyToOne
    @JoinColumn(name = "bus_id")
    @JsonBackReference
    private Bus bus;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "bus_type_id")
    private BusType busType;

}
