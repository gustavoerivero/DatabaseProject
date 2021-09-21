package com.gustavoerivero.FlameBankBackendProject.controllers;

import com.gustavoerivero.FlameBankBackendProject.models.Office;
import com.gustavoerivero.FlameBankBackendProject.services.MunicipalityService;
import com.gustavoerivero.FlameBankBackendProject.services.OfficeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/office")
@CrossOrigin
public class OfficeController {

    @Autowired
    private OfficeService officeService;

    @Autowired
    private MunicipalityService municipalityService;

    @PostMapping("/create/{municipalityId}")
    public String create(@PathVariable int municipalityId, @RequestBody Office office) {
        office.setMunicipality(municipalityService.getMunicipalityById(municipalityId));
        officeService.saveOffice(office);
        return "New office is added.";
    }

    @GetMapping("/get")
    public List<Office> readAll() {
        return officeService.getAllOffice();
    }

    @GetMapping("/get/{id}")
    public Office readById(@PathVariable int id) {
        return officeService.getOfficeById(id);
    }

    @GetMapping("/get/municipality/{municipalityId}")
    public List<Office> readByMunicipality(@PathVariable int municipalityId) {
        return officeService.getOfficeByMunicipality(municipalityService.getMunicipalityById(municipalityId));
    }

    @PutMapping("/update/{id}/{municipalityId}")
    public String update(@PathVariable int id, @PathVariable int municipalityId, @RequestBody Office office) {
        office.setId(id);
        office.setMunicipality(municipalityService.getMunicipalityById(municipalityId));
        return officeService.updateOffice(office);
    }

    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable int id) {
        return officeService.deleteOffice(id);
    }

}
