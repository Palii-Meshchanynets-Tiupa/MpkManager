package com.wspa.mpkmanager.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotNull;
import java.util.Set;

@Entity
@Setter
@Getter
@NoArgsConstructor
@ToString(callSuper = true)
public class BusStop extends AbstractUniqueEntity {

    @NotNull
    private String name;

    private int number;

    @JsonBackReference
    @OneToMany(mappedBy = "busStop", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<BusStopTypePosition> types;
}
