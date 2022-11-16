package com.example.project6_auth.repository;

import com.example.project6_auth.model.User;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

public interface User_Repo extends ReactiveMongoRepository<User,Integer> {
}
