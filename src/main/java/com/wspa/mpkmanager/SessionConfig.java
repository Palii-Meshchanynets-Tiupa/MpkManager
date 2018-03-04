package com.wspa.mpkmanager;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.session.web.http.CookieHttpSessionStrategy;

@Configuration
public class SessionConfig {

    @Bean
    public CookieHttpSessionStrategy sessionStrategy() {
        return new CookieHttpSessionStrategy();
    }

}
