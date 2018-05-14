package com.wspa.mpkmanager.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Entity;

@Entity
@Setter
@Getter
@NoArgsConstructor
@ToString(callSuper = true)
public class BusType extends AbstractDictionaryEntity {

}


