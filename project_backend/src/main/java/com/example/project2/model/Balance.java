package com.example.project2.model;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@ToString
@Document(collection="balance")
public class Balance {
    @Id
    private int id;
    private String account_no;
    private String account_name;
    private int balance;
}
