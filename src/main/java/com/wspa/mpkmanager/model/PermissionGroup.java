package com.wspa.mpkmanager.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.Set;

@Entity
@Setter
@Getter
@NoArgsConstructor
@ToString(callSuper = true)
@Table(uniqueConstraints = @UniqueConstraint(name = "permission_group__uuid__unique", columnNames = {"uuid"}))
public class PermissionGroup extends AbstractDictionaryEntity {

    @JsonManagedReference
    @OneToMany(mappedBy = "permissionGroup", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<PermissionGroupPosition> permissions;
}
