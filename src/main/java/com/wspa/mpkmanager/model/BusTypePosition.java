package com.wspa.mpkmanager.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
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
@Table(uniqueConstraints = {
        @UniqueConstraint(name = "bus_type_pos__uuid__unique", columnNames = {"uuid"}),
        @UniqueConstraint(name = "bus_type_pos__both__unique", columnNames = {"bus_id", "bus_type_id"})
})
public class BusTypePosition extends AbstractUniqueEntity  {

    @NotNull
    @ManyToOne
    @JoinColumn(name = "bus_id", foreignKey = @ForeignKey(name = "bus_type_pos__bus__fk"))
    @JsonBackReference
    private Bus bus;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "bus_type_id", foreignKey = @ForeignKey(name = "bus_type_pos__bus_type__fk"))
    private BusType busType;

}
