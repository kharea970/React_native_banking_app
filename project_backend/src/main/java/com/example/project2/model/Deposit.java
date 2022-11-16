package com.example.project2.model;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@ToString
@Document(collection="deposit")
public class Deposit {
    private String account_no;
    private int amount;
    public Deposit(String account_no, int amount) {
        this.account_no = account_no;
        this.amount = amount;
    }
}
