package com.wspa.mpkmanager.rest;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
public class AuthController {

    @GetMapping("/api/authentication")
    public ResponseEntity<User> user(Authentication auth) {
        return Optional.ofNullable(auth)
                .flatMap(a -> {
                    if (a.isAuthenticated()) {
                        return Optional.of((User) a.getPrincipal());
                    }
                    return Optional.empty();
                })
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.noContent().build());
    }
}
