import React from "react";
import { v4 as uuidv4 } from 'uuid'
import { Container, Box } from "@material-ui/core";
// import React, { useEffect } from "react";

import { TransactionsUseContext, defaultTransaction } from './stores'

import { TransactionsList } from '../components'

const CompletedTransactions = () => {

  const { state, dispatch } = TransactionsUseContext()

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
    <Box boxShadow={3}>
      <Container className="completed-transactions">
        <h2>Aportes Realizados</h2>

        {/* <div className='tools'>IMPORTAR/EXPORTAR</div> */}

        <TransactionsList 
          transactions={state.transactions}
          addCallback={addCallback}
          removeCallback={removeCallback}
          changeCallback={changeCallback}
        />
      </Container>
    </Box>
  )
}

export default CompletedTransactions
