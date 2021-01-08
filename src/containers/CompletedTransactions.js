import React from "react";
import { v4 as uuidv4 } from 'uuid'
// import React, { useEffect } from "react";

import { TransactionUseContext, defaultTransaction } from './stores'

import { TransactionsList } from '../components'

const CompletedTransactions = () => {

  const { state, dispatch } = TransactionUseContext()

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
