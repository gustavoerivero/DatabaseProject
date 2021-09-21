package com.gustavoerivero.FlameBankBackendProject.services;

import com.gustavoerivero.FlameBankBackendProject.models.Account;
import com.gustavoerivero.FlameBankBackendProject.models.Customer;
import com.gustavoerivero.FlameBankBackendProject.repositories.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AccountServiceImplementation implements AccountService {

    @Autowired
    private AccountRepository accountRepository;

    @Override
    public Account saveAccount(Account account) {
        if (account != null)
            return accountRepository.save(account);
        return new Account();
    }

    @Override
    public List<Account> getAllAccounts() {
        return accountRepository.findAll();
    }

    @Override
    public Account getAccountById(int id) {
        Optional<Account> account = accountRepository.findById(id);
        return account.orElse(null);
    }

    @Override
    public Account getAccountByNumber(long number) {
        return accountRepository.findAccountByNumber(number);
    }

    @Override
    public List<Account> getAccountByCustomer(Customer customer) {
        List<Account> result = accountRepository.findByCustomer(customer);
        if(result.size() > 0)
            return result;
        return null;
    }

    @Override
    public String updateAccount(Account account) {
        Optional<Account> accountOptional = accountRepository.findById(account.getId());
        if (accountOptional.isPresent()) {
            Account updatedAccount = accountOptional.get();
            updatedAccount.setNumber(account.getNumber());
            updatedAccount.setAmount(account.getAmount());
            updatedAccount.setType(account.getType());
            updatedAccount.setCustomer(account.getCustomer());
            updatedAccount.setStatus(account.getStatus());
            accountRepository.save(updatedAccount);
            return "Success: Is updated account by id: " + account.getId();
        }
        return "Error: Account has not been updated.";
    }

    @Override
    public String deleteAccount(int id) {
        if (accountRepository.findById(id).isPresent()) {
            accountRepository.deleteById(id);
            return "Is deleted account by id: " + id;
        }
        return "Error: Account does not exists.";
    }
}
