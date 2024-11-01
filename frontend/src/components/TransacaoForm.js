import React, { useState } from 'react';
import { TextField, Button, Box, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import PropTypes from 'prop-types';

function TransacaoForm({ adicionarTransacao }) {
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [tipo, setTipo] = useState('RECEITA');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isNaN(parseFloat(valor))) {
      alert("Por favor, insira um valor válido.");
      return;
    }
    adicionarTransacao({ descricao, valor: parseFloat(valor), tipo });
    setDescricao('');
    setValor('');
    setTipo('RECEITA');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', gap: 2, my: 2 }}>
      <TextField
        label="Descrição"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        required
      />
      <TextField
        label="Valor"
        type="number"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        required
      />
      <FormControl required>
        <InputLabel>Tipo</InputLabel>
        <Select
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          label="Tipo"
        >
          <MenuItem value="RECEITA">Receita</MenuItem>
          <MenuItem value="DESPESA">Despesa</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" color="primary" type="submit">
        Adicionar
      </Button>
    </Box>
  );
}

// Validação de Props
TransacaoForm.propTypes = {
  adicionarTransacao: PropTypes.func.isRequired,
};

export default TransacaoForm;
