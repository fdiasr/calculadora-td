import React from "react"
import { v4 as uuidv4 } from 'uuid'
import { Container, Box } from "@material-ui/core"

import { FutureTransactionsUseContext, futureTransaction } from './stores'

import { TransactionsList } from '../components'

const FutureTransaction = () => {

  const { state, dispatch } = FutureTransactionsUseContext()

  const newTransaction = () => ({ ...futureTransaction, id: uuidv4() })

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
      <Container className="future-transactions">
        <h2>Aportes Futuros</h2>

        <TransactionsList 
          transactions={state.futureTransactions}
          addCallback={addCallback}
          removeCallback={removeCallback}
          changeCallback={changeCallback}
          isFutureTransaction={true}
        />
      </Container>
    </Box>
  )
}

export default FutureTransaction
