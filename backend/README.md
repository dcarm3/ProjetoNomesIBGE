# IBGE Nomes - Sistema SOA para Análise de Tendências de Nomes Próprios no Brasil

## Autores

- Daniel Cardoso Martins — 22262100-2  
- Vitor Galetti Martins — 22019959-2  
- Mateus Felipe Brunetti dos Santos — 22012698-2

---

## Descrição

Este projeto é um sistema orientado a serviços (SOA) que consome a API pública do IBGE sobre nomes próprios no Brasil para fornecer análises de tendências ao longo das décadas.  
O sistema possui backend em NestJS e frontend em React com TypeScript, oferecendo consultas sobre evolução de ranking de nomes, nomes mais frequentes por UF e comparação de dois nomes.

---

## Funcionalidades

- Evolução do ranking de um nome ao longo de décadas em nível nacional.
- Top 3 nomes mais frequentes por UF, exibidos em tabela.
- Comparação da popularidade de dois nomes ao longo do tempo, com gráficos.

---

## Tecnologias

- Backend: NestJS, Axios
- Frontend: React + TypeScript
- Visualização: Chart.js, react-chartjs-2
- API externa: API de nomes do IBGE

---

## Como executar

### Pré-requisitos

- Node.js (versão 16 ou superior recomendada)
- npm ou yarn

### Backend

##1. Acesse a pasta do backend:

   ```bash
   cd backend
````

##2. Instale as dependências:

   ```bash
   npm install
   ```

##3. Execute a aplicação:

   ```bash
   npm run start:dev
   ```

O backend estará rodando em `http://localhost:3000`.

---

### Frontend

1. Acesse a pasta do frontend:

   ```bash
   cd frontend
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Execute a aplicação:

   ```bash
   npm run dev
   ```

O frontend estará disponível em `http://localhost:5173` (ou porta informada no terminal).

---

## Endpoints principais do backend

* `GET /ibge/evolution?name=ANA&startDecade=1970&endDecade=2000`
  Retorna evolução do ranking do nome no período.

* `GET /ibge/top-names?uf=PR`
  Retorna os 3 nomes mais frequentes para a UF informada.

* `GET /ibge/compare-names?name1=ANA&name2=MARIA`
  Compara popularidade dos dois nomes em todo o Brasil.

