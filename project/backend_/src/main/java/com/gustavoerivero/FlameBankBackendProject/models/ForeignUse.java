package com.gustavoerivero.FlameBankBackendProject.models;

import javax.persistence.*;

@Entity(name = "ForeignUses")
public class ForeignUse {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", unique = true, nullable = false)
    private int id;

    @OneToOne
    @JoinColumn(name = "requestId", unique = true, nullable = false)
    private Request request;

    @Column(name = "isNeed", nullable = false)
    private char isNeed;

    @Column(name = "source")
    private char source = '0';

    @Column(name = "arrival")
    private char arrival = '0';

    @Column(name = "status", nullable = false)
    private char status = 'A';

    public ForeignUse() {
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

    public char getIsNeed() {
        return isNeed;
    }

    public void setIsNeed(char isNeed) {
        this.isNeed = isNeed;
    }

    public char getSource() {
        return source;
    }

    public void setSource(char source) {
        this.source = source;
    }

    public char getArrival() {
        return arrival;
    }

    public void setArrival(char arrival) {
        this.arrival = arrival;
    }

    public char getStatus() {
        return status;
    }

    public void setStatus(char status) {
        this.status = status;
    }

}
