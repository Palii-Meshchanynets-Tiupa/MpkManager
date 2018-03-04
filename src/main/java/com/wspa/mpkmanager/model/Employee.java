package com.wspa.mpkmanager.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Setter
@Getter
@NoArgsConstructor
public class Employee extends AbstractUniqueEntity {

    @NotNull
    @Size(max = 64)
    private String username;

    @NotNull
    @Size(max = 64)
    private String password;

    private boolean enabled = true;
}
