package com.gustavoerivero.FlameBankBackendProject.repositories;

import com.gustavoerivero.FlameBankBackendProject.models.Account;
import com.gustavoerivero.FlameBankBackendProject.models.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AccountRepository extends JpaRepository<Account, Integer> {

    List<Account> findByCustomer(Customer customer);
    Account findAccountByNumber(long number);

}
