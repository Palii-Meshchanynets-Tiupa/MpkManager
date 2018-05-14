package com.wspa.mpkmanager.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.MappedSuperclass;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@MappedSuperclass
@Getter
@Setter
@ToString(callSuper = true)
public abstract class AbstractDictionaryEntity extends AbstractUniqueEntity {

    @NotNull
    @Size(max = 64)
    private String name;

    @Size(max = 1000)
    private String description;
}
