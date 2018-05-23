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
        @UniqueConstraint(name = "permission_group_position__uuid__unique", columnNames = {"uuid"}),
        @UniqueConstraint(name = "permission_group_position__both__unique", columnNames = {"permission_group_id", "permission_id"})
})
public class PermissionGroupPosition extends AbstractUniqueEntity {

    @NotNull
    @ManyToOne
    @JoinColumn(name = "permission_group_id", foreignKey = @ForeignKey(name = "permission_group_position__permission_group__fk"))
    @JsonBackReference
    private PermissionGroup permissionGroup;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "permission_id", foreignKey = @ForeignKey(name = "permission_group_position__permission__fk"))
    private Permission permission;
}

