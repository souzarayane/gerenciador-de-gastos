// RegistrarTransacao.js

import React, { useState } from 'react';
import axios from 'axios';

function RegistrarTransacao() {
    const [descricao, setDescricao] = useState("");
    const [valor, setValor] = useState("");
    const [mensagem, setMensagem] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const novaTransacao = { descricao, valor: parseFloat(valor) }; // Converte o valor para número

        axios.post("http://localhost:8080/transacoes", novaTransacao) // Corrigido o endpoint
            .then(response => {
                console.log("Transação registrada:", response.data);
                setMensagem("Transação registrada com sucesso!");
                // Limpar os campos após o registro
                setDescricao("");
                setValor("");
            })
            .catch(error => {
                console.error("Erro ao registrar transação:", error);
                setMensagem("Erro ao registrar a transação.");
            });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                    placeholder="Descrição"
                    required // Torna o campo obrigatório
                />
                <input
                    type="number"
                    value={valor}
                    onChange={(e) => setValor(e.target.value)}
                    placeholder="Valor"
                    required // Torna o campo obrigatório
                />
                <button type="submit">Registrar</button>
            </form>
            {mensagem && <p>{mensagem}</p>} {/* Mensagem de feedback */}
        </div>
    );
}

export default RegistrarTransacao;
