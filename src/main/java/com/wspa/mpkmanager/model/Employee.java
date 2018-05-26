package com.wspa.mpkmanager.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.LocalDate;

@Entity
@Setter
@Getter
@NoArgsConstructor
@ToString(exclude = "password", callSuper = true)
@Table(uniqueConstraints = @UniqueConstraint(name = "employee__uuid__unique", columnNames = {"uuid"}))
public class Employee extends AbstractUniqueEntity {

    @NotNull
    @Size(max = 64)
    private String username;

    @NotNull
    @Size(max = 128)
    private String firstName;

    @NotNull
    @Size(max = 128)
    private String lastName;

//    @NotNull
    private LocalDate applicationDate;

    private LocalDate endOfContractDate;

    @NotNull
    @Size(min = 11, max = 11)
    private String pesel;

    @NotNull
    @Size(max = 64)
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String password;

    private boolean enabled = true;

//    @JsonManagedReference
//    @OneToMany(mappedBy = "employee", cascade = CascadeType.ALL, orphanRemoval = true)
//    private Set<EmployeePermissionGroup> permissionGroups;
}
