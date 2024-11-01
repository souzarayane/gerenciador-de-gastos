import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import TransacaoForm from './components/TransacaoForm';
import TransacaoList from './components/TransacaoList';
import Saldo from './components/Saldo';

function App() {
  const [transacoes, setTransacoes] = useState([]);

  const adicionarTransacao = (transacao) => {
    setTransacoes([...transacoes, transacao]);
  };

  return (
    <Container>
      <Typography variant="h3" align="center" gutterBottom>
        Controle de Gastos Pessoais
      </Typography>
      <Saldo transacoes={transacoes} />
      <TransacaoForm adicionarTransacao={adicionarTransacao} />
      <TransacaoList transacoes={transacoes} />
    </Container>
  );
}

export default App;
