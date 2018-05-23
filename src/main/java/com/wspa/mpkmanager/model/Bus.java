package com.wspa.mpkmanager.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Set;

@Entity
@Setter
@Getter
@NoArgsConstructor
@ToString(callSuper = true)
@Table(uniqueConstraints = @UniqueConstraint(name = "bus__uuid__unique", columnNames = {"uuid"}))
public class Bus extends AbstractUniqueEntity {

    @NotNull
    @ManyToOne
    @JoinColumn(name = "line_id", foreignKey = @ForeignKey(name = "bus__line__fk"))
    private Line line;

    @NotNull
    @Size(max = 17)
    private String vin;

    @NotNull
    private String number;

    @NotNull
    @Size(max = 4)
    private String sideNumber;

    @JsonManagedReference
    @OneToMany(mappedBy = "bus", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<BusTypePosition> busTypes;
}
