package com.gastospessoais.gastosPessoais.controller;

import com.gastospessoais.gastosPessoais.model.Transacao;
import com.gastospessoais.gastosPessoais.service.TransacaoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List; // Importação corrigida

@CrossOrigin(origins = "http://localhost:3000") // Porta onde o React está rodando
@RestController
@RequestMapping("/transacoes")
public class TransacaoController {

    private final TransacaoService transacaoService;

    public TransacaoController(TransacaoService transacaoService) {
        this.transacaoService = transacaoService;
    }

    @PostMapping
    public ResponseEntity<Transacao> registrarTransacao(@RequestBody Transacao transacao) {
        Transacao novaTransacao = transacaoService.registrarTransacao(transacao); // Chamada corrigida
        return ResponseEntity.ok(novaTransacao);
    }

    @GetMapping
    public ResponseEntity<List<Transacao>> listarTransacoes() {
        List<Transacao> transacoes = transacaoService.listarTransacoes();
        return ResponseEntity.ok(transacoes); // Retorno em ResponseEntity
    }

    @GetMapping("/saldo")
    public BigDecimal obterSaldo() {
        return transacaoService.calcularSaldo();
    }
}
