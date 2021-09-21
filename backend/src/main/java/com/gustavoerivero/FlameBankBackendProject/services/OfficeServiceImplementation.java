package com.gustavoerivero.FlameBankBackendProject.services;

import com.gustavoerivero.FlameBankBackendProject.models.Municipality;
import com.gustavoerivero.FlameBankBackendProject.models.Office;
import com.gustavoerivero.FlameBankBackendProject.repositories.OfficeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OfficeServiceImplementation implements OfficeService {

    @Autowired
    OfficeRepository officeRepository;

    @Override
    public Office saveOffice(Office office) {
        if (office != null)
            return officeRepository.save(office);
        return new Office();
    }

    @Override
    public List<Office> getAllOffice() {
        return officeRepository.findAll();
    }

    @Override
    public Office getOfficeById(int id) {
        Optional<Office> office = officeRepository.findById(id);
        return office.orElse(null);
    }

    @Override
    public List<Office> getOfficeByMunicipality(Municipality municipality) {
        return officeRepository.findOfficeByMunicipality(municipality);
    }

    @Override
    public String updateOffice(Office office) {
        Optional<Office> officeOptional = officeRepository.findById(office.getId());
        if (officeOptional.isPresent()) {
            Office updateOffice = officeOptional.get();
            updateOffice.setMunicipality(office.getMunicipality());
            updateOffice.setCode(office.getCode());
            updateOffice.setName(office.getName());
            updateOffice.setAddress(office.getAddress());
            updateOffice.setPhoneNumber(office.getPhoneNumber());
            updateOffice.setStatus(office.getStatus());
            officeRepository.save(updateOffice);
            return "Success: Is updated office by id: " + office.getId();
        }
        return "Error: Office has not been updated.";
    }

    @Override
    public String deleteOffice(int id) {
        if (officeRepository.findById(id).isPresent()) {
            officeRepository.deleteById(id);
            return "Is office complement by id: " + id;
        }
        return "Error: Office does not exists.";
    }
}
