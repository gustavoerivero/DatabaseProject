package com.gustavoerivero.FlameBankBackendProject.models;

import javax.persistence.*;

@Entity(name = "Requests")
public class Request {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", unique = true, nullable = false)
    private int id;

    @ManyToOne
    @JoinColumn(name = "officeId", nullable = false)
    private Office office;

    @OneToOne
    @JoinColumn(name = "accountId", nullable = false, unique = true)
    private Account account;

    @Column(name = "fundSource", nullable = false)
    private String fundSource;

    @Column(name = "fundArrival", nullable = false)
    private String fundArrival;

    @Column(name = "estimatedAmount", nullable = false)
    private char estimatedAmount;

    @Column(name = "averageTransactions", nullable = false)
    private char averageTransactions;

    @Column(name = "status", nullable = false)
    private char status = 'A';

    public Request() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Office getOffice() {
        return office;
    }

    public void setOffice(Office office) {
        this.office = office;
    }

    public Account getAccount() {
        return account;
    }

    public void setAccount(Account account) {
        this.account = account;
    }

    public String getFundSource() {
        return fundSource;
    }

    public void setFundSource(String fundSource) {
        this.fundSource = fundSource;
    }

    public String getFundArrival() {
        return fundArrival;
    }

    public void setFundArrival(String fundArrival) {
        this.fundArrival = fundArrival;
    }

    public char getEstimatedAmount() {
        return estimatedAmount;
    }

    public void setEstimatedAmount(char estimatedAmount) {
        this.estimatedAmount = estimatedAmount;
    }

    public char getAverageTransactions() {
        return averageTransactions;
    }

    public void setAverageTransactions(char averageTransactions) {
        this.averageTransactions = averageTransactions;
    }

    public char getStatus() {
        return status;
    }

    public void setStatus(char status) {
        this.status = status;
    }

}
