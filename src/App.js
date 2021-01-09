import { Grid } from '@material-ui/core';

import './App.css';

import { Provider } from './containers/stores'
import CompletedTransactions from './containers/CompletedTransactions'
import SummaryTransactions from './containers/SummaryTransactions'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Calculadora TD</h1>
      </header>

      <Provider>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <CompletedTransactions />
          </Grid>
          <Grid item xs={4}>
            <SummaryTransactions />
          </Grid>
        </Grid>
      </Provider>

    </div>
  );
}

export default App;
