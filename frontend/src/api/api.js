// api.js

const BASE_URL = 'http://localhost:8080/transacoes';

export const fetchTransacoes = async () => {
  try {
    const response = await fetch(`${BASE_URL}/transacoes`);
    if (!response.ok) {
      throw new Error(`Erro: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Erro ao buscar transações:", error);
    throw error;
  }
};
