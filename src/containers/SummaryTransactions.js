import React, { useContext } from "react";

import { TransactionsContext } from './stores/transactions'

const SummaryTransactions = () => {

  const [ state ] = useContext(TransactionsContext)

  const getTotalQuantity = transactions => transactions.length
  const getMedianTax = transactions => 0
  const getMedianValue = transactions => 0

  return (
    <div>
      <h1>Totalizadores</h1>
      <h2>Quantidade: { getTotalQuantity(state.transactions) }</h2>
      <h2>Taxa Mediana: { getMedianTax() }</h2>
      <h2>Valor Mediano: { getMedianValue() }</h2>
    </div>
  )
}

export default SummaryTransactions
