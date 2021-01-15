import React, { useReducer } from "react"

import Reducer from './Reducer'
import { FutureTransactionsContext } from '.'

const defaultInitialState = { futureTransactions: [] }

const Provider = ({ children, initialState }) => {
    const definedInitialState = initialState ? initialState : defaultInitialState
    const [state, dispatch] = useReducer(Reducer, definedInitialState)

    return (
        <FutureTransactionsContext.Provider value={{ state, dispatch }}>
            {children}
        </FutureTransactionsContext.Provider>
    )
}

export default Provider
