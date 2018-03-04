package com.wspa.mpkmanager.rest;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/api")
public class TestController {

    private Logger logger = LoggerFactory.getLogger(this.getClass());

    @GetMapping("/print")
    public ResponseEntity<Object> print() {
        logger.info("Ping!");

        return ResponseEntity.ok().body(new Object() {
            @JsonProperty
            private String message = "Hello world!";
        });
    }

    @GetMapping("/resource")
    public Map<String, Object> home() {
        Map<String, Object> model = new HashMap<>();
        model.put("id", UUID.randomUUID().toString());
        model.put("content", "Hello World");
        return model;
    }

}
