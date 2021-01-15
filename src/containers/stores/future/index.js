import { createContext, useContext } from "react"

import Reducer from './Reducer'
import Provider from './Provider'

const FutureTransactionsContext = createContext()

const FutureTransactionsUseContext = () => useContext(FutureTransactionsContext)

export { Provider, Reducer, FutureTransactionsContext, FutureTransactionsUseContext }
