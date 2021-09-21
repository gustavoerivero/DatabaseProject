package com.gustavoerivero.FlameBankBackendProject.repositories;

import com.gustavoerivero.FlameBankBackendProject.models.Municipality;
import com.gustavoerivero.FlameBankBackendProject.models.State;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MunicipalityRepository extends JpaRepository<Municipality, Integer> {

    public List<Municipality> findMunicipalityByState(State state);

}
