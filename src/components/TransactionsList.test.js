import React from 'react'
import { shallow } from 'enzyme'

import TransactionsList from './TransactionsList'
import TransactionsHeader from './TransactionsHeader'
import Transaction from './Transaction'

import mockedData from '../calculator/mockData'

let transactionsList = null

const props = {
  transactions: mockedData,
  addCallback: jest.fn(),
  removeCallback: jest.fn(),
  changeCallback: jest.fn()
}

describe('Transactions List component', () => {
  beforeAll(() => {
    transactionsList = shallow(<TransactionsList { ...props } />)
  })
  beforeEach(() => {
    props.addCallback.mockReset()
    props.removeCallback.mockReset()
    props.changeCallback.mockReset()
  })

  test('renders Transaction Header component', () => {
    expect(transactionsList.find(TransactionsHeader)).toHaveLength(1)
  })
  test('renders mocked items using Transaction component', () => {
    expect(transactionsList.find(Transaction)).toHaveLength(11)
  })
  test('renders remove button for each transaction from list', () => {
    expect(transactionsList.find('.transaction-item-remove')).toHaveLength(11)
  })
  test('renders add button for a new transaction item', () => {
    expect(transactionsList.find('.transaction-item-add')).toHaveLength(1)
  })

  test('execute callback to add new transaction', () => {
    transactionsList.find('.transaction-item-add').simulate('click')
    expect(props.addCallback).toHaveBeenCalledTimes(1)
  })

  test('execute callback to remove selected transaction', () => {
    transactionsList.find('.transaction-item-remove').at(0).simulate('click')
    expect(props.removeCallback).toHaveBeenCalledTimes(1)
  })
})
