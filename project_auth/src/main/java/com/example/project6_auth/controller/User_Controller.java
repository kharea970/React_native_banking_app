package com.example.project6_auth.controller;

import com.example.project6_auth.model.User;
import com.example.project6_auth.repository.User_Repo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
public class User_Controller {
    @Autowired
    private User_Repo user_repo;

    @PostMapping("adduser/")
    public Mono<User> adduser(@RequestBody User user){
        return user_repo.save(user);
    }
    @GetMapping("finduserbyemail/{email}")
    public Flux<User> getuser(@PathVariable String email){
        System.out.println("hi");
        return user_repo.findAll().filter(u->u.getEmail().equals(email));
    }

}
