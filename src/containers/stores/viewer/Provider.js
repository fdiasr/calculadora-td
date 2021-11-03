import React, { useReducer } from "react"

import Reducer from './Reducer'
import { ViewerContext } from '.'

const defaultInitialState = { viewer: 'summary', id: '' }

const Provider = ({ children, initialState }) => {
    const definedInitialState = initialState ? initialState : defaultInitialState
    const [state, dispatch] = useReducer(Reducer, definedInitialState)

    return (
        <ViewerContext.Provider value={{ state, dispatch }}>
            {children}
        </ViewerContext.Provider>
    )
}

export default Provider
