package com.gustavoerivero.FlameBankBackendProject.controllers;

import com.gustavoerivero.FlameBankBackendProject.models.Account;
import com.gustavoerivero.FlameBankBackendProject.services.AccountService;
import com.gustavoerivero.FlameBankBackendProject.services.CustomerService;
import com.gustavoerivero.FlameBankBackendProject.services.DocumentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/account")
@CrossOrigin
public class AccountController {

    @Autowired
    private AccountService accountService;

    @Autowired
    private CustomerService customerService;

    @Autowired
    private DocumentService documentService;

    @PostMapping("/create/{number}")
    public String create(@PathVariable long number, @RequestBody Account account) {
        account.setCustomer(customerService.getCustomerByDocument(documentService.getDocumentByNumber(number)));
        accountService.saveAccount(account);
        return "New account is added.";
    }

    @GetMapping("/get")
    public List<Account> readAll() {
        return accountService.getAllAccounts();
    }

    @GetMapping("/get/{id}")
    public Account readById(@PathVariable int id) {
        return accountService.getAccountById(id);
    }

    @GetMapping("/get/{number}")
    public Account readByNumber(@PathVariable long number) {
        return accountService.getAccountByNumber(number);
    }

    @GetMapping("/get/customer/{number}")
    public List<Account> readByCustomer(@PathVariable long number) {
        return accountService.getAccountByCustomer(customerService.getCustomerByDocument(documentService.getDocumentByNumber(number)));
    }

    @PutMapping("/update/{id}/{number}")
    public String update(@PathVariable int id, @PathVariable long number, @RequestBody Account account) {
        account.setId(id);
        account.setCustomer(customerService.getCustomerByDocument(documentService.getDocumentByNumber(number)));
        return accountService.updateAccount(account);
    }

    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable int id) {
        return accountService.deleteAccount(id);
    }

}
