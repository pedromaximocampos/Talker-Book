package com.talkerbook.api.dtos.reports;

import com.talkerbook.api.entities.UserEntity;

public class CloseReportDto {
    private String reportId;
    private Boolean decision;

    public CloseReportDto(String reportId, UserEntity user, Boolean decision) {
        this.reportId = reportId;
        this.decision = decision;
    }

    public CloseReportDto() {}

    public String getReportId() {
        return reportId;
    }

    public void setReportId(String reportId) {
        this.reportId = reportId;
    }

    public Boolean getDecision() {
        return decision;
    }

    public void setDecision(Boolean decision) {
        this.decision = decision;
    }
}
