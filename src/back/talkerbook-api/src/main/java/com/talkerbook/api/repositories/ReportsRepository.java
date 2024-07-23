package com.talkerbook.api.repositories;
import com.talkerbook.api.entities.ReportsEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.Optional;
import java.util.UUID;

public interface ReportsRepository extends JpaRepository<ReportsEntity, UUID>, JpaSpecificationExecutor<ReportsEntity> {
}
