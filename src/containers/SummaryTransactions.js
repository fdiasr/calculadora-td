import React from "react";
import _ from "lodash";

import TransactionUseContext from './stores'

const SummaryTransactions = () => {

  const { state } = TransactionUseContext()

  const getTotalQuantity = transactions => {
    // _.reduce(transactions, (sum, t) => sum + _.parse(t.fraction), 0)
    console.log(transactions)
    return 0
  }
  const getMedianTax = transactions => {
    const fractionSum = getTotalQuantity(transactions)
    if (fractionSum <= 0) {
      return 0
    }
    const taxSum = _.reduce(transactions, (sum, t) => sum + t.fraction * t.tax, 0)
    return _.round(fractionSum / taxSum, 2)
  }
  const getMedianValue = transactions => 0

  return (
    <div>
      <h2>Totalizadores</h2>
      <table>
        <tbody>
          <tr>
            <td className="total-quantity-label">Quantidade:</td>
            <td className="total-quantity-value">{ getTotalQuantity(state.transactions) }</td>
          </tr>
          <tr>
            <td className="median-tax-label">Taxa Mediana:</td>
            <td className="median-tax-value">{ getMedianTax() }</td>
          </tr>
          <tr>
            <td className="median-price-label">Valor Mediano:</td>
            <td className="median-price-value">{ getMedianValue() }</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default SummaryTransactions
