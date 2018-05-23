package com.wspa.mpkmanager.model;

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
        @UniqueConstraint(name = "driver__uuid__unique", columnNames = {"uuid"}),
        @UniqueConstraint(name = "driver__both__unique", columnNames = {"employee_id", "bus_id"})
})
public class Driver extends AbstractUniqueEntity {

    @NotNull
    @ManyToOne
    @JoinColumn(name = "employee_id", foreignKey = @ForeignKey(name = "driver__employee__fk"))
    private Employee employee;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "bus_id", foreignKey = @ForeignKey(name = "driver__bus__fk"))
    private Bus bus;

}
