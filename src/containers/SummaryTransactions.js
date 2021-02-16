import React from "react";
import _ from "lodash";
import { Box } from "@material-ui/core";

import { TransactionsUseContext } from './stores'
import Calculator from "../calculator/Calculator";
import { DataGrid } from "@material-ui/data-grid";

const SummaryTransactions = () => {

  const { state } = TransactionsUseContext()

  const calc = new Calculator(state.transactions)

  const median = calc.median()

  const getTotalQuantity = transactions => {
    const totalQuantity = _.reduce(transactions, (sum, t) => sum + t.fraction, 0)
    return _.round(totalQuantity, 2)
  }

  const totalQuantity = getTotalQuantity(state.transactions)

  const columns = [
    { field: 'summary-label', headerName: '', width: 170, align: 'right', cellClassName: 'summary-cell' },
    { field: 'summary-value', headerName: '', flex: 1, type: 'number', cellClassName: 'summary-cell' },
  ]
  
  const rows = [
    { id: 'summary-quantity', 'summary-label': 'Quantidade', 'summary-value': totalQuantity },
    { id: 'summary-median-quantity', 'summary-label': 'Fração Mediana', 'summary-value': median.quantity },
    { id: 'summary-median-tax', 'summary-label': 'Taxa Mediana', 'summary-value': median.tax },
    { id: 'summary-median-price', 'summary-label': 'Preço Mediano', 'summary-value': median.price },
  ]

  return (
    <Box boxShadow={3}>
      <h2>Totalizadores</h2>
      <div style={{ height: 210, width: '100%' }}>
        <DataGrid rows={rows} columns={columns} headerHeight={0} hideFooter={true} className="summary-table" />
      </div>
    </Box>
  )
}

export default SummaryTransactions
