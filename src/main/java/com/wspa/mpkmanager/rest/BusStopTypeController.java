package com.wspa.mpkmanager.rest;

import com.wspa.mpkmanager.model.BusStopType;
import com.wspa.mpkmanager.repo.BusStopTypeRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
@RequestMapping("/api/bus-stop-type")
public class BusStopTypeController {

	private final Logger LOG = LoggerFactory.getLogger(this.getClass());

	private BusStopTypeRepository repository;

	public BusStopTypeController(BusStopTypeRepository repository) {
		this.repository = repository;
    }

	@GetMapping
	public ResponseEntity<Page<BusStopType>> getPage(Pageable pageable) {
		return ResponseEntity.ok(repository.findAll(pageable));
	}

	@GetMapping("/{id}")
	public ResponseEntity<BusStopType> get(@PathVariable Long id) {
		return ResponseEntity.ok(repository.findOne(id));
	}

	@PostMapping
	public ResponseEntity<BusStopType> create(@RequestBody BusStopType stopType) {
		BusStopType entity = repository.save(stopType);

		return ResponseEntity
				.created(ServletUriComponentsBuilder
					.fromCurrentRequest()
					.path("/{id}")
					.buildAndExpand(entity.getId()).toUri())
				.body(entity);
	}

	@PatchMapping
	public ResponseEntity<BusStopType> update(@RequestBody BusStopType stopType) {
		return ResponseEntity.ok(repository.save(stopType));
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id) {

		repository.delete(id);
		return ResponseEntity.noContent().build();
	}

}
