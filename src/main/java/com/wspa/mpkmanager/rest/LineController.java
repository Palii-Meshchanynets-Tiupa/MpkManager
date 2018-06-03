package com.wspa.mpkmanager.rest;

import com.wspa.mpkmanager.model.Line;
import com.wspa.mpkmanager.repo.LineRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
@RequestMapping("/api/line")
public class LineController {

	private final Logger LOG = LoggerFactory.getLogger(this.getClass());

	private LineRepository repository;

	public LineController(LineRepository repository) {
		this.repository = repository;
    }

	@GetMapping("/{id}")
	public ResponseEntity<Line> get(@PathVariable Long id) {
		return ResponseEntity.ok(repository.findOne(id));
	}

	@PostMapping
	public ResponseEntity<Line> create(@RequestBody Line line) {
		Line entity = repository.save(line);

		return ResponseEntity
				.created(ServletUriComponentsBuilder
					.fromCurrentRequest()
					.path("/{id}")
					.buildAndExpand(entity.getId()).toUri())
				.body(entity);
	}

	@PatchMapping
	public ResponseEntity<Line> update(@RequestBody Line line) {
		return ResponseEntity.ok(repository.save(line));
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id) {

		repository.delete(id);
		return ResponseEntity.noContent().build();
	}

}
