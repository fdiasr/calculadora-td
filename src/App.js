import './App.css';

import { Provider } from './containers/stores'
import CompletedTransactions from './containers/CompletedTransactions'
import SummaryTransactions from './containers/SummaryTransactions'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Provider>
          <CompletedTransactions />
          <SummaryTransactions />
        </Provider>
      </header>
    </div>
  );
}

export default App;
