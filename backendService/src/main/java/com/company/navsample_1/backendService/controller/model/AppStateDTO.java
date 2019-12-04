package com.company.navsample_1.backendService.controller.model;

public class AppStateDTO {
    
    private String appId;
    private String stateId;
    private String appStateValues;

    public AppStateDTO() {
        super();
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
