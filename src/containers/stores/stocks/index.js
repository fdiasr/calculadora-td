import { createContext, useContext } from "react"

import Reducer from './Reducer'
import Provider from './Provider'

const StocksContext = createContext()

const StocksUseContext = () => useContext(StocksContext)

export { Provider, Reducer, StocksUseContext, StocksContext }
