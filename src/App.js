import { Grid } from '@material-ui/core';

import './App.css';

import { Provider as ViewerProvider } from './containers/stores/viewer'
import { Provider as TransactionProvider } from './containers/stores/transactions'
import { Provider as FutureProvider } from './containers/stores/future'
import CompletedTransactions from './containers/CompletedTransactions'
import SummaryTransactions from './containers/SummaryTransactions'
import FutureTransactions from './containers/FutureTransactions'
import Predictions from './containers/Predictions'

/**
 * @TODO
 * 1. add transactions here, sepratated/organized by investment
 * 2. move data to a external json file
 * 3. read this file
 */
const transactions = [];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Calculadora TD</h1>
      </header>

      <ViewerProvider>
        <TransactionProvider initialState={{ transactions }}>
          <Grid container spacing={4}>
            <SummaryTransactions />
            <CompletedTransactions />
            {/* <FutureTransactions /> */}
          </Grid>
        </TransactionProvider>
      </ViewerProvider>
    </div>
  );
}

export default App;
