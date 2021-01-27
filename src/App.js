import { Grid } from '@material-ui/core';

import './App.css';

import { Provider as TransactionProvider } from './containers/stores/transactions'
import { Provider as FutureProvider } from './containers/stores/future'
import CompletedTransactions from './containers/CompletedTransactions'
import SummaryTransactions from './containers/SummaryTransactions'
import FutureTransactions from './containers/FutureTransactions'
import Predictions from './containers/Predictions'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Calculadora TD</h1>
      </header>

      <TransactionProvider>
        <Grid container spacing={4}>
          <Grid item xs={8}>
            <CompletedTransactions />
          </Grid>
          <Grid item xs={4}>
            <SummaryTransactions />
          </Grid>
        </Grid>

        <FutureProvider>
          <Grid container spacing={4}>
            <Grid item xs={8}>
              <FutureTransactions />
            </Grid>
            <Grid item xs={4}>
              <Predictions />
            </Grid>
          </Grid>
        </FutureProvider>
      </TransactionProvider>
    </div>
  );
}

export default App;
