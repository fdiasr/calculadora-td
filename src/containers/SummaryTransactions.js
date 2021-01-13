import React from "react";
import _ from "lodash";

import TransactionUseContext from './stores'
import Calculator from "../calculator/Calculator";

const SummaryTransactions = () => {

  const { state } = TransactionUseContext()

  const calc = new Calculator(state.transactions)

  const median = calc.median()

  const getTotalQuantity = transactions => {
    const totalQuantity = _.reduce(transactions, (sum, t) => sum + t.fraction, 0)
    return _.round(totalQuantity, 2)
  }

  const totalQuantity = getTotalQuantity(state.transactions)

  return (
    <div>
      <h2>Totalizadores</h2>
      <table>
        <tbody>
          <tr>
            <td className="total-quantity-label">Quantidade:</td>
            <td className="total-quantity-value">{ totalQuantity }</td>
          </tr>
          <tr>
            <td className="median-quantity-label">Fração Mediana:</td>
            <td className="median-quantity-value">{ median.quantity }</td>
          </tr>
          <tr>
            <td className="median-tax-label">Taxa Mediana:</td>
            <td className="median-tax-value">{ median.tax }</td>
          </tr>
          <tr>
            <td className="median-price-label">Preço Mediano:</td>
            <td className="median-price-value">{ median.price }</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default SummaryTransactions
