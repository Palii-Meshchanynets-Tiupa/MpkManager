package com.wspa.mpkmanager.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Set;

@Entity
@Setter
@Getter
@NoArgsConstructor
@ToString(callSuper = true)
@Table(uniqueConstraints = @UniqueConstraint(name = "line__uuid__unique", columnNames = {"uuid"}))
public class Line extends AbstractUniqueEntity {

    @NotNull
    @Size(max = 64)
    private String name;

    @JsonManagedReference
    @OneToMany(mappedBy = "line", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<LineSegment> lineSegments;
}
