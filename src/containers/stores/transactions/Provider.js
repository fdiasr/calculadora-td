import React, { useReducer } from "react"

import Reducer from './Reducer'
import { TransactionsContext } from '.'

const defaultInitialState = { transactions: [] }

const Provider = ({ children, initialState }) => {
    const definedInitialState = initialState ? initialState : defaultInitialState
    const [state, dispatch] = useReducer(Reducer, definedInitialState)

    return (
        <TransactionsContext.Provider value={{ state, dispatch }}>
            {children}
        </TransactionsContext.Provider>
    )
}

export default Provider
