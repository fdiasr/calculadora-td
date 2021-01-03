import React from 'react'
import { shallow } from 'enzyme'

import TransactionsList from './TransactionsList'
import TransactionsHeader from './TransactionsHeader'
import Transaction from './Transaction'

import mockedData from '../calculator/mockData'

let transactionsList = null

describe('Transactions List component', () => {
  beforeAll(() => {
    transactionsList = shallow(<TransactionsList transactions={mockedData} />)
  })
  test('renders Transaction Header component', () => {
    expect(transactionsList.find(TransactionsHeader)).toHaveLength(1)
  })
  test('renders mocked items using Transaction component', () => {
    expect(transactionsList.find(Transaction)).toHaveLength(11)
  })
  test('renders remove button for each transaction from list', () => {
    expect(transactionsList.find('.removeTransaction')).toHaveLength(11)
  })
  test('renders add button for a new transaction item', () => {
    expect(transactionsList.find('.addTransaction')).toHaveLength(1)
  })
})
