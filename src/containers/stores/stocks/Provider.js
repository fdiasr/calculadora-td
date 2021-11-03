import React, { useReducer } from "react"

import Reducer from './Reducer'
import { StocksContext } from '.'

const defaultInitialState = { stocks: [] }
// initialState={{ stocks: [ ipca26bradesco, ipca35itau ] }}

const Provider = ({ children, initialState }) => {
    const definedInitialState = initialState ? initialState : defaultInitialState
    // console.log(definedInitialState);
    const [state, dispatch] = useReducer(Reducer, definedInitialState)

    return (
        <StocksContext.Provider value={{ state, dispatch }}>
            {children}
        </StocksContext.Provider>
    )
}

export default Provider
