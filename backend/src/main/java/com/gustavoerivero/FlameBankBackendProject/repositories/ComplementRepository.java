package com.gustavoerivero.FlameBankBackendProject.repositories;

import com.gustavoerivero.FlameBankBackendProject.models.Complement;
import com.gustavoerivero.FlameBankBackendProject.models.Request;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ComplementRepository extends JpaRepository<Complement, Integer> {

    public Complement findComplementByRequest(Request request);

}
