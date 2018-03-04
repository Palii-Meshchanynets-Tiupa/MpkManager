package com.wspa.mpkmanager;

import com.wspa.mpkmanager.model.EmployeePermissionGroup;
import com.wspa.mpkmanager.model.Permission;
import com.wspa.mpkmanager.model.PermissionGroup;
import com.wspa.mpkmanager.model.PermissionGroupPosition;
import com.wspa.mpkmanager.repo.EmployeePermissionGroupRepository;
import com.wspa.mpkmanager.repo.EmployeeRepository;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Collection;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    private EmployeeRepository repository;
    private EmployeePermissionGroupRepository groupRepository;

    public CustomUserDetailsService(EmployeeRepository repository, EmployeePermissionGroupRepository groupRepository) {
        this.repository = repository;
        this.groupRepository = groupRepository;
    }

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return repository.findFirstByUsername(username)
                .map(employee -> {
                    Set<GrantedAuthority> authorities;
                    try (Stream<EmployeePermissionGroup> groupStream = groupRepository.findAllByEmployee(employee)) {
                        authorities = groupStream.map(EmployeePermissionGroup::getPermissionGroup)
                                .map(PermissionGroup::getPermissions)
                                .flatMap(Collection::stream)
                                .map(PermissionGroupPosition::getPermission)
                                .map(Permission::getName)
                                .map(name -> new SimpleGrantedAuthority("ROLE_" + name))
                                .collect(Collectors.toSet());
                    }
                    return new User(employee.getUsername(), employee.getPassword(), employee.isEnabled(), true, true, true, authorities);
                })
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }
}
