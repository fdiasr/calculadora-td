import { TransactionsUseContext } from './transactions'
import { FutureTransactionsUseContext } from './future'
import { ViewerUseContext } from './viewer'

const defaultTransaction = { date: '2021-01-01', price: 0, tax: 0, fraction: 0 }

const futureTransaction = { date: '2022-01-01', price: 0, tax: 0, fraction: 0 }

export { 
  TransactionsUseContext, 
  FutureTransactionsUseContext,
  ViewerUseContext,
  defaultTransaction, 
  futureTransaction
}
