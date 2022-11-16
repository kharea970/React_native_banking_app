package com.example.project2.repository;

import com.example.project2.model.Transfer;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

public interface Transfer_Repo extends ReactiveMongoRepository<Transfer,Integer> {
}
