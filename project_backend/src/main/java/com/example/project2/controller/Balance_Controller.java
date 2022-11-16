package com.example.project2.controller;

import com.example.project2.model.Balance;
import com.example.project2.repository.Balance_Repo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
public class Balance_Controller {
    @Autowired
    private Balance_Repo balance_repo;
    @PostMapping("addaccount/")
    public Mono<Balance> addaccount(@RequestBody Balance bal){
        return balance_repo.save(bal);
    }
    @GetMapping("/findAllaccounts")
    public Flux<Balance> getAllAccounts(){
        return balance_repo.findAll();
    }
    @GetMapping("/findaccountById/{account_number}")
    public Flux<Balance> getAccount (@PathVariable String account_number){
        return balance_repo.findAll().filter(u->u.getAccount_no().equals(account_number));
    }
}
