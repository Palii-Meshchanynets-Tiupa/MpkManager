package com.wspa.mpkmanager.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
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
public class PermissionGroupPosition extends AbstractUniqueEntity {

    @NotNull
    @ManyToOne
    @JoinColumn(name = "permission_group_id")
    @JsonManagedReference
    private PermissionGroup permissionGroup;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "permission_id")
    private Permission permission;
}
