import React from 'react';
import NameRankingChart from './components/NameRankingChart';
import TopNamesTable from './components/TopNamesTable';
import NameComparisonChart from './components/NameComparisonChart';

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>IBGE Nomes - Análise de Tendências</h1>
      <section>
        <h2>1. Evolução do Nome</h2>
        <NameRankingChart />
      </section>
      <hr />
      <section>
        <h2>2. Top 3 Nomes por UF</h2>
        <TopNamesTable />
      </section>
      <hr />
      <section>
        <h2>3. Comparar Dois Nomes</h2>
        <NameComparisonChart />
      </section>
    </div>
  );
}

export default App;
