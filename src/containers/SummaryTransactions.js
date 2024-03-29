import React from "react";
import _ from "lodash";
import { Box, Icon, IconButton } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";

import { StocksUseContext, ViewerUseContext } from './stores'
import Calculator from "../calculator/Calculator";

const SummaryTransactions = () => {

  // TODO MOVE LOGIC TO OTHER FILE 

  // VIEWER VALIDATION AND PREPARATION
  const dispatchViewer = ViewerUseContext().dispatch
  
  const stateViewer = ViewerUseContext().state.viewer

  if (stateViewer !== 'summary') {
    return null
  }

  const viewCallback = payload => dispatchViewer({ type: 'TRANSACTIONS', payload })

  // TRANSACTION PROCESSING
  const { state } = StocksUseContext()

  const getTotalQuantity = transactions => {
    const totalQuantity = _.reduce(transactions, (sum, t) => sum + t.quantity, 0)
    return _.round(totalQuantity, 2)
  };

  const getTotalValue = transactions => {
    const totalValue = _.reduce(transactions, (sum, t) => sum + (t.quantity * t.price), 0)
    return _.round(totalValue, 2)
  };

  const consolidate = (id, transactions) => {
    const description = 'Desc: ' + id;
    const quantity = getTotalQuantity(transactions);
    const value = getTotalValue(transactions);
    const calculator = new Calculator(transactions);
    const { price: medianPrice, tax: medianTax } = calculator.median();

    return { id, description, quantity, value, medianPrice, medianTax };
  };

  const summary = Object.entries(state.stocks).map(([id, transactions]) => consolidate(id, transactions));

  const renderType = params => {
    return (
      <IconButton aria-label="more" onClick={() => viewCallback(params.row.id)}>
        <Icon>add_circle</Icon>
      </IconButton>
    )
  };

  const renderTools = params => {
    return (
      <IconButton aria-label="more" onClick={() => viewCallback(params.row.id)}>
        <Icon>add_circle</Icon>
      </IconButton>
    )
  };

  const columns = [
    { 
      field: 'type',
      headerName: 'TIPO',
      width: 150,
      align: 'left',
      cellClassName: 'summary-cell summary-field-type',
      renderCell: renderType
    },
    { field: 'description', headerName: 'DESCRICAO', width: 250, align: 'left', cellClassName: 'summary-cell summary-field-description' },
    { field: 'quantity', headerName: 'QTDE TOTAL', flex: 1, type: 'number', cellClassName: 'summary-cell summary-field-quantity' },
    { field: 'value', headerName: 'VALOR TOTAL', flex: 1, type: 'number', cellClassName: 'summary-cell summary-field-value' },
    { field: 'medianPrice', headerName: 'PRECO MEDIO', flex: 1, type: 'number', cellClassName: 'summary-cell summary-field-median-price' },
    { field: 'medianTax', headerName: 'TAXA MEDIA', flex: 1, type: 'number', cellClassName: 'summary-cell summary-field-median-tax' },
    { 
      field: 'DETAILS',
      headerName: '', 
      flex: 1, 
      cellClassName: 'summary-cell summary-field-details',
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
