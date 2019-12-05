package com.company.navsample_1.backendService.service;

import java.util.Optional;

import com.company.navsample_1.backendService.controller.model.AppStateDTO;
import com.company.navsample_1.backendService.domain.AppState;
import com.company.navsample_1.backendService.domain.AppStateId;
import com.company.navsample_1.backendService.repository.AppStateRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AppStateService {

    @Autowired
    AppStateRepository repository;

    public void storeAppState(String tenantId, String userId, AppStateDTO dto) {
        AppStateId appStateId = new AppStateId(tenantId, userId);
        Optional<AppState> appState = repository.findById(appStateId);

        if (appState.isPresent()) {
            updateAppState(appStateId, appState.get(), dto);
        } else {
            createAppState(appStateId, dto);
        }
    }

    public void createAppState(AppStateId appStateId, AppStateDTO dto) {
        AppState entity = new AppState(appStateId);

        entity.setAppId(dto.getAppId());
        entity.setStateId(dto.getStateId());
        entity.setAppStateValues(dto.getAppStateValues());

        repository.save(entity);
    }

    public void updateAppState(AppStateId appStateId, AppState entity, AppStateDTO dto) {
        entity.setAppId(dto.getAppId());
        entity.setStateId(dto.getStateId());
        entity.setAppStateValues(dto.getAppStateValues());

        repository.save(entity);
    }

    public AppStateDTO readAppState(String tenantId, String userId) {
        AppStateId id = new AppStateId(tenantId, userId);
        Optional<AppState> appState = repository.findById(id);
        if (appState.isPresent()) {
            return getFromEntity(appState.get());
        }
        return getDefaults();
    }

    protected AppStateDTO getDefaults() {
        return new AppStateDTO();
    }

    protected AppStateDTO getFromEntity(AppState entity) {
        AppStateDTO dto = new AppStateDTO();
        dto.setAppId(entity.getAppId());
        dto.setStateId(entity.getStateId());
        dto.setAppStateValues(entity.getAppStateValues());
        return dto;
    }
}
