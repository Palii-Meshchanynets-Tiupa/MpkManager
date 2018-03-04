package com.wspa.mpkmanager.repo;

import com.wspa.mpkmanager.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

    Optional<Employee> findFirstByUsername(String username);
}
