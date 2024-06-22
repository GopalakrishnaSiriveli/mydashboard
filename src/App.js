import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import DataFilter from './components/DataFilter';
import GlobalStyles from './styles/GlobalStyles';

const AppContainer = styled.div`
  text-align: center;
`;

const App = () => {
  const [year, setYear] = useState('2021');

  return (
    <AppContainer>
      <GlobalStyles />
      <Header />
      <DataFilter year={year} setYear={setYear} />
      <BarChart />
      <LineChart />
    </AppContainer>
  );
};

export default App;
