import { createContext, useContext } from "react"

import Reducer from './Reducer'
import Provider from './Provider'

const TransactionsContext = createContext()

const TransactionsUseContext = () => useContext(TransactionsContext)

export { Provider, Reducer, TransactionsContext, TransactionsUseContext }
