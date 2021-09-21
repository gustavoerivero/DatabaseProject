package com.gustavoerivero.FlameBankBackendProject.controllers;

import com.gustavoerivero.FlameBankBackendProject.models.State;
import com.gustavoerivero.FlameBankBackendProject.services.StateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/state")
@CrossOrigin
public class StateController {

    @Autowired
    private StateService stateService;

    @PostMapping("/create")
    public String create(@RequestBody State state) {
        stateService.saveState(state);
        return "New state is added.";
    }

    @GetMapping("/get")
    public List<State> readAll() {
        return stateService.getAllState();
    }

    @GetMapping("/get/{id}")
    public State readById(@PathVariable int id) {
        return stateService.getStateById(id);
    }

    @PutMapping("/update/{id}")
    public String update(@PathVariable int id, @RequestBody State state) {
        state.setId(stateService.getStateById(id).getId());
        return stateService.updateState(state);
    }

    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable int id) {
        return stateService.deleteState(id);
    }

}