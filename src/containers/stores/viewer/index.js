import { createContext, useContext } from "react"

import Reducer from './Reducer'
import Provider from './Provider'

const ViewerContext = createContext()

const ViewerUseContext = () => useContext(ViewerContext)

export { Provider, Reducer, ViewerContext, ViewerUseContext }
