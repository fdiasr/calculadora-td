import React from 'react'
import { mount } from 'enzyme'
import { v4 as uuidv4 } from 'uuid'
import { DataGrid } from '@material-ui/data-grid'

import Predictions from './Predictions'
import { Provider as TransactionsProvider } from './stores/transactions'
import { Provider as FutureProvider } from './stores/future'

import data from '../calculator/mockData'

const futureTransactions = [
  { id: uuidv4(), date: '2022-01-01', price: 2804.05, tax: 2.20, fraction: 0.18 },
  { id: uuidv4(), date: '2022-01-01', price: 2804.05, tax: 2.40, fraction: 0.18 },
  { id: uuidv4(), date: '2022-01-01', price: 2804.05, tax: 2.50, fraction: 0.18 },
  { id: uuidv4(), date: '2022-01-01', price: 2804.05, tax: 2.56, fraction: 0.18 },
  { id: uuidv4(), date: '2022-01-01', price: 2804.05, tax: 2.60, fraction: 0.18 },
  { id: uuidv4(), date: '2022-01-01', price: 2804.05, tax: 3.00, fraction: 0.18 },
  { id: uuidv4(), date: '2022-01-01', price: 2804.05, tax: 3.50, fraction: 0.18 },
]

const expected = [
  { "prediction-qtd": 2.14, "prediction-price": 2808.11, "prediction-tax": 2.75 },
  { "prediction-qtd": 2.14, "prediction-price": 2808.11, "prediction-tax": 2.77 },
  { "prediction-qtd": 2.14, "prediction-price": 2808.11, "prediction-tax": 2.77 },
  { "prediction-qtd": 2.14, "prediction-price": 2808.11, "prediction-tax": 2.78 },
  { "prediction-qtd": 2.14, "prediction-price": 2808.11, "prediction-tax": 2.78 },
  { "prediction-qtd": 2.14, "prediction-price": 2808.11, "prediction-tax": 2.82 },
  { "prediction-qtd": 2.14, "prediction-price": 2808.11, "prediction-tax": 2.86 }
]

let predictions = null

const getDataGridRows = () => {
  return predictions
    .find(DataGrid)
    .prop('rows')
}

describe('Get Predictions', () => {
  beforeEach(() => {
    predictions = mount(
      <TransactionsProvider initialState={{ transactions: data }}>
        <FutureProvider initialState={{ futureTransactions }}>
          <Predictions />
        </FutureProvider>)
      </TransactionsProvider>
    )
  })

  test('for one future transaction', () => {
    const rows = getDataGridRows()

    expect(rows).toMatchObject(expected)
  })
})
