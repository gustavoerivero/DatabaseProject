package com.gustavoerivero.FlameBankBackendProject.services;

import com.gustavoerivero.FlameBankBackendProject.models.Document;
import com.gustavoerivero.FlameBankBackendProject.models.State;
import com.gustavoerivero.FlameBankBackendProject.repositories.StateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StateServiceImplementation implements StateService {

    @Autowired
    StateRepository stateRepository;

    @Override
    public State saveState(State state) {
        if (state != null)
            return stateRepository.save(state);
        return new State();
    }

    @Override
    public List<State> getAllState() {
        return stateRepository.findAll();
    }

    @Override
    public State getStateById(int id) {
        Optional<State> state = stateRepository.findById(id);
        return state.orElse(null);
    }

    @Override
    public String updateState(State state) {
        Optional<State> stateOptional = stateRepository.findById(state.getId());
        if (stateOptional.isPresent()) {
            State updateState = stateOptional.get();
            updateState.setName(state.getName());
            updateState.setStatus(state.getStatus());
            stateRepository.save(updateState);
            return "Success: Is state document by id: " + state.getId();
        }
        return "Error: State has not been updated.";
    }

    @Override
    public String deleteState(int id) {
        if (stateRepository.findById(id).isPresent()) {
            stateRepository.deleteById(id);
            return "Is deleted state by id: " + id;
        }
        return "Error: State does not exists.";
    }
}
