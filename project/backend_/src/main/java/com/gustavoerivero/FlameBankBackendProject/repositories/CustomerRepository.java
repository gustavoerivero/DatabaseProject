package com.gustavoerivero.FlameBankBackendProject.repositories;

import com.gustavoerivero.FlameBankBackendProject.models.Customer;
import com.gustavoerivero.FlameBankBackendProject.models.Document;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer> {

    public Customer findCustomerByDocument(Document document);

}
