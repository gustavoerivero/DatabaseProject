package com.gustavoerivero.FlameBankBackendProject.services;

import com.gustavoerivero.FlameBankBackendProject.models.Municipality;
import com.gustavoerivero.FlameBankBackendProject.models.State;

import java.util.List;

public interface MunicipalityService {

    public Municipality saveMunicipality(Municipality municipality);
    public List<Municipality> getAllMunicipality();
    public Municipality getMunicipalityById(int id);
    public List<Municipality> getMunicipalityByState(State state);
    public String updateMunicipality(Municipality municipality);
    public String deleteMunicipality(int id);

}
