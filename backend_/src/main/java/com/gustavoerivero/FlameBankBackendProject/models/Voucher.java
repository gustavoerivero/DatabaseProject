package com.gustavoerivero.FlameBankBackendProject.models;

import javax.persistence.*;
import java.util.Date;

@Entity(name = "Vouchers")
public class Voucher {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", unique = true, nullable = false)
    private int id;

    @OneToOne
    @JoinColumn(name = "requestId", unique = true, nullable = false)
    private Request request;

    @Column(name = "voucherNumber", unique = true, nullable = false)
    private long voucherNumber;

    @Column(name = "date", nullable = false)
    private Date date;

    @Column(name = "status", nullable = false)
    private char status = 'A';

    public Voucher() {
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

    public long getVoucherNumber() {
        return voucherNumber;
    }

    public void setVoucherNumber(long voucherNumber) {
        this.voucherNumber = voucherNumber;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public char getStatus() {
        return status;
    }

    public void setStatus(char status) {
        this.status = status;
    }

}
