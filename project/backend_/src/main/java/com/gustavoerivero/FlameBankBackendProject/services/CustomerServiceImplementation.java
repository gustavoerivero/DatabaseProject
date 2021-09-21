package com.gustavoerivero.FlameBankBackendProject.services;

import com.gustavoerivero.FlameBankBackendProject.models.Complement;
import com.gustavoerivero.FlameBankBackendProject.models.Customer;
import com.gustavoerivero.FlameBankBackendProject.models.Document;
import com.gustavoerivero.FlameBankBackendProject.repositories.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CustomerServiceImplementation implements CustomerService {

    @Autowired
    CustomerRepository customerRepository;

    @Override
    public Customer saveCustomer(Customer customer) {
        if (customer != null)
            return customerRepository.save(customer);
        return new Customer();
    }

    @Override
    public List<Customer> getAllCustomers() {
        return customerRepository.findAll();
    }

    @Override
    public Customer getCustomerById(int id) {
        Optional<Customer> customer = customerRepository.findById(id);
        return customer.orElse(null);
    }

    @Override
    public Customer getCustomerByDocument(Document document) {
        return customerRepository.findCustomerByDocument(document);
    }

    @Override
    public String updateCustomer(Customer customer) {
        Optional<Customer> customerOptional = customerRepository.findById(customer.getId());
        if (customerOptional.isPresent()) {
            Customer updatedCustomer = customerOptional.get();
            updatedCustomer.setDocument(customer.getDocument());
            updatedCustomer.setFirstName(customer.getFirstName());
            updatedCustomer.setSecondName(customer.getSecondName());
            updatedCustomer.setLastName(customer.getLastName());
            updatedCustomer.setSecondLastName(customer.getSecondLastName());
            updatedCustomer.setAddress(customer.getAddress());
            updatedCustomer.setBirthday(customer.getBirthday());
            updatedCustomer.setEmail(customer.getEmail());
            updatedCustomer.setPhoneNumber(customer.getPhoneNumber());
            updatedCustomer.setLandlineNumber(customer.getLandlineNumber());
            updatedCustomer.setStatus(customer.getStatus());
            customerRepository.save(updatedCustomer);
            return "Success: Is updated customer by id: " + customer.getId();
        }
        return "Error: Customer has not been updated.";
    }

    @Override
    public String deleteCustomer(int id) {
        if (customerRepository.findById(id).isPresent()) {
            customerRepository.deleteById(id);
            return "Is deleted customer by id: " + id;
        }
        return "Error: Customer does not exists.";
    }
}
