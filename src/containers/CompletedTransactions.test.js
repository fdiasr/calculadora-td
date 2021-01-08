import React from 'react'
import { mount } from 'enzyme'

import { Provider } from './stores'
import CompletedTransactions from './CompletedTransactions'

import Transaction from '../components/Transaction'
import TransactionsList from '../components/TransactionsList'

let completedTransactions = null

describe('Completed Transactions component', () => {
  beforeEach(() => {
    completedTransactions = mount(<Provider><CompletedTransactions /></Provider>)
  })

  describe('renders', () => {
    test('title element', () => {
      expect(completedTransactions.find('h1')).toHaveLength(1)
    })
    test('tools component', () => {
      expect(completedTransactions.find('.tools')).toHaveLength(1)
    })
    test('Transactions List component', () => {
      expect(completedTransactions.find(TransactionsList)).toHaveLength(1)
    })  
  })

  describe('manipulates Transaction List', () => {
    test('validate ZERO items', () => {
      expect(completedTransactions.find(Transaction)).toHaveLength(0)
    })

    test('add one item', () => {
      completedTransactions.find('.addTransaction').simulate('click')

      expect(completedTransactions.find(Transaction)).toHaveLength(1)
    })

    test('add two items', () => {
      completedTransactions.find('.addTransaction').simulate('click')
      completedTransactions.find('.addTransaction').simulate('click')

      expect(completedTransactions.find(Transaction)).toHaveLength(2)
    })

    test('remove one of items', () => {
      completedTransactions.find('.addTransaction').simulate('click')
      completedTransactions.find('.addTransaction').simulate('click')

      completedTransactions.find('.removeTransaction').at(1).simulate('click')

      expect(completedTransactions.find(Transaction)).toHaveLength(1)
    })

    test('add a new item, after remove one', () => {
      completedTransactions.find('.addTransaction').simulate('click')
      completedTransactions.find('.addTransaction').simulate('click')
      completedTransactions.find('.removeTransaction').at(1).simulate('click')

      completedTransactions.find('.addTransaction').simulate('click')

      expect(completedTransactions.find(Transaction)).toHaveLength(2)
    })
  })

  const findTransactionIdByIndex = index => {
    return completedTransactions
    .find(TransactionsList)
    .find('li')
    .at(index)
    .key()
  }

  const getFieldSelector = fieldName => `.input_${fieldName}`

  const update = (transactionId, fieldName, value) => {
    completedTransactions
      .find({ 'data-transaction-id': transactionId})
      .find(getFieldSelector(fieldName))
      .at(0)
      .simulate('change', { target: { name: fieldName, value } })
  }

  const get = (transactionId, fieldName) => {
    return completedTransactions
      .find({ 'data-transaction-id': transactionId})
      .find(getFieldSelector(fieldName))
      .get(0)
  }

  describe('changes values of Transaction List items', () => {
    test('change date of first transaction', () => {
      completedTransactions.find('.addTransaction').simulate('click')
      const transactionId = findTransactionIdByIndex(0)
      const fieldName = 'date'
      const newValue = '2021-01-05'
      
      update(transactionId, fieldName, newValue)

      const field = get(transactionId, fieldName)
      expect(field.props.value).toBe(newValue)
    })

    test('change price of second transaction', () => {
      completedTransactions.find('.addTransaction').simulate('click')
      completedTransactions.find('.addTransaction').simulate('click')
      const transactionId = findTransactionIdByIndex(1)
      const fieldName = 'price'
      const newValue = 2666.50
      
      update(transactionId, fieldName, newValue)

      const field = get(transactionId, fieldName)
      expect(field.props.value).toBe(newValue)
    })

    test('change tax of third transaction', () => {
      completedTransactions.find('.addTransaction').simulate('click')
      completedTransactions.find('.addTransaction').simulate('click')
      completedTransactions.find('.addTransaction').simulate('click')
      const transactionId = findTransactionIdByIndex(2)
      const fieldName = 'tax'
      const newValue = 2.65
      
      update(transactionId, fieldName, newValue)

      const field = get(transactionId, fieldName)
      expect(field.props.value).toBe(newValue)
    })

    test('change fraction of fourth transaction', () => {
      completedTransactions.find('.addTransaction').simulate('click')
      completedTransactions.find('.addTransaction').simulate('click')
      completedTransactions.find('.addTransaction').simulate('click')
      completedTransactions.find('.addTransaction').simulate('click')
      const transactionId = findTransactionIdByIndex(3)
      const fieldName = 'fraction'
      const newValue = 0.18
      
      update(transactionId, fieldName, newValue)

      const field = get(transactionId, fieldName)
      expect(field.props.value).toBe(newValue)
    })
  })
})
