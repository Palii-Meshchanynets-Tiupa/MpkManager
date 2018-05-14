package com.wspa.mpkmanager.repo;

import com.wspa.mpkmanager.model.Permission;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PermissionRepository extends JpaRepository<Permission, Long> {
}
