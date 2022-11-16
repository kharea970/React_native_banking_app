package com.example.project2.controller;

import com.example.project2.model.Balance;
import com.example.project2.model.Deposit;
import com.example.project2.model.Transfer;
import com.example.project2.repository.Balance_Repo;
import com.example.project2.repository.Deposit_Repo;
import com.example.project2.repository.Transfer_Repo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

@RestController
public class Deposit_Controller {
    @Autowired
    private Deposit_Repo deposit_repo;
    @Autowired
    private Balance_Repo balance_repo;

    @Autowired
    private Transfer_Repo transfer_repo;

    @GetMapping("/deposit/{account_no}/{amount}")
    public Mono<ResponseEntity<Transfer>> depositAmount(@PathVariable String account_no, @PathVariable int amount){
        System.out.println(account_no+" "+amount);
         balance_repo.findAll().filter(u->u.getAccount_no().equals(account_no))
                .doOnNext(a->{
                    a.setBalance(a.getBalance()+amount);
                })
                .flatMap(balance_repo::save).subscribe();
        return transfer_repo.save(new Transfer(account_no,"deposit",amount)).map(ResponseEntity::ok)
                .defaultIfEmpty(ResponseEntity.notFound().build());

    }

}
