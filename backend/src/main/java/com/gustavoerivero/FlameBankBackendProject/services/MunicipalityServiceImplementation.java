package com.gustavoerivero.FlameBankBackendProject.services;

import com.gustavoerivero.FlameBankBackendProject.models.Account;
import com.gustavoerivero.FlameBankBackendProject.models.Municipality;
import com.gustavoerivero.FlameBankBackendProject.models.State;
import com.gustavoerivero.FlameBankBackendProject.repositories.MunicipalityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MunicipalityServiceImplementation implements MunicipalityService {

    @Autowired
    MunicipalityRepository municipalityRepository;

    @Override
    public Municipality saveMunicipality(Municipality municipality) {
        if (municipality != null)
            return municipalityRepository.save(municipality);
        return new Municipality();
    }

    @Override
    public List<Municipality> getAllMunicipality() {
        return municipalityRepository.findAll();
    }

    @Override
    public Municipality getMunicipalityById(int id) {
        Optional<Municipality> municipality = municipalityRepository.findById(id);
        return municipality.orElse(null);
    }

    @Override
    public List<Municipality> getMunicipalityByState(State state) {
        List<Municipality> result = municipalityRepository.findMunicipalityByState(state);
        if(result.size() > 0)
            return result;
        return null;
    }

    @Override
    public String updateMunicipality(Municipality municipality) {
        Optional<Municipality> municipalityOptional = municipalityRepository.findById(municipality.getId());
        if (municipalityOptional.isPresent()) {
            Municipality updateMunicipality = municipalityOptional.get();
            updateMunicipality.setState(municipality.getState());
            updateMunicipality.setName(municipality.getName());
            updateMunicipality.setStatus(municipality.getStatus());
            municipalityRepository.save(updateMunicipality);
            return "Success: Is updated municipality by id: " + municipality.getId();
        }
        return "Error: Municipality has not been updated.";
    }

    @Override
    public String deleteMunicipality(int id) {
        if (municipalityRepository.findById(id).isPresent()) {
            municipalityRepository.deleteById(id);
            return "Is municipality complement by id: " + id;
        }
        return "Error: Municipality does not exists.";
    }
}
