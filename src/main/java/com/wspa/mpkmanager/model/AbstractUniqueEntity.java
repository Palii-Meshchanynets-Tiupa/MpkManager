package com.wspa.mpkmanager.model;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;

import javax.persistence.MappedSuperclass;
import javax.validation.constraints.NotNull;
import java.util.UUID;

@MappedSuperclass
@EqualsAndHashCode(callSuper = false)
@ToString(callSuper = true)
public abstract class AbstractUniqueEntity extends AbstractEntity {

    @Getter
    @NotNull
    private UUID uuid = UUID.randomUUID();
}
