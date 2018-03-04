package com.wspa.mpkmanager.repo;

import com.wspa.mpkmanager.model.Employee;
import com.wspa.mpkmanager.model.EmployeePermissionGroup;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.stream.Stream;

public interface EmployeePermissionGroupRepository extends JpaRepository<EmployeePermissionGroup, Long> {

    Stream<EmployeePermissionGroup> findAllByEmployee(Employee employee);
}
