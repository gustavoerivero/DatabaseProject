package com.gustavoerivero.FlameBankBackendProject.repositories;

import com.gustavoerivero.FlameBankBackendProject.models.Document;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DocumentRepository extends JpaRepository<Document, Integer> {

    public Document findByNumber(long number);

}
