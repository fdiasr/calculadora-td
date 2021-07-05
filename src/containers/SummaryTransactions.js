import React from "react";
import _ from "lodash";
import { Box, Icon, IconButton } from "@material-ui/core";

import { DataGrid } from "@material-ui/data-grid";

import { TransactionsUseContext, ViewerUseContext } from './stores'
import Calculator from "../calculator/Calculator";


const SummaryTransactions = () => {

  // VIEWER VALIDATION AND PREPARATION
  const dispatchViewer = ViewerUseContext().dispatch
  const stateViewer = ViewerUseContext().state.viewer

  if (stateViewer !== 'summary') {
    return null
  }

  const viewCallback = payload => dispatchViewer({ type: 'TRANSACTIONS', payload })

  const { state } = TransactionsUseContext()

  /* @TODO redo START */
  const calc = new Calculator(state.transactions)
  const median = calc.median()
  const getTotalQuantity = transactions => {
    const totalQuantity = _.reduce(transactions, (sum, t) => sum + t.fraction, 0)
    return _.round(totalQuantity, 2)
  }
  const totalQuantity = getTotalQuantity(state.transactions);
  /* @TODO redo END */

  // EXAMPLE SUMMARY DATA
  const summary = [
    { id: 'ipca26', description: 'IPCA 2026', quantity: '1', value: '200', medianPrice: '1', medianTax: '2', more: 'ipca26' },
    { id: 'ipca35', description: 'IPCA 2035', quantity: '1', value: '300', medianPrice: '2', medianTax: '2', more: 'ipca35' },
    { id: 'ipca45', description: 'IPCA 2045', quantity: '1', value: '400', medianPrice: '3', medianTax: '2', more: 'ipca45' },
  ];

  const renderTools = params => {
    console.log(params.value)
    return (
      <IconButton aria-label="more" onClick={() => viewCallback(params.value)}>
        <Icon>add_circle</Icon>
      </IconButton>
    )
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 100, align: 'left', cellClassName: 'summary-cell' },
    { field: 'description', headerName: 'DESCRICAO', width: 270, align: 'left', cellClassName: 'summary-cell' },
    { field: 'quantity', headerName: 'QTDE', flex: 1, type: 'number', cellClassName: 'summary-cell' },
    { field: 'value', headerName: 'VALOR', flex: 1, type: 'number', cellClassName: 'summary-cell' },
    { field: 'medianPrice', headerName: 'PRECO MEDIO', flex: 1, type: 'number', cellClassName: 'summary-cell' },
    { field: 'medianTax', headerName: 'TAXA MEDIA', flex: 1, type: 'number', cellClassName: 'summary-cell' },
    { 
      field: 'more',
      headerName: '', 
      flex: 1, 
      cellClassName: 'summary-cell',
      renderCell: renderTools
    }
  ];

  return (
    <Box width={0.9} mx="auto" boxShadow={3} >
      <h2>Totalizadores por Papel</h2>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid rows={summary} columns={columns} className="summary-table" />
      </div>
    </Box>
  )
}

export default SummaryTransactions
