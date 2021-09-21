package com.gustavoerivero.FlameBankBackendProject.models;

import javax.persistence.*;

@Entity(name = "Complements")
public class Complement {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", unique = true, nullable = false)
    private int id;

    @OneToOne
    @JoinColumn(name = "requestId", nullable = false, unique = true)
    private Request request;

    @Column(name = "reason", nullable = false)
    private char reason;

    @Column(name = "accountUse", nullable = false)
    private char accountUse;

    @Column(name = "status", nullable = false)
    private char status = 'A';

    public Complement() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Request getRequest() {
        return request;
    }

    public void setRequest(Request request) {
        this.request = request;
    }

    public char getReason() {
        return reason;
    }

    public void setReason(char reason) {
        this.reason = reason;
    }

    public char getAccountUse() {
        return accountUse;
    }

    public void setAccountUse(char accountUse) {
        this.accountUse = accountUse;
    }

    public char getStatus() {
        return status;
    }

    public void setStatus(char status) {
        this.status = status;
    }

}
