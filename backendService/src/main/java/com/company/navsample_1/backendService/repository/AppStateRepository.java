package com.company.navsample_1.backendService.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.company.navsample_1.backendService.domain.AppState;
import com.company.navsample_1.backendService.domain.AppStateId;

@Repository
public interface AppStateRepository extends CrudRepository<AppState, AppStateId> {

}
