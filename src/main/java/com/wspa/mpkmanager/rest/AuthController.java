package com.wspa.mpkmanager.rest;

import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {

    @GetMapping("/api/authentication")
    public Authentication user(Authentication user) {
        return user;
    }

}
