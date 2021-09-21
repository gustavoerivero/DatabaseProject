package com.gustavoerivero.FlameBankBackendProject.controllers;

import com.gustavoerivero.FlameBankBackendProject.models.Customer;
import com.gustavoerivero.FlameBankBackendProject.services.CustomerService;
import com.gustavoerivero.FlameBankBackendProject.services.DocumentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/customer")
@CrossOrigin
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @Autowired
    private DocumentService documentService;

    @PostMapping("/create/{number}")
    public String create(@PathVariable long number, @RequestBody Customer customer) {
        customer.setDocument(documentService.getDocumentByNumber(number));
        customerService.saveCustomer(customer);
        return "New customer is added.";
    }

    @GetMapping("/get")
    public List<Customer> readAll() {
        return customerService.getAllCustomers();
    }

    @GetMapping("/get/{id}")
    public Customer readById(@PathVariable int id) {
        return customerService.getCustomerById(id);
    }

    @GetMapping("/get/document/{number}")
    public Customer readByDocument(@PathVariable long number) {
        return customerService.getCustomerByDocument(documentService.getDocumentByNumber(number));
    }

    @PutMapping("/update/{number}")
    public String update(@PathVariable long number, @RequestBody Customer customer) {
        customer.setId(customerService.getCustomerByDocument(documentService.getDocumentByNumber(number)).getId());
        customer.setDocument(documentService.getDocumentByNumber(number));
        return customerService.updateCustomer(customer);
    }

    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable int id) {
        return customerService.deleteCustomer(id);
    }

}
