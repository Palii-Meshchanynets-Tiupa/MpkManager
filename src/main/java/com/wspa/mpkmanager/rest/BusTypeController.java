package com.wspa.mpkmanager.rest;

import com.wspa.mpkmanager.model.BusType;
import com.wspa.mpkmanager.repo.BusTypeRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
@RequestMapping("/api/bus-type")
public class BusTypeController {

	private final Logger LOG = LoggerFactory.getLogger(this.getClass());

	private BusTypeRepository repository;

	public BusTypeController(BusTypeRepository repository) {
		this.repository = repository;
    }

	@GetMapping
	public ResponseEntity<Page<BusType>> getPage(Pageable pageable) {
		return ResponseEntity.ok(repository.findAll(pageable));
	}

	@GetMapping("/{id}")
	public ResponseEntity<BusType> get(@PathVariable Long id) {
		return ResponseEntity.ok(repository.findOne(id));
	}

	@PostMapping
	public ResponseEntity<BusType> create(@RequestBody BusType busType) {
		BusType entity = repository.save(busType);

		return ResponseEntity
				.created(ServletUriComponentsBuilder
					.fromCurrentRequest()
					.path("/{id}")
					.buildAndExpand(entity.getId()).toUri())
				.body(entity);
	}

	@PatchMapping
	public ResponseEntity<BusType> update(@RequestBody BusType busType) {
		return ResponseEntity.ok(repository.save(busType));
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id) {

		repository.delete(id);
		return ResponseEntity.noContent().build();
	}

}
