package com.wspa.mpkmanager.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import java.util.Set;

@Entity
@Setter
@Getter
@NoArgsConstructor
public class PermissionGroup extends AbstractDictionaryEntity {

    @JsonBackReference
    @OneToMany(mappedBy = "permissionGroup", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<PermissionGroupPosition> permissions;
}
