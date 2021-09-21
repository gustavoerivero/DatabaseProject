package com.gustavoerivero.FlameBankBackendProject.services;

import com.gustavoerivero.FlameBankBackendProject.models.ForeignUse;
import com.gustavoerivero.FlameBankBackendProject.models.Request;

import java.util.List;

public interface ForeignUseService {

    public ForeignUse saveForeignUse(ForeignUse foreignUse);
    public List<ForeignUse> getAllForeignUses();
    public ForeignUse getForeignUseById(int id);
    public ForeignUse getForeignUseByRequest(Request request);
    public String updateForeignUse(ForeignUse foreignUse);
    public String deleteForeignUse(int id);

}
