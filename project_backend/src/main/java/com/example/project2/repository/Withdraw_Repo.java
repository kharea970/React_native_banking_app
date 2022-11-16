package com.example.project2.repository;

import com.example.project2.model.Withdraw;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

public interface Withdraw_Repo extends ReactiveMongoRepository<Withdraw,Integer> {
}
