package com.wspa.mpkmanager.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Set;

@Entity
@Setter
@Getter
@NoArgsConstructor
@ToString(callSuper = true)
@Table(uniqueConstraints = @UniqueConstraint(name = "bus_stop__uuid__unique", columnNames = {"uuid"}))
public class BusStop extends AbstractUniqueEntity {

    @NotNull
    private String name;

    private int number;

    @JsonManagedReference
    @OneToMany(mappedBy = "busStop", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<BusStopTypePosition> types;
}
