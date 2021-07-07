import React from "react";
import { v4 as uuidv4 } from 'uuid'
import { Container, Box, Icon, IconButton } from "@material-ui/core";

import { TransactionsUseContext, defaultTransaction, ViewerUseContext } from './stores'

import { TransactionsList } from '../components'

const CompletedTransactions = () => {

  const { state, dispatch } = TransactionsUseContext()

  const viewerState = ViewerUseContext().state.viewer
  const idState = ViewerUseContext().state.id
  const viewerDispatch = ViewerUseContext().dispatch

  console.log(ViewerUseContext().state);

  if (viewerState !== 'transactions') {
    return null
  }

  const viewCallback = () => {
    viewerDispatch({ type: 'SUMMARY' })
  }

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
    <Box width={0.9} mx="auto" boxShadow={3} >
      <Container className="completed-transactions">
        <IconButton aria-label="more" onClick={viewCallback} >
          <Icon>arrow_back</Icon>
        </IconButton>
        <h2>Aportes Realizados para {idState}</h2>
        <TransactionsList 
          transactions={state.transactions[idState]}
          addCallback={addCallback}
          removeCallback={removeCallback}
          changeCallback={changeCallback}
        />
      </Container>
    </Box>
  )
}

export default CompletedTransactions
