package com.example.project2.repository;

import com.example.project2.model.Balance;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import reactor.core.publisher.Mono;

public interface Balance_Repo extends ReactiveMongoRepository<Balance,Integer> {

}
