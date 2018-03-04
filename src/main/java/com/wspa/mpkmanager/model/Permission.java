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
public class Permission extends AbstractDictionaryEntity {

    @NotNull
    @Size(max = 64)
    private String name;

    @Size(max = 1000)
    private String description;

}

