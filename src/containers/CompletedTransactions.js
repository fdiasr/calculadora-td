import React from "react";
import { v4 as uuidv4 } from 'uuid'
import { Container, Box, Icon, IconButton } from "@material-ui/core";

import { StocksUseContext, defaultTransaction, ViewerUseContext } from './stores'

import { TransactionsList } from '../components'

const CompletedTransactions = () => {

  const { state, dispatch } = StocksUseContext()

  const viewerState = ViewerUseContext().state.viewer
  const viewerKey = ViewerUseContext().state.id
  const viewerDispatch = ViewerUseContext().dispatch

  if (viewerState !== 'transactions') {
    return null
  }

  const stock = state.stocks.find(item => item.key === viewerKey);

  if (!stock) {
    return (<Box width={0.9} mx="auto" boxShadow={3} >Stock Not Found!</Box>)
  }
  
  const viewCallback = () => {
    viewerDispatch({ type: 'SUMMARY' })
  }

  const newTransaction = () => ({ ...defaultTransaction, id: uuidv4(), isLocked: false })

  const addCallback = () => {
    // console.log('add callback', viewerKey)
    dispatch({ type: 'ADD', payload: { key: viewerKey, transaction: newTransaction() }})
  }

  const removeCallback = id => {
    dispatch({ type: 'REMOVE', payload: { key: viewerKey, transactionId: id } })
  }

  const lockCallback = id => {
    dispatch({ type: 'LOCK', payload: { key: viewerKey, transactionId: id } })
  }

  const changeCallback = transaction => {
    dispatch({ type: 'UPDATE', payload: { key: viewerKey, transaction } })
  }

  return (
    <Box width={0.9} mx="auto" boxShadow={3} >
      <Container className="completed-transactions">
        <IconButton aria-label="more" onClick={viewCallback} >
          <Icon>arrow_back</Icon>
        </IconButton>
        <h2>Aportes Realizados para {viewerKey}</h2>
        <TransactionsList 
          transactions={stock.transactions}
          addCallback={addCallback}
          removeCallback={removeCallback}
          lockCallback={lockCallback}
          changeCallback={changeCallback}
        />
      </Container>
    </Box>
  )
}

export default CompletedTransactions
