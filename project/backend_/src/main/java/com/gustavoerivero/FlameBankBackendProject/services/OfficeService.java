package com.gustavoerivero.FlameBankBackendProject.services;

import com.gustavoerivero.FlameBankBackendProject.models.Municipality;
import com.gustavoerivero.FlameBankBackendProject.models.Office;

import java.util.List;

public interface OfficeService {

    public Office saveOffice(Office office);
    public List<Office> getAllOffice();
    public Office getOfficeById(int id);
    public List<Office> getOfficeByMunicipality(Municipality municipality);
    public String updateOffice(Office office);
    public String deleteOffice(int id);

}
