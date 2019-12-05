package com.company.navsample_1.backendService.domain;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class AppStateId implements Serializable {

    private static final long serialVersionUID = 1L;

    protected AppStateId() {
    }

    public AppStateId(String tenantId, String userId) {
        this.tenantId = tenantId;
        this.userId = userId;
    }

    @Column(name = "TenantID", nullable = false)
    private String tenantId;

    @Column(name = "UserID", nullable = false)
    private String userId;

    public String getTenantId() {
        return tenantId;
    }

    public String getUserId() {
        return userId;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof AppStateId)) {
            return false;
        }
        AppStateId that = (AppStateId) obj;
        return Objects.equals(getTenantId(), that.getTenantId()) && Objects.equals(getUserId(), that.getUserId());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getTenantId(), getUserId());
    }

    @Override
    public String toString() {
        return "AppStateId[tenantId=" + getTenantId() + ", userId=" + getUserId() + "]";
    }
}
