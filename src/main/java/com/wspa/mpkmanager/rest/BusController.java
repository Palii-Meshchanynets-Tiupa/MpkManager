package com.wspa.mpkmanager.rest;

import com.wspa.mpkmanager.model.Bus;
import com.wspa.mpkmanager.repo.BusRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
@RequestMapping("/api/bus")
public class BusController {

	private final Logger LOG = LoggerFactory.getLogger(this.getClass());

	private BusRepository repository;

	public BusController(BusRepository repository) {
		this.repository = repository;
    }

	@GetMapping
	public ResponseEntity<Page<Bus>> getPage(Pageable pageable) {
		return ResponseEntity.ok(repository.findAll(pageable));
	}

	@GetMapping("/{id}")
	public ResponseEntity<Bus> get(@PathVariable Long id) {
		return ResponseEntity.ok(repository.findOne(id));
	}

	@PostMapping
	public ResponseEntity<Bus> create(@RequestBody Bus bus) {
		Bus entity = repository.save(bus);

		return ResponseEntity
				.created(ServletUriComponentsBuilder
					.fromCurrentRequest()
					.path("/{id}")
					.buildAndExpand(entity.getId()).toUri())
				.build();
	}

	@PatchMapping
	public ResponseEntity<Bus> update(@RequestBody Bus bus) {
		return ResponseEntity.ok(repository.save(bus));
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id) {

		repository.delete(id);
		return ResponseEntity.noContent().build();
	}

}
