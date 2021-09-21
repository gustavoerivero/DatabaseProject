package com.gustavoerivero.FlameBankBackendProject.services;

import com.gustavoerivero.FlameBankBackendProject.models.Account;
import com.gustavoerivero.FlameBankBackendProject.models.Complement;
import com.gustavoerivero.FlameBankBackendProject.models.Request;
import com.gustavoerivero.FlameBankBackendProject.repositories.ComplementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ComplementServiceImplementation implements ComplementService {

    @Autowired
    private ComplementRepository complementRepository;

    @Override
    public Complement saveComplement(Complement complement) {
        if (complement != null)
            return complementRepository.save(complement);
        return new Complement();
    }

    @Override
    public List<Complement> getAllComplements() {
        return complementRepository.findAll();
    }

    @Override
    public Complement getComplementById(int id) {
        Optional<Complement> complement = complementRepository.findById(id);
        return complement.orElse(null);
    }

    @Override
    public Complement getComplementByRequest(Request request) {
        return complementRepository.findComplementByRequest(request);
    }

    @Override
    public String updateComplement(Complement complement) {
        Optional<Complement> complementOptional = complementRepository.findById(complement.getId());
        if (complementOptional.isPresent()) {
            Complement updatedComplement = complementOptional.get();
            updatedComplement.setReason(complement.getReason());
            updatedComplement.setAccountUse(complement.getAccountUse());
            updatedComplement.setRequest(complement.getRequest());
            updatedComplement.setStatus(complement.getStatus());
            complementRepository.save(updatedComplement);
            return "Success: Is updated complement by id: " + complement.getId();
        }
        return "Error: Complement has not been updated.";
    }

    @Override
    public String deleteComplement(int id) {
        if (complementRepository.findById(id).isPresent()) {
            complementRepository.deleteById(id);
            return "Is deleted complement by id: " + id;
        }
        return "Error: Complement does not exists.";
    }
}
