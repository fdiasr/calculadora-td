import React, { useReducer } from "react";
// import React, { useContext, useEffect, useReducer } from "react";

import TransactionsList from "../components/TransactionsList"
import TransactionsReducer from "./TransactionsReducer";

const initialState = { transactions: [] }

const CompletedTransactions = () => {

  const [state, dispatch] = useReducer(TransactionsReducer, initialState);

  // useEffect(() => {
  //   console.log('use effect ?????')
  // })

  const addCallback = () => {
    dispatch({ type: 'ADD' })
  }

  const removeCallback = id => {
    dispatch({ type: 'REMOVE', id })
  }

  return (
    <div>
      <h1>Aportes Realizados</h1>
      <div className='tools'>IMPORTAR/EXPORTAR</div>
      <TransactionsList transactions={state.transactions} addCallback={addCallback} removeCallback={removeCallback} />
    </div>
  )
}

export default CompletedTransactions
