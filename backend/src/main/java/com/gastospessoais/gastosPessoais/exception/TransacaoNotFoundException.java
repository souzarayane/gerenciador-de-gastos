package com.gastospessoais.gastosPessoais.exception;

public class TransacaoNotFoundException extends RuntimeException {
    public TransacaoNotFoundException(String message) {
        super(message);
    }
}
