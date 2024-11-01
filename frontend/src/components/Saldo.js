import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Box } from '@mui/material';

function Saldo({ transacoes }) {
  // Verifica se as transações são válidas e calcula o saldo
  const saldo = transacoes.reduce((acc, transacao) => {
    const valor = parseFloat(transacao.valor);
    return isNaN(valor) ? acc : (transacao.tipo === 'RECEITA' ? acc + valor : acc - valor);
  }, 0);

  return (
    <Box sx={{ textAlign: 'center', my: 3 }}>
      <Typography variant="h4">Saldo Atual</Typography>
      {transacoes.length > 0 ? (
        <Typography variant="h5" color={saldo >= 0 ? 'green' : 'red'}>
          R$ {saldo.toFixed(2)}
        </Typography>
      ) : (
        <Typography variant="h5" color="gray">
          Nenhuma transação registrada.
        </Typography>
      )}
    </Box>
  );
}

// Validação de Props
Saldo.propTypes = {
  transacoes: PropTypes.arrayOf(
    PropTypes.shape({
      valor: PropTypes.number.isRequired,
      tipo: PropTypes.oneOf(['RECEITA', 'DESPESA']).isRequired,
    })
  ).isRequired,
};

export default Saldo;
