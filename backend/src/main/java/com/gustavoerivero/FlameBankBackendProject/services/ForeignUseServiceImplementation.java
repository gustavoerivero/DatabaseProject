package com.gustavoerivero.FlameBankBackendProject.services;

import com.gustavoerivero.FlameBankBackendProject.models.ForeignUse;
import com.gustavoerivero.FlameBankBackendProject.models.Request;
import com.gustavoerivero.FlameBankBackendProject.repositories.ForeignUseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ForeignUseServiceImplementation implements ForeignUseService {

    @Autowired
    ForeignUseRepository foreignUseRepository;

    @Override
    public ForeignUse saveForeignUse(ForeignUse foreignUse) {
        if (foreignUse != null)
            return foreignUseRepository.save(foreignUse);
        return new ForeignUse();
    }

    @Override
    public List<ForeignUse> getAllForeignUses() {
        return foreignUseRepository.findAll();
    }

    @Override
    public ForeignUse getForeignUseById(int id) {
        Optional<ForeignUse> foreignUse = foreignUseRepository.findById(id);
        return foreignUse.orElse(null);
    }

    @Override
    public ForeignUse getForeignUseByRequest(Request request) {
        return foreignUseRepository.findByRequest(request);
    }

    @Override
    public String updateForeignUse(ForeignUse foreignUse) {
        Optional<ForeignUse> foreignUseOptional = foreignUseRepository.findById(foreignUse.getId());
        if (foreignUseOptional.isPresent()) {
            ForeignUse updatedForeignUse = foreignUseOptional.get();
            updatedForeignUse.setRequest(foreignUse.getRequest());
            updatedForeignUse.setIsNeed(foreignUse.getIsNeed());
            updatedForeignUse.setSource(foreignUse.getSource());
            updatedForeignUse.setArrival(foreignUse.getArrival());
            updatedForeignUse.setStatus(foreignUse.getStatus());
            foreignUseRepository.save(updatedForeignUse);
            return "Success: Is updated foreignUse by id: " + foreignUse.getId();
        }
        return "Error: ForeignUse has not been updated.";
    }

    @Override
    public String deleteForeignUse(int id) {
        if (foreignUseRepository.findById(id).isPresent()) {
            foreignUseRepository.deleteById(id);
            return "Is foreignUse complement by id: " + id;
        }
        return "Error: ForeignUse does not exists.";
    }
}
