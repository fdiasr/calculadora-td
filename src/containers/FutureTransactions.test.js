import React from 'react'
import { mount } from 'enzyme'

import { Provider } from './stores/future'
import FutureTransactions from './FutureTransactions'

import Transaction from '../components/Transaction'
import TransactionsList from '../components/TransactionsList'

let futureTransactions = null

const getInputFrom = element => futureTransactions.find(element).find('input')

describe.skip('Future Transactions component', () => {
  beforeEach(() => {
    futureTransactions = mount(<Provider><FutureTransactions /></Provider>)
  })

  describe.skip('renders', () => {
    test('title element', () => {
      expect(futureTransactions.find('h2')).toHaveLength(1)
    })
    test('Transactions List component', () => {
      expect(futureTransactions.find(TransactionsList)).toHaveLength(1)
    })  
  })

  describe.skip('manipulates list of new Future Transactions', () => {
    test('validate ZERO items', () => {
      expect(futureTransactions.find(Transaction)).toHaveLength(0)
    })

    test('add one item', () => {
      futureTransactions.find('button.transaction-item-add').simulate('click')

      expect(futureTransactions.find(Transaction)).toHaveLength(1)
    })

    test('block date and price of a new item', () => {
      futureTransactions.find('button.transaction-item-add').simulate('click')
      
      const dateIsReadOnly = getInputFrom('.transaction-item-date').get(0).props.disabled
      const priceIsReadOnly = getInputFrom('.transaction-item-price').get(0).props.readOnly
      expect(dateIsReadOnly && priceIsReadOnly).toBeTruthy()

      expect(futureTransactions.find(Transaction)).toHaveLength(1)
    })

    test('remove one of items', () => {
      futureTransactions.find('button.transaction-item-add').simulate('click')
      futureTransactions.find('button.transaction-item-add').simulate('click')

      futureTransactions.find('.transaction-item-remove').at(1).simulate('click')

      expect(futureTransactions.find(Transaction)).toHaveLength(1)
    })

    test('add a new item, after remove one', () => {
      futureTransactions.find('button.transaction-item-add').simulate('click')
      futureTransactions.find('button.transaction-item-add').simulate('click')
      futureTransactions.find('.transaction-item-remove').at(1).simulate('click')

      futureTransactions.find('button.transaction-item-add').simulate('click')

      expect(futureTransactions.find(Transaction)).toHaveLength(2)
    })
  })
})
