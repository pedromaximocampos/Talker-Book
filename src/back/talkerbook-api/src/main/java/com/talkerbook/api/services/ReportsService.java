package com.talkerbook.api.services;

import com.talkerbook.api.dtos.reports.CloseReportDto;
import com.talkerbook.api.dtos.reports.CreateReportDto;
import com.talkerbook.api.entities.BooksEntity;
import com.talkerbook.api.entities.ReportsEntity;
import com.talkerbook.api.entities.UserEntity;
import com.talkerbook.api.repositories.ReportsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import javax.persistence.criteria.Predicate;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class ReportsService {
    @Autowired
    private ReportsRepository reportsRepository;

    @Autowired
    private BookService bookService;

    public ReportsEntity creatReport(CreateReportDto reportData, UserEntity user) throws Exception {
        int reasonWords = reportData.getReason().length();
        if (reasonWords < 50) {
            throw new Exception("Tamanhao do texto menor que 50.");
        }
        if (reasonWords > 300) {
            throw new Exception("Tamanho do texto maior que 300.");
        }

        try {
            ReportsEntity report = new ReportsEntity();

            Optional<BooksEntity> book = bookService.findBookByIsbn(reportData.getIsbn());
            if (book.isEmpty()) {
                throw new Exception("Livro não encontrado.");
            }

            report.setBook(book.get());
            report.setUser(user);
            report.setReason(reportData.getReason());
            return reportsRepository.save(report);
        } catch (Exception e) {
            throw new Exception("Erro ao salvar o criar denúncia no banco de dados", e);
        }
    }

    public Page<ReportsEntity> getReports(
            UserEntity user,
            int page,
            int size,
            String reportId,
            String createdAt,
            Boolean resolved,
            String userId
    ) throws Exception {
        if (!user.isAdmin()) {
            throw new Exception("Usuario não possui acesso.");
        }

        Pageable pageable = PageRequest.of(page, size);

        Specification<ReportsEntity> spec = (root, query, cb) -> {
            List<Predicate> predicates = new ArrayList<>();

            if (reportId != null) {
                predicates.add(cb.equal(root.get("reportId"), reportId));
            }
            if (createdAt != null) {
                LocalDate createdDate = LocalDate.parse(createdAt);
                LocalDateTime startOfDay = createdDate.atStartOfDay();
                LocalDateTime endOfDay = createdDate.atTime(LocalTime.MAX);
                predicates.add(cb.between(root.get("createdAt"), startOfDay, endOfDay));
            }
            if (resolved != null) {
                predicates.add(cb.equal(root.get("resolved"), resolved));
            }
            if (userId != null) {
                predicates.add(cb.equal(root.get("user").get("userId"), userId));
            }

            return cb.and(predicates.toArray(new Predicate[0]));
        };

        try {
            return reportsRepository.findAll(spec, pageable);
        } catch (Exception e) {
            throw new Exception("Erro ao encontrar denúncias no banco de dados", e);
        }
    }

    public ReportsEntity closeReport(CloseReportDto decision, UserEntity user) throws Exception {
        try {
            if (!user.isAdmin()) {
                throw new Exception("Usuario não possui acesso.");
            }
            Optional<ReportsEntity> report = reportsRepository.findById(UUID.fromString(decision.getReportId()));
            if (report.isEmpty()) {
                throw new Exception("Erro ao encontrar denúncias no banco de dados");
            }
            report.get().setResolved(decision.getDecision());
            return reportsRepository.save(report.get());
        } catch (Exception e) {
            throw new Exception("Erro ao fechar denúncia no banco de dados", e);
        }
    }
}
