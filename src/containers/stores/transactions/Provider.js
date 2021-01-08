import React, { useReducer } from "react"

import Reducer from './Reducer'
import { TransactionsContext } from '.'

const initialState = { transactions: [] }

const Provider = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initialState)

    return (
        <TransactionsContext.Provider value={{ state, dispatch }}>
            {children}
        </TransactionsContext.Provider>
    )
}

export default Provider
