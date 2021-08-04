import { TransactionsUseContext } from './transactions'
import { FutureTransactionsUseContext } from './future'
import { ViewerUseContext } from './viewer'

const defaultTransaction = { date: '2021-01-01', tax: 0, price: 0, quantity: 1.00 }

const futureTransaction = { date: '2022-01-01', tax: 0, price: 0, quantity: 1.00 }

export { 
  TransactionsUseContext, 
  FutureTransactionsUseContext,
  ViewerUseContext,
  defaultTransaction, 
  futureTransaction
}
