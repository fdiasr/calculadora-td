import React from "react";
import _ from "lodash";
import { v4 as uuidv4 } from 'uuid'
import { DataGrid } from '@material-ui/data-grid';

import { TransactionsUseContext, FutureTransactionsUseContext } from './stores'
import Calculator from "../calculator/Calculator";

const SummaryTransactions = () => {

  const { state: transactionsState } = TransactionsUseContext()
  const { state: futureState } = FutureTransactionsUseContext()

  const columns = [
    { field: 'prediction-qtd', headerName: 'Qtde', width: 50 },
    { field: 'prediction-tax', headerName: 'Taxa Mediana', width: 50 },
    { field: 'prediction-price', headerName: 'Valor Mediana', width: 50 },
  ];

  const calc = new Calculator(transactionsState.transactions)

  const predicts = futureTransactions => {
    const predictions = calc.predicts(futureTransactions)

    const format = ({ totalQuantity, tax, price }) => {
      return {
        id: uuidv4(),
        'prediction-qtd': totalQuantity,
        'prediction-tax': tax,
        'prediction-price': price
      }
    }
    return _.map(predictions, prediction => format(prediction))
  }
  
  const rows = predicts(futureState.futureTransactions)

  return (
    <div>
      <h2>Predições</h2>
        <DataGrid rows={rows} columns={columns} />
    </div>
  )
}

export default SummaryTransactions
