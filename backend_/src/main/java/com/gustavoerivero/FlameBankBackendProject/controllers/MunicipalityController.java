package com.gustavoerivero.FlameBankBackendProject.controllers;

import com.gustavoerivero.FlameBankBackendProject.models.Municipality;
import com.gustavoerivero.FlameBankBackendProject.services.MunicipalityService;
import com.gustavoerivero.FlameBankBackendProject.services.StateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/municipality")
@CrossOrigin
public class MunicipalityController {

    @Autowired
    private MunicipalityService municipalityService;

    @Autowired
    private StateService stateService;

    @PostMapping("/create/{stateId}")
    public String create(@PathVariable int stateId, @RequestBody Municipality municipality) {
        municipality.setState(stateService.getStateById(stateId));
        municipalityService.saveMunicipality(municipality);
        return "New municipality is added.";
    }

    @GetMapping("/get")
    public List<Municipality> readAll() {
        return municipalityService.getAllMunicipality();
    }

    @GetMapping("/get/{id}")
    public Municipality readById(@PathVariable int id) {
        return municipalityService.getMunicipalityById(id);
    }

    @GetMapping("/get/state/{stateId}")
    public List<Municipality> readByState(@PathVariable int stateId) {
        return municipalityService.getMunicipalityByState(stateService.getStateById(stateId));
    }

    @PutMapping("/update/{id}/{stateId}")
    public String update(@PathVariable int id, @PathVariable int stateId, @RequestBody Municipality municipality) {
        municipality.setId(id);
        municipality.setState(stateService.getStateById(stateId));
        return municipalityService.updateMunicipality(municipality);
    }

    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable int id) {
        return municipalityService.deleteMunicipality(id);
    }

}
