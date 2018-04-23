package com.wspa.mpkmanager;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.datatype.hibernate5.Hibernate5Module;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.web.config.EnableSpringDataWebSupport;
import org.springframework.http.converter.json.Jackson2ObjectMapperBuilder;

@SpringBootApplication
@EnableJpaRepositories
@EnableSpringDataWebSupport
public class MpkManagerApplication {

	public static void main(String[] args) {
		SpringApplication.run(MpkManagerApplication.class, args);
	}

	@Bean
	@SuppressWarnings("unchecked")
	public Jackson2ObjectMapperBuilder objectMapper() {
		return new Jackson2ObjectMapperBuilder()
				.modulesToInstall(Hibernate5Module.class)
				.serializationInclusion(JsonInclude.Include.NON_EMPTY);
	}
}
