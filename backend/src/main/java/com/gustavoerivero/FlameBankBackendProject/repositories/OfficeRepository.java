package com.gustavoerivero.FlameBankBackendProject.repositories;

import com.gustavoerivero.FlameBankBackendProject.models.Municipality;
import com.gustavoerivero.FlameBankBackendProject.models.Office;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OfficeRepository extends JpaRepository<Office, Integer> {

    public List<Office> findOfficeByMunicipality(Municipality municipality);

}
