# Gastos Pessoais

Este é um sistema de gerenciamento de gastos pessoais desenvolvido com uma aplicação **Spring Boot** no back-end e **React** no front-end. Ele permite o registro de transações, cálculo do saldo e categorização das transações como "RECEITA" ou "DESPESA".

## Tecnologias Utilizadas

- **Back-end**: Java, Spring Boot, Spring Data JPA
- **Front-end**: React, Material UI
- **Banco de Dados**: H2 (para desenvolvimento), ou outro de produção
- **Deploy**: Render (para o back-end), Vercel (para o front-end)

## Funcionalidades

- Adicionar transações de receita e despesa.
- Exibir lista de transações cadastradas.
- Calcular e exibir o saldo atual.
- Categorizar transações como "RECEITA" ou "DESPESA".

## Como Executar o Projeto Localmente

### Pré-requisitos

- Node.js e npm (para o front-end)
- JDK 17+ e Maven (para o back-end)

### Passos para Configuração

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/gastos-pessoais.git
   cd gastos-pessoais
2. **Back-end**:
   Navegue até o diretório backend.
   Configure o banco de dados no arquivo application.properties se necessário.
   Execute o projeto com:
   ./mvnw spring-boot:run
3. **Front-end**:
   Navegue até o diretório frontend.
   Crie um arquivo .env com a URL da API do back-end:
   REACT_APP_API_URL=http://localhost:8080
   Instale as dependências e inicie o servidor de desenvolvimento:
   npm install
   npm start
## Deploy
1. Frontend - vercel [Gerenciador de Gastos](https://gerenciador-de-gastos-frsk.vercel.app/)
2. Backend - 
