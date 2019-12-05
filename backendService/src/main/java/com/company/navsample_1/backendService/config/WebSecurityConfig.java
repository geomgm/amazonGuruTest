package com.company.navsample_1.backendService.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configurers.ResourceServerSecurityConfigurer;

import com.sap.xs2.security.commons.SAPOfflineTokenServicesCloud;

@Profile("!nosecurity")
@Configuration
@EnableResourceServer
public class WebSecurityConfig implements ResourceServerConfigurer {
    @Override
    public void configure(final HttpSecurity http) throws Exception {

        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.NEVER) //
                .and().authorizeRequests() //
                .antMatchers("/h2-console/**").permitAll() //
                .antMatchers("/org").permitAll() //
                .anyRequest().authenticated();

        http.headers().frameOptions().disable();
    }

    @Override
    public void configure(ResourceServerSecurityConfigurer resources) throws Exception {
        // not needed
    }

    @Bean
    SAPOfflineTokenServicesCloud offlineTokenService() {
        return new SAPOfflineTokenServicesCloud();
    }

}
