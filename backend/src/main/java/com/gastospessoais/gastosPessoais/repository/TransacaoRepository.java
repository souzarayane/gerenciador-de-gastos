package com.gastospessoais.gastosPessoais.repository;

import com.gastospessoais.gastosPessoais.model.Transacao;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List; // Importação adicionada

public interface TransacaoRepository extends JpaRepository<Transacao, Long> {

    // Encontra transações pelo tipo (ex: "DESPESA" ou "RECEITA")
    List<Transacao> findByTipo(String tipo);

    // Encontra transações pela categoria
    List<Transacao> findByCategoria(String categoria);

    // Encontra transações entre duas datas
    List<Transacao> findByDataBetween(LocalDate inicio, LocalDate fim);
}
