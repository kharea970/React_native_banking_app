package com.example.project2.controller;

import com.example.project2.model.Deposit;
import com.example.project2.model.Transfer;
import com.example.project2.model.Withdraw;
import com.example.project2.repository.Balance_Repo;
import com.example.project2.repository.Deposit_Repo;
import com.example.project2.repository.Transfer_Repo;
import com.example.project2.repository.Withdraw_Repo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
public class Withdraw_Controller {
    @Autowired
    private Withdraw_Repo withdraw_repo;
    @Autowired
    private Balance_Repo balance_repo;

    @Autowired
    private Transfer_Repo transfer_repo;

    @GetMapping("/withdraw/{acc_no}/{amt}")
    public Mono<Transfer> withdrawAmount(@PathVariable String acc_no, @PathVariable int amt){
        balance_repo.findAll().filter(u->u.getAccount_no().equals(acc_no)).doOnNext(a->{
            a.setBalance(a.getBalance()-amt);
                })
                .flatMap(balance_repo::save).subscribe();
        return transfer_repo.save(new Transfer(acc_no,"withdrawn",amt));
    }
}
