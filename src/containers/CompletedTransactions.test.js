import React from 'react'
import { mount } from 'enzyme'

import Transaction from '../components/Transaction'
import TransactionsList from '../components/TransactionsList'
import CompletedTransactions from './CompletedTransactions'

let completedTransactions = null

describe('Completed Transactions component', () => {
  beforeAll(() => {
    completedTransactions = mount(<CompletedTransactions />)
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

  describe.skip('manipulates Transaction List', () => {
    test('validate ZERO items', () => {
      expect(completedTransactions.find(Transaction)).toHaveLength(0)
    })
    test('add first item', () => {
      completedTransactions.find('.addTransaction').simulate('click')
      expect(completedTransactions.find(Transaction)).toHaveLength(1)
    })
    test('add second item', () => {
      completedTransactions.find('.addTransaction').simulate('click')
      expect(completedTransactions.find(Transaction)).toHaveLength(2)
    })
    test('add third item', () => {
      completedTransactions.find('.addTransaction').simulate('click')
      expect(completedTransactions.find(Transaction)).toHaveLength(3)
    })
    test.skip('remove second item', () => {
      // expect(state.transactions).toHaveLength(2)
    })
  })
})
