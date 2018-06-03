package com.wspa.mpkmanager.rest;

import com.wspa.mpkmanager.model.Employee;
import com.wspa.mpkmanager.repo.EmployeeRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
@RequestMapping("/api/employee")
public class EmployeeController {

	private final Logger LOG = LoggerFactory.getLogger(this.getClass());

	private EmployeeRepository repository;
    private PasswordEncoder passwordEncoder;

	public EmployeeController(EmployeeRepository repository, PasswordEncoder passwordEncoder) {
		this.repository = repository;
        this.passwordEncoder = passwordEncoder;
    }

	@GetMapping
	public ResponseEntity<Page<Employee>> getPage(Pageable pageable) {
		return ResponseEntity.ok(repository.findAll(pageable));
	}

	@GetMapping("/{id}")
	public ResponseEntity<Employee> get(@PathVariable Long id) {
		return ResponseEntity.ok(repository.findOne(id));
	}

	@PostMapping
	public ResponseEntity<Employee> create(@RequestBody Employee employee) {
		employee.setPassword(passwordEncoder.encode(employee.getPassword()));
		Employee entity = repository.save(employee);

		return ResponseEntity
				.created(ServletUriComponentsBuilder
					.fromCurrentRequest()
					.path("/{id}")
					.buildAndExpand(entity.getId()).toUri())
				.body(entity);
	}

	@PatchMapping
	public ResponseEntity<Employee> update(@RequestBody Employee employee) {
		if (employee.getPassword() == null) {
			Employee persisted = this.repository.findOne(employee.getId());
			if (persisted != null) {
				employee.setPassword(persisted.getPassword());
			}
		} else {
		    employee.setPassword(passwordEncoder.encode(employee.getPassword()));
        }
		Employee entity = repository.save(employee);
		return ResponseEntity.ok(entity);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id) {

		repository.delete(id);
		return ResponseEntity.noContent().build();
	}

}
