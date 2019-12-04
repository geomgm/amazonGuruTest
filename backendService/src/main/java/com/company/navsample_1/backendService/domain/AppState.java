package com.company.navsample_1.backendService.domain;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;


@Entity
public class AppState {
    
    protected String appId;
    protected String stateId;
    protected String appStateValues;

    public AppState() {
        super();
    }
    
    @EmbeddedId
    @GeneratedValue(strategy = GenerationType.AUTO)
    private AppStateId id;
    
    public AppState(AppStateId id) {
        this.id = id;
    }

    public AppStateId getId() {
        return id;
    }

     public String getAppId() {
        return appId;
    }
    
    public String getStateId() {
        return stateId;
    }
    
    public String getAppStateValues() {
        return appStateValues;
    }
    
    public void setAppId(String appId) {
        this.appId = appId;
    }
    
    public void setStateId(String stateId) {
        this.stateId = stateId;
    }
    
    public void setAppStateValues(String appStateValues) {
        this.appStateValues = appStateValues;
    }
}