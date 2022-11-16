package com.example.project2.repository;

import com.example.project2.model.Deposit;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

public interface Deposit_Repo extends ReactiveMongoRepository<Deposit,Integer> {

}
