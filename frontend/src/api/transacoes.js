// Transacoes.js
import React, { useEffect, useState } from 'react';

const Transacoes = () => {
  const [transacoes, setTransacoes] = useState([]);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    // Função para buscar as transações do backend
    const fetchTransacoes = async () => {
      try {
        const response = await fetch('http://localhost:8080/transacoes'); // URL do seu backend
        if (!response.ok) {
          throw new Error(`Erro: ${response.statusText}`);
        }
        const data = await response.json();
        setTransacoes(data);
      } catch (error) {
        console.error("Erro ao buscar transações:", error);
        setErro(error.message);
      }
    };

    fetchTransacoes();
  }, []);

  return (
    <div>
      <h1>Lista de Transações</h1>
      {erro && <p style={{ color: 'red' }}>Erro: {erro}</p>}
      {transacoes.length === 0 ? ( // Verifica se a lista está vazia
        <p>Nenhuma transação encontrada.</p>
      ) : (
        <ul>
          {transacoes.map(transacao => (
            <li key={transacao.id}>
              <strong>Descrição:</strong> {transacao.descricao} <br />
              <strong>Valor:</strong> R$ {transacao.valor.toFixed(2)} <br /> {/* Formata o valor com duas casas decimais */}
              <strong>Data:</strong> {new Date(transacao.data).toLocaleDateString('pt-BR')} <br /> {/* Formatação da data */}
              <strong>Tipo:</strong> {transacao.tipo} <br />
              <strong>Categoria:</strong> {transacao.categoria}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Transacoes;
