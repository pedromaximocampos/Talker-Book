package com.talkerbook.api.controllers;

import com.talkerbook.api.dtos.reports.CloseReportDto;
import com.talkerbook.api.dtos.reports.CreateReportDto;
import com.talkerbook.api.entities.ReportsEntity;
import com.talkerbook.api.entities.UserEntity;
import com.talkerbook.api.responses.ApiResponse;
import com.talkerbook.api.dtos.reports.ReportDto;
import com.talkerbook.api.services.ReportsService;
import com.talkerbook.api.utils.AuthenticationUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.Collections;

@RestController
@RequestMapping("/reports")
public class ReportsController {
    @Autowired
    private ReportsService reportsService;

    @PostMapping("/create")
    public ResponseEntity<ApiResponse<ReportDto>> createReport(@RequestBody CreateReportDto reportData, HttpServletRequest request) {
        try {
            UserEntity user = AuthenticationUtil.extractUserFromJwt(request);
            ReportsEntity report = reportsService.creatReport(reportData, user);
            ReportDto reportResponse = ReportDto.fromReportsEntity(report);
            ApiResponse<ReportDto> response = new ApiResponse<>(false, "Denúncia cadastrado com sucesso", Collections.singletonList(reportResponse));
            return ResponseEntity.status(HttpStatus.CREATED).body(response);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new ApiResponse<>(true, e.getMessage(), null));
        }
    }

    @PostMapping("/close")
    public ResponseEntity<ApiResponse<ReportDto>> closeReport(
            @RequestBody CloseReportDto closeReportDto,
            HttpServletRequest request
    ) {
        try {
            UserEntity user = AuthenticationUtil.extractUserFromJwt(request);
            ReportsEntity updatedReport = reportsService.closeReport(closeReportDto, user);
            ReportDto reportResponse = ReportDto.fromReportsEntity(updatedReport);
            ApiResponse<ReportDto> response = new ApiResponse<>(false, "Denúncia fechada com sucesso", Collections.singletonList(reportResponse));
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            ApiResponse<ReportDto> response = new ApiResponse<>(true, e.getMessage(), null);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }
    }

    @GetMapping
    public ResponseEntity<ApiResponse<Page<ReportDto>>> findReports(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "5") int size,
            @RequestParam(required = false) String reportId,
            @RequestParam(required = false) String createdAt,
            @RequestParam(required = false) Boolean resolved,
            @RequestParam(required = false) String userId,
            HttpServletRequest request
    ) {
        try {
            UserEntity user = AuthenticationUtil.extractUserFromJwt(request);
            Page<ReportsEntity> reportsPage = reportsService.getReports(user, page, size, reportId, createdAt, resolved, userId);
            Page<ReportDto> reports = reportsPage.map(ReportDto::fromReportsEntity);
            ApiResponse<Page<ReportDto>> response = new ApiResponse<>(false, "Reports found", Collections.singletonList(reports));
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse<>(true, e.getMessage(), null));
        }
    }
}
