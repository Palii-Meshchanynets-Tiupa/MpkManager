package com.wspa.mpkmanager.model;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Column;
import javax.persistence.MappedSuperclass;
import javax.validation.constraints.NotNull;
import java.util.UUID;

@MappedSuperclass
@EqualsAndHashCode(callSuper = false)
@ToString(callSuper = true)
public abstract class AbstractUniqueEntity extends AbstractEntity {

    @Getter
    @Setter
    @NotNull
    @Column(columnDefinition = "UUID")
    private UUID uuid = UUID.randomUUID();
}
