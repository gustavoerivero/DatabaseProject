package com.gustavoerivero.FlameBankBackendProject.services;

import com.gustavoerivero.FlameBankBackendProject.models.Complement;
import com.gustavoerivero.FlameBankBackendProject.models.Request;

import java.util.List;

public interface ComplementService {

    public Complement saveComplement(Complement complement);
    public List<Complement> getAllComplements();
    public Complement getComplementById(int id);
    public Complement getComplementByRequest(Request request);
    public String updateComplement(Complement complement);
    public String deleteComplement(int id);

}
