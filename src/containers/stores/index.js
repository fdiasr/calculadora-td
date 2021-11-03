// import { TransactionsUseContext } from './transactions'
import { ViewerUseContext, Provider as ViewerProvider } from './viewer'
import { StocksUseContext, Provider as StocksProvider } from './stocks'
import { FutureTransactionsUseContext } from './future'

const defaultTransaction = { date: '2021-01-01', tax: 0, price: 0, quantity: 1.00 }

const futureTransaction = { date: '2022-01-01', tax: 0, price: 0, quantity: 1.00 }

export { 
  StocksUseContext, 
  FutureTransactionsUseContext,
  ViewerUseContext,
  defaultTransaction, 
  futureTransaction,
  ViewerProvider,
  StocksProvider
}
