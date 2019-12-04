package com.company.navsample_1.backendService.controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.company.navsample_1.backendService.service.AppStateService;
import com.company.navsample_1.backendService.controller.model.AppStateDTO;

@RestController
@RequestMapping(value = AppStateRestController.ENDPOINT)
public class AppStateRestController {
    public static final String ENDPOINT = "/appstate";
    
    @Autowired
    AppStateService appStateService;
    
    // @Autowired
    // SecurityContext securityContext;
    
    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public AppStateDTO getAppState() {
        // String tenantId = securityContext.getTenantId();
        // String userId = securityContext.getUserId();
        return appStateService.readAppState("tenantId", "userId");
    }
}
