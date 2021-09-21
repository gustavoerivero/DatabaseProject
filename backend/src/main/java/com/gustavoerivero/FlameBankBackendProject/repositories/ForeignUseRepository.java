package com.gustavoerivero.FlameBankBackendProject.repositories;

import com.gustavoerivero.FlameBankBackendProject.models.ForeignUse;
import com.gustavoerivero.FlameBankBackendProject.models.Request;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ForeignUseRepository extends JpaRepository<ForeignUse, Integer> {

    public ForeignUse findByRequest(Request request);

}
