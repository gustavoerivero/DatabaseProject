package com.gustavoerivero.FlameBankBackendProject.models;

import javax.persistence.*;

@Entity(name = "Documents")
public class Document {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false, unique = true)
    private int id;

    @Column(name = "type", nullable = false)
    private char type;

    @Column(name = "number", nullable = false, length = 10, unique = true)
    private long number;

    @Column(name = "status", nullable = false)
    private char status = 'A';

    public Document() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public char getType() {
        return type;
    }

    public void setType(char type) {
        this.type = type;
    }

    public char getStatus() {
        return status;
    }

    public void setStatus(char status) {
        this.status = status;
    }

    public long getNumber() {
        return number;
    }

    public void setNumber(long number) {
        this.number = number;
    }
}
