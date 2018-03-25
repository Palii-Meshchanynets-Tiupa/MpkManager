package com.wspa.mpkmanager.rest;

import com.wspa.mpkmanager.model.Employee;
import com.wspa.mpkmanager.repo.EmployeeRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
@RequestMapping("/api/employee")
public class EmployeeController {

	private EmployeeRepository repository;

	public EmployeeController(EmployeeRepository repository) {
		this.repository = repository;
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

		Employee entity = repository.save(employee);

		return ResponseEntity
				.created(ServletUriComponentsBuilder
					.fromCurrentRequest()
					.path("/{id}")
					.buildAndExpand(entity.getId()).toUri())
				.build();
	}

	@PatchMapping
	public ResponseEntity<Employee> update(@RequestBody Employee employee) {

		Employee entity = repository.save(employee);
		return ResponseEntity.ok(entity);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id) {

		repository.delete(id);
		return ResponseEntity.noContent().build();
	}


}
