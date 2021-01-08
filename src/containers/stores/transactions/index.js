import { createContext, useContext } from "react"

import Provider from './Provider'

const TransactionsContext = createContext()

const TransactionUseContext = () => useContext(TransactionsContext)

const defaultTransaction = { date: '2021-01-01', price: 0, tax: 0, fraction: 0 }

export { Provider, TransactionsContext, TransactionUseContext, defaultTransaction }
