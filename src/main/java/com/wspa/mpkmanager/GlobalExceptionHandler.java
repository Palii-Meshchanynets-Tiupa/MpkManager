package com.wspa.mpkmanager;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    private final Logger LOG = LoggerFactory.getLogger(this.getClass());

    @ExceptionHandler(Exception.class)
    public ResponseEntity<Object> exceptionHandler(Exception ex) {

        LOG.error("Exception was thrown.", ex);

        return ResponseEntity.status(HttpStatus.FORBIDDEN).body(new Object() {
            @JsonProperty
            private String message = ex.getClass().getSimpleName();
        });
    }
}
