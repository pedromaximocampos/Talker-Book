package com.talkerbook.api.repositories;


import com.talkerbook.api.entities.RatingsEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface RatingsRepository extends JpaRepository<RatingsEntity, UUID> {
}
