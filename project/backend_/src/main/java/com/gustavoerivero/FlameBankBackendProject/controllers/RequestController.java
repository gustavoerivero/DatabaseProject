package com.gustavoerivero.FlameBankBackendProject.controllers;

import com.gustavoerivero.FlameBankBackendProject.models.Request;
import com.gustavoerivero.FlameBankBackendProject.services.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/request")
@CrossOrigin
public class RequestController {

    @Autowired
    private RequestService requestService;

    @Autowired
    private AccountService accountService;

    @Autowired
    private OfficeService officeService;

    @PostMapping("/create/{number}/{officeId}")
    public String create(@PathVariable long number, @PathVariable int officeId, @RequestBody Request request) {
        request.setAccount(accountService.getAccountByNumber(number));
        request.setOffice(officeService.getOfficeById(officeId));
        requestService.saveRequest(request);
        return "New request is added.";
    }

    @GetMapping("/get")
    public List<Request> readAll() {
        return requestService.getAllRequest();
    }

    @GetMapping("/get/{id}")
    public Request readById(@PathVariable int id) {
        return requestService.getRequestById(id);
    }

    @GetMapping("/get/account/{accountId}")
    public Request readByAccount(@PathVariable int accountId) {
        return requestService.getRequestByAccount(accountService.getAccountById(accountId));
    }

    @GetMapping("/get/account/{number}")
    public Request readByAccountNumber(@PathVariable long number) {
        return requestService.getRequestByAccount(accountService.getAccountByNumber(number));
    }

    @PutMapping("/update/{accountId}/{officeId}")
    public String update(@PathVariable int accountId, @PathVariable int officeId, @RequestBody Request request) {
        request.setId(requestService.getRequestByAccount(accountService.getAccountById(accountId)).getId());
        request.setAccount(accountService.getAccountById(accountId));
        request.setOffice(officeService.getOfficeById(officeId));
        return requestService.updateRequest(request);
    }

    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable int id) {
        return requestService.deleteRequest(id);
    }

}
