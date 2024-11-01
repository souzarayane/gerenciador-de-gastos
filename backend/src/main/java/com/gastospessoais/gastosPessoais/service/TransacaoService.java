package com.gastospessoais.gastosPessoais.service;

import com.gastospessoais.gastosPessoais.exception.TransacaoNotFoundException; // Importação da exceção personalizada
import com.gastospessoais.gastosPessoais.model.Transacao;
import com.gastospessoais.gastosPessoais.repository.TransacaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;

@Service
public class TransacaoService {
    private final TransacaoRepository transacaoRepository;

    @Autowired
    public TransacaoService(TransacaoRepository transacaoRepository) {
        this.transacaoRepository = transacaoRepository;
    }

    // Método para registrar uma nova transação
    public Transacao registrarTransacao(Transacao transacao) {
        try {
            return transacaoRepository.save(transacao);
        } catch (Exception e) {
            throw new IllegalArgumentException("Erro ao registrar transação: " + e.getMessage());
        }
    }

    // Método para listar todas as transações
    public List<Transacao> listarTransacoes() {
        List<Transacao> transacoes = transacaoRepository.findAll();
        if (transacoes.isEmpty()) {
            throw new TransacaoNotFoundException("Nenhuma transação encontrada.");
        }
        return transacoes;
    }

    // Método para calcular saldo
    public BigDecimal calcularSaldo() {
        BigDecimal totalReceitas = BigDecimal.ZERO;
        BigDecimal totalDespesas = BigDecimal.ZERO;

        // Calcula o total de receitas
        List<Transacao> receitas = transacaoRepository.findByTipo("RECEITA");
        for (Transacao receita : receitas) {
            if (receita.getValor() != null) {
                totalReceitas = totalReceitas.add(receita.getValor());
            }
        }

        // Calcula o total de despesas
        List<Transacao> despesas = transacaoRepository.findByTipo("DESPESA");
        for (Transacao despesa : despesas) {
            if (despesa.getValor() != null) {
                totalDespesas = totalDespesas.add(despesa.getValor());
            }
        }

        // Subtrai despesas de receitas para obter o saldo
        return totalReceitas.subtract(totalDespesas);
    }
}
