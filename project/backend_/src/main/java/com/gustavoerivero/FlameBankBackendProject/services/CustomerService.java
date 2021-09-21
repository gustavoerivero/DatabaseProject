package com.gustavoerivero.FlameBankBackendProject.services;

import com.gustavoerivero.FlameBankBackendProject.models.Customer;
import com.gustavoerivero.FlameBankBackendProject.models.Document;

import java.util.List;

public interface CustomerService {

    public Customer saveCustomer(Customer customer);
    public List<Customer> getAllCustomers();
    public Customer getCustomerById(int id);
    public Customer getCustomerByDocument(Document document);
    public String updateCustomer(Customer customer);
    public String deleteCustomer(int id);

}
