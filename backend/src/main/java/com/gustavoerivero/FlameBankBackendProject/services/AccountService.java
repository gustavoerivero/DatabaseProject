package com.gustavoerivero.FlameBankBackendProject.services;

import com.gustavoerivero.FlameBankBackendProject.models.Account;
import com.gustavoerivero.FlameBankBackendProject.models.Customer;

import java.util.List;

public interface AccountService {

    public Account saveAccount(Account account);
    public List<Account> getAllAccounts();
    public Account getAccountById(int id);
    public Account getAccountByNumber(long number);
    public List<Account> getAccountByCustomer(Customer customer);
    public String updateAccount(Account account);
    public String deleteAccount(int id);

}
