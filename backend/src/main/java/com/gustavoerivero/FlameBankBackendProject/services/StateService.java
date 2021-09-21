package com.gustavoerivero.FlameBankBackendProject.services;

import com.gustavoerivero.FlameBankBackendProject.models.State;

import java.util.List;

public interface StateService {

    public State saveState(State state);
    public List<State> getAllState();
    public State getStateById(int id);
    public String updateState(State state);
    public String deleteState(int id);

}
