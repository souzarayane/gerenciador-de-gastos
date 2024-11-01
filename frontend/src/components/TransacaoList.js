import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

function TransacaoList({ transacoes }) {
  return (
    <List>
      {transacoes.map((transacao) => (
        <ListItem key={transacao.id || transacao.descricao}> {/* `id` como chave ou `descricao` como fallback */}
          <ListItemText
            primary={
              transacao.valor !== undefined
                ? `${transacao.descricao} - R$${transacao.valor.toFixed(2)}`
                : `${transacao.descricao} - R$0.00`
            }
            secondary={transacao.tipo}
          />
        </ListItem>
      ))}
    </List>
  );
}

export default TransacaoList;
