package com.gustavoerivero.FlameBankBackendProject.controllers;

import com.gustavoerivero.FlameBankBackendProject.models.Complement;
import com.gustavoerivero.FlameBankBackendProject.services.AccountService;
import com.gustavoerivero.FlameBankBackendProject.services.ComplementService;
import com.gustavoerivero.FlameBankBackendProject.services.RequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/complement")
@CrossOrigin
public class ComplementController {

    @Autowired
    private ComplementService complementService;

    @Autowired
    private RequestService requestService;

    @Autowired
    private AccountService accountService;

    @PostMapping("/create/{requestId}")
    public String create(@PathVariable int requestId, @RequestBody Complement complement) {
        complement.setRequest(requestService.getRequestById(requestId));
        complementService.saveComplement(complement);
        return "New complement is added.";
    }

    @PostMapping("/create/number/{number}")
    public String createByAccount(@PathVariable long number, @RequestBody Complement complement) {
        complement.setRequest(requestService.getRequestByAccount(accountService.getAccountByNumber(number)));
        complementService.saveComplement(complement);
        return "New complement is added.";
    }

    @GetMapping("/get")
    public List<Complement> readAll() {
        return complementService.getAllComplements();
    }

    @GetMapping("/get/{id}")
    public Complement readById(@PathVariable int id) {
        return complementService.getComplementById(id);
    }

    @GetMapping("/get/account/{number}")
    public Complement readByAccount(@PathVariable long number) {
        return complementService.getComplementByRequest(requestService.getRequestByAccount(accountService.getAccountByNumber(number)));
    }

    @PutMapping("/update/{requestId}")
    public String update(@PathVariable int requestId, @RequestBody Complement complement) {
        complement.setId(complementService.getComplementByRequest(requestService.getRequestById(requestId)).getId());
        complement.setRequest(requestService.getRequestById(requestId));
        return complementService.updateComplement(complement);
    }

    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable int id) {
        return complementService.deleteComplement(id);
    }

}
