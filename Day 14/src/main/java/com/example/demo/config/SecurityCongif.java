package com.example.demo.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityCongif {
   @Bean
   public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception{
	   http
	   	.cors().disable()
	   	.csrf().disable()
	   	.authorizeHttpRequests().requestMatchers("/public","/").permitAll()
	   	.and().authorizeHttpRequests().requestMatchers("/secured").authenticated();
	   return http.build();
   }
}
