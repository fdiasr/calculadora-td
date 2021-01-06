import React, { useReducer } from "react";
// import React, { useContext, useEffect, useReducer } from "react";
import { v4 as uuidv4 } from 'uuid'

import reducer from "./TransactionsReducer";
import TransactionsList from "../components/TransactionsList"

const initialState = { type: null, transactions: [] }
const defaultTransaction = { date: '2021-01-01', price: 0, tax: 0, fraction: 0 }

const CompletedTransactions = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  // useEffect(() => {
  //   console.log('use effect ?????')
  // })

  const newTransaction = () => ({ ...defaultTransaction, id: uuidv4() })

  const addCallback = () => {
    dispatch({ type: 'ADD', payload: newTransaction() })
  }

  const removeCallback = id => {
    dispatch({ type: 'REMOVE', payload: { id } })
  }

  const changeCallback = transaction => {
    dispatch({ type: 'UPDATE', payload: transaction })
  }

  return (
    <div>
      <h1>Aportes Realizados</h1>

      <div className='tools'>IMPORTAR/EXPORTAR</div>

      <TransactionsList 
        transactions={state.transactions}
        addCallback={addCallback}
        removeCallback={removeCallback}
        changeCallback={changeCallback}
      />
    </div>
  )
}

export default CompletedTransactions
