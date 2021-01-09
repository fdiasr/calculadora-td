import React from 'react'
import { mount } from 'enzyme'

import { Provider } from './stores/transactions'

import SummaryTransactions from './SummaryTransactions'

let summaryTransactions = null

describe('Completed Transactions component', () => {
  beforeEach(() => {
    summaryTransactions = mount(<Provider><SummaryTransactions /></Provider>)
  })

  describe('renders', () => {
    test('total quantity label', () => {
      expect(summaryTransactions.find('.total-quantity-label')).toHaveLength(1)
    })
    test('total quantity value', () => {
      expect(summaryTransactions.find('.total-quantity-value')).toHaveLength(1)
    })
    test('median tax label', () => {
      expect(summaryTransactions.find('.median-tax-label')).toHaveLength(1)
    })
    test('median tax value', () => {
      expect(summaryTransactions.find('.median-tax-value')).toHaveLength(1)
    })
    test('median price label', () => {
      expect(summaryTransactions.find('.median-price-label')).toHaveLength(1)
    })
    test('median price value', () => {
      expect(summaryTransactions.find('.median-price-value')).toHaveLength(1)
    })
  })

  describe('calculates summary', () => {
    test('for Total Quantity', () => {
      expect(summaryTransactions.find('.total-quantity-value').text()).toEqual(0)
    })
    test.skip('tools component', () => {
      expect(summaryTransactions.find('.median-tax-value').text()).toEqual(10)
    })
    test.skip('Transactions List component', () => {
      expect(summaryTransactions.find('.median-price-value').text()).toEqual(10)
    })  
  })
})
