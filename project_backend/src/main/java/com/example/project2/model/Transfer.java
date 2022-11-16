package com.example.project2.model;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@ToString
@Document(collection="transfer")
public class Transfer {
    private String account1;
    private String account2;
    private int balance;

    public Transfer(String account1, String account2, int balance) {
        this.account1 = account1;
        this.account2 = account2;
        this.balance = balance;
    }
}
