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
public class PermissionGroupPosition extends AbstractUniqueEntity {

    @NotNull
    @ManyToOne
    @JoinColumn(name = "permission_group_id")
    @JsonBackReference
    private PermissionGroup permissionGroup;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "permission_id")
    private Permission permission;
}

