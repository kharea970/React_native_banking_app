package com.example.project2.controller;

import com.example.project2.model.Balance;
import com.example.project2.model.Transfer;
import com.example.project2.repository.Balance_Repo;
import com.example.project2.repository.Transfer_Repo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
public class Transfer_Controller {
    @Autowired
    private Balance_Repo balance_repo;
    @Autowired
    private Transfer_Repo transfer_repo;
    @GetMapping("/transfer/{acc_no1}/{acc_no2}/{amt}")
    public Mono<Transfer> transferAmount(@PathVariable String acc_no1, @PathVariable String acc_no2, @PathVariable int amt){
        System.out.println("welcome");
        balance_repo.findAll().filter(u->u.getAccount_no().equals(acc_no1))
                .doOnNext(a->a.setBalance(a.getBalance()-amt))
                .flatMap(balance_repo::save).subscribe();
        balance_repo.findAll().filter(u->u.getAccount_no().equals(acc_no2))
                .doOnNext(a->a.setBalance(a.getBalance()+amt))
                .flatMap(balance_repo::save).subscribe();
        return transfer_repo.save(new Transfer(acc_no1,acc_no2,amt));
    }
    @GetMapping("/findAllTransfers")
    public Flux<Transfer> getAllTransfers(){
        return transfer_repo.findAll();
    }
    @GetMapping("/findAllTransfers/{account_number}")
    public Flux<Transfer> getTransfer (@PathVariable String account_number){
        return transfer_repo.findAll().filter(u->u.getAccount1().equals(account_number));
    }

}
