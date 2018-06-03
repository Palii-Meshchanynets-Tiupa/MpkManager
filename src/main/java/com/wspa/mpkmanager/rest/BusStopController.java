package com.wspa.mpkmanager.rest;

import com.wspa.mpkmanager.model.BusStop;
import com.wspa.mpkmanager.repo.BusStopRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.util.List;

@RestController
@RequestMapping("/api/bus-stop")
public class BusStopController {

	private final Logger LOG = LoggerFactory.getLogger(this.getClass());

	private BusStopRepository repository;

	public BusStopController(BusStopRepository repository) {
		this.repository = repository;
    }

	@GetMapping("/{id}")
	public ResponseEntity<BusStop> get(@PathVariable Long id) {
		return ResponseEntity.ok(repository.findOne(id));
	}

	@GetMapping("/all")
	public ResponseEntity<List<BusStop>> getAll() {
		return ResponseEntity.ok(repository.findAll());
	}

	@PostMapping
	public ResponseEntity<BusStop> create(@RequestBody BusStop busStop) {
		BusStop entity = repository.save(busStop);

		return ResponseEntity
				.created(ServletUriComponentsBuilder
					.fromCurrentRequest()
					.path("/{id}")
					.buildAndExpand(entity.getId()).toUri())
				.body(entity);
	}

	@PatchMapping
	public ResponseEntity<BusStop> update(@RequestBody BusStop busStop) {
		return ResponseEntity.ok(repository.save(busStop));
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id) {

		repository.delete(id);
		return ResponseEntity.noContent().build();
	}

}
