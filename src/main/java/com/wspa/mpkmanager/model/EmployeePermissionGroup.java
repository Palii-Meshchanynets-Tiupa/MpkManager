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
        @UniqueConstraint(name = "employee_permission_group__uuid__unique", columnNames = {"uuid"}),
        @UniqueConstraint(name = "employee_permission_group__both__unique", columnNames = {"employee_id", "permission_group_id"})
})
public class EmployeePermissionGroup extends AbstractUniqueEntity {

    @NotNull
    @ManyToOne
    @JoinColumn(name = "employee_id", foreignKey = @ForeignKey(name = "employee_permission_group__employee__fk"))
    @JsonBackReference
    private Employee employee;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "permission_group_id", foreignKey = @ForeignKey(name = "employee_permission_group__permission_group__fk"))
    private PermissionGroup permissionGroup;
}

