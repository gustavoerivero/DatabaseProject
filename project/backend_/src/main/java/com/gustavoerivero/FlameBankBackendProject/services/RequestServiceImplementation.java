package com.gustavoerivero.FlameBankBackendProject.services;

import com.gustavoerivero.FlameBankBackendProject.models.*;
import com.gustavoerivero.FlameBankBackendProject.repositories.RequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RequestServiceImplementation implements RequestService {

    @Autowired
    RequestRepository requestRepository;

    @Override
    public Request saveRequest(Request request) {
        if (request != null)
            return requestRepository.save(request);
        return new Request();
    }

    @Override
    public List<Request> getAllRequest() {
        return requestRepository.findAll();
    }

    @Override
    public Request getRequestById(int id) {
        Optional<Request> request = requestRepository.findById(id);
        return request.orElse(null);
    }

    @Override
    public Request getRequestByAccount(Account account) {
        return requestRepository.findRequestByAccount(account);
    }

    @Override
    public String updateRequest(Request request) {
        Optional<Request> requestOptional = requestRepository.findById(request.getId());
        if (requestOptional.isPresent()) {
            Request updatedRequest = requestOptional.get();
            updatedRequest.setAccount(request.getAccount());
            updatedRequest.setOffice(request.getOffice());
            updatedRequest.setAverageTransactions(request.getAverageTransactions());
            updatedRequest.setEstimatedAmount(request.getEstimatedAmount());
            updatedRequest.setFundArrival(request.getFundArrival());
            updatedRequest.setFundSource(request.getFundSource());
            updatedRequest.setStatus(request.getStatus());
            requestRepository.save(updatedRequest);
            return "Success: Is updated request by id: " + request.getId();
        }
        return "Error: Request has not been updated.";
    }

    @Override
    public String deleteRequest(int id) {
        if (requestRepository.findById(id).isPresent()) {
            requestRepository.deleteById(id);
            return "Is deleted request by id: " + id;
        }
        return "Error: Request does not exists.";
    }
}