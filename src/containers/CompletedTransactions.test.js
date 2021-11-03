
// describe('Global Describe', () => {
//   beforeEach(() => console.log('1 - beforeEach'));

//   describe('Scoped / Nested block', () => {
//     test('exec test 1', () => console.log('2 - test111'));
//     test('exec test 2', () => console.log('2 - test222'));
//   });

// });

import React from 'react'
import { mount } from 'enzyme'

import { ViewerProvider, StocksProvider } from './stores'
import CompletedTransactions from './CompletedTransactions'

import Transaction from '../components/Transaction'
import TransactionsList from '../components/TransactionsList'

import { ipca26bradesco } from '../data'

let completedTransactions = null

const mountCompletedTransactions = () => (mount(
  <ViewerProvider initialState={{ viewer: 'transactions', id: ipca26bradesco.key }}>
    <StocksProvider initialState={{ stocks: [ { ...ipca26bradesco, transactions: [] } ] }}>
      <CompletedTransactions />
    </StocksProvider>
  </ViewerProvider>
))

describe('Completed Transactions component', () => {
  beforeEach(() => {
    completedTransactions = mountCompletedTransactions();
  })

  afterEach(() => {
    completedTransactions.unmount()
  })

  describe('renders', () => {
    test('title element', () => {
      expect(completedTransactions.find('h2')).toHaveLength(1)
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
      completedTransactions.find('button.transaction-item-add').simulate('click')

      expect(completedTransactions.find(Transaction)).toHaveLength(1)
    })

    test('add two items', () => {
      completedTransactions.find('button.transaction-item-add').simulate('click')
      completedTransactions.find('button.transaction-item-add').simulate('click')

      expect(completedTransactions.find(Transaction)).toHaveLength(2)
    })

    test('remove one of items', () => {
      completedTransactions.find('button.transaction-item-add').simulate('click')
      completedTransactions.find('button.transaction-item-add').simulate('click')

      completedTransactions.find('.transaction-item-remove').at(1).simulate('click')

      expect(completedTransactions.find(Transaction)).toHaveLength(1)
    })

    test('add a new item, after remove one', () => {
      completedTransactions.find('button.transaction-item-add').simulate('click')
      completedTransactions.find('button.transaction-item-add').simulate('click')
      completedTransactions.find('.transaction-item-remove').at(1).simulate('click')

      completedTransactions.find('button.transaction-item-add').simulate('click')

      expect(completedTransactions.find(Transaction)).toHaveLength(2)
    })
  })

  const findTransactionIdByIndex = index => {
    return completedTransactions
      .find(TransactionsList)
      .find('.transaction-item')
      .at(index)
      .prop('data-transaction-id')
  }

  const update = (transactionId, fieldName, newValue) => {
    const element = completedTransactions.find({ 'data-transaction-id': transactionId}).find(`input#${fieldName}`)
    element.simulate('change', { target: { id: fieldName, value: newValue } })
  }

  const get = (transactionId, fieldName) => {
    return completedTransactions
      .find({ 'data-transaction-id': transactionId})
      .find(`input#${fieldName}`)
      .get(0)
  }

  describe('changes values of Transaction List items', () => {

    beforeEach(() => {
      completedTransactions = mount(
        <ViewerProvider initialState={{ viewer: 'transactions', id: ipca26bradesco.key }}>
          <StocksProvider initialState={{ stocks: [ ipca26bradesco ] }}>
            <CompletedTransactions />
          </StocksProvider>
        </ViewerProvider>
      )
    })
  
    afterEach(() => {
      // completedTransactions.unmount()
    })  

    test('change date of first transaction', () => {
      const transactionId = findTransactionIdByIndex(0)
      const fieldName = 'date'
      const newValue = '2021-01-05'

      update(transactionId, fieldName, newValue)

      const field = get(transactionId, fieldName)
      expect(field.props.value).toBe(newValue)
    })

    test('change price of second transaction', () => {
      const transactionId = findTransactionIdByIndex(1)
      const fieldName = 'price'
      const newValue = 2666.50
      
      update(transactionId, fieldName, newValue)

      const field = get(transactionId, fieldName)
      expect(field.props.value).toBe(newValue)
    })

    test('change tax of third transaction', () => {
      const transactionId = findTransactionIdByIndex(2)
      const fieldName = 'tax'
      const newValue = 2.65
      
      update(transactionId, fieldName, newValue)

      const field = get(transactionId, fieldName)
      expect(field.props.value).toBe(newValue)
    })

    test('change quantity of fourth transaction', () => {
      const transactionId = findTransactionIdByIndex(3)
      const fieldName = 'quantity'
      const newValue = 0.18
      
      update(transactionId, fieldName, newValue)

      const field = get(transactionId, fieldName)
      expect(field.props.value).toBe(newValue)
    })
  })
})
