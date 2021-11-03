import { Grid } from '@material-ui/core';

import './App.css';

import { StocksProvider, ViewerProvider } from './containers/stores'

import SummaryTransactions from './containers/SummaryTransactions'
import CompletedTransactions from './containers/CompletedTransactions'

import { ipca26bradesco, ipca35itau } from './data'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Calculadora TD</h1>
      </header>

      <ViewerProvider>
        <StocksProvider initialState={{ stocks: [ ipca26bradesco, ipca35itau ] }}>
          <Grid container spacing={4}>
            <SummaryTransactions />
            <CompletedTransactions />
          </Grid>
        </StocksProvider>
      </ViewerProvider>
    </div>
  );
}

export default App;
