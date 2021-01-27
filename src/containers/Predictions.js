import React  from "react"
import _ from "lodash";
import { v4 as uuidv4 } from 'uuid'
import { Box } from "@material-ui/core";
import { DataGrid } from '@material-ui/data-grid'

import { TransactionsUseContext, FutureTransactionsUseContext } from './stores'
import Calculator from "../calculator/Calculator"

const columns = [
  { field: 'prediction-qtd', headerName: 'Qtde', width: 150 },
  { field: 'prediction-tax', headerName: 'Taxa Mediana', width: 150 },
  { field: 'prediction-price', headerName: 'Valor Mediana', width: 150 },
]

const format = ({ totalQuantity, tax, price }) => {
  return {
    id: uuidv4(),
    'prediction-qtd': totalQuantity,
    'prediction-tax': tax,
    'prediction-price': price
  }
}

const predicts = (currentTransactions, futureTransactions) => {
  const calc = new Calculator(currentTransactions)
  const predictions = calc.predicts(futureTransactions)
  return _.map(predictions, prediction => format(prediction))
}

const SummaryTransactions = () => {
  const { state: transactionsState } = TransactionsUseContext()
  const { state: futureState } = FutureTransactionsUseContext()

  const rows = predicts(transactionsState.transactions, futureState.futureTransactions)

  return (
    <Box boxShadow={3}>
      <h2>Predições</h2>
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid rows={rows} columns={columns} />
        </div>
    </Box>
  )
}

export default SummaryTransactions
