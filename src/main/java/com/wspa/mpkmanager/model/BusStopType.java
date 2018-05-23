package com.wspa.mpkmanager.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity
@Setter
@Getter
@NoArgsConstructor
@ToString(callSuper = true)
@Table(uniqueConstraints = @UniqueConstraint(name = "bus_stop_type__uuid__unique", columnNames = {"uuid"}))
public class BusStopType extends AbstractDictionaryEntity {
}
