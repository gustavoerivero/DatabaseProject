package com.gustavoerivero.FlameBankBackendProject.services;

import com.gustavoerivero.FlameBankBackendProject.models.Account;
import com.gustavoerivero.FlameBankBackendProject.models.Request;

import java.util.List;

public interface RequestService {

    public Request saveRequest(Request request);
    public List<Request> getAllRequest();
    public Request getRequestById(int id);
    public Request getRequestByAccount(Account account);
    public String updateRequest(Request request);
    public String deleteRequest(int id);

}
