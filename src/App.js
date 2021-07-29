import { Grid } from '@material-ui/core';

import './App.css';

import { Provider as ViewerProvider } from './containers/stores/viewer'
import { Provider as TransactionProvider } from './containers/stores/transactions'
// import { Provider as FutureProvider } from './containers/stores/future'
import CompletedTransactions from './containers/CompletedTransactions'
import SummaryTransactions from './containers/SummaryTransactions'
// import FutureTransactions from './containers/FutureTransactions'
// import Predictions from './containers/Predictions'

/**
 * @TODO
 * 1. add transactions here, sepratated/organized by investment
 * 2. move data to a external json file
 * 3. read this file
 */
const transactions = {
  ipca26_brad: [
    { id: '1', date: '2020-06-10',	tax: 2.70, price: 2792.33, quantity: 1.00, fraction: 2.70, fraction_price: 2792.33, isLocked: true },
    { id: '2', date: '2021-03-12',	tax: 3.10, price: 2951.45, quantity: 0.40, fraction: 1.24, fraction_price: 1180.58, isLocked: true },
    { id: '3', date: '2021-03-15',	tax: 3.14, price: 2946.45, quantity: 0.40, fraction: 1.26, fraction_price: 1178.58, isLocked: true },
    { id: '4', date: '2021-03-22',	tax: 3.55, price: 2891.56, quantity: 0.35, fraction: 1.24, fraction_price: 1012.05, isLocked: true },
    { id: '5', date: '2021-04-06',	tax: 3.68, price: 2891.80, quantity: 0.50, fraction: 1.84, fraction_price: 1445.90, isLocked: true },
    { id: '6', date: '2021-04-22',	tax: 3.66, price: 2906.94, quantity: 0.35, fraction: 1.28, fraction_price: 1017.43, isLocked: true },
    { id: '7', date: '2021-05-27',	tax: 3.60, price: 2940.87, quantity: 0.70, fraction: 2.52, fraction_price: 2058.61, isLocked: true },
    { id: '8', date: '2021-06-04',	tax: 3.36, price: 2985.39, quantity: 0.50, fraction: 1.68, fraction_price: 1492.70, isLocked: true },
    { id: '9', date: '2021-06-08',	tax: 3.37, price: 2986.04, quantity: 0.50, fraction: 1.69, fraction_price: 1493.02, isLocked: true },
    { id: '10', date: '2021-06-09',	tax: 3.38, price: 2988.60, quantity: 0.50, fraction: 1.69, fraction_price: 1494.30, isLocked: true },
    { id: '11', date: '2021-06-18',	tax: 3.86, price: 2928.00, quantity: 1.00, fraction: 3.86, fraction_price: 2928.00, isLocked: true },
    { id: '12', date: '2021-07-02',	tax: 3.75, price: 2956.41, quantity: 1.00, fraction: 3.75, fraction_price: 2956.41, isLocked: true },
  ],
  ipca35_itau: [
    { date: '2021-03-12',	tax: 3.10, price: 2951.45, quantity: 0.40, fraction: 1.24, fraction_price: 1180.58 },
  ]
};

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
