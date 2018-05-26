package com.wspa.mpkmanager.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@MappedSuperclass
@ToString
public abstract class AbstractEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Getter
    @Setter
    private Long id;

    @Version
    @Getter
    @NotNull
    @ColumnDefault("0")
    private Long version = 0L;
}
