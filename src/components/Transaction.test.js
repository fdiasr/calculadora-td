import React from 'react'
import { shallow } from 'enzyme'

import Transaction from './Transaction'

let transaction = null

describe('Transaction component', () => {
  describe('renders with defined props value', () => {
    beforeAll(() => {
      const props = { date: '2021-01-01', price: 2802.40, tax: 2.56, fraction: 0.18 }
      transaction = shallow(<Transaction { ...props } />)
    })
    test('date element', () => {
      expect(transaction.find('.date').get(0).props.value).toBe('2021-01-01')
    })
    test('price element', () => {
      expect(transaction.find('.price').get(0).props.value).toBe(2802.40)
    })
    test('tax element', () => {
      expect(transaction.find('.tax').get(0).props.value).toBe(2.56)
    })
    test('fraction element', () => {

      expect(transaction.find('.fraction').get(0).props.value).toBe(0.18)
    })
    test('fraction tax element', () => {
      expect(transaction.find('.fraction_tax').get(0).props.value).toBe(0.460800)
      expect(transaction.find('.fraction_tax').prop('readOnly')).toBeTruthy()
    })
    test('fraction price element', () => {
      expect(transaction.find('.fraction_price').get(0).props.value).toBe(504.432000)
      expect(transaction.find('.fraction_price').prop('readOnly')).toBeTruthy()
    })
  })

  describe('renders for read only', () => {
    beforeAll(() => {
      const props = { date: '2021-01-01', price: 2802.40, tax: 2.56, fraction: 0.18 }
      transaction = shallow(<Transaction { ...props } />)
    })
    test('fraction tax element', () => {
      expect(transaction.find('.fraction_tax').prop('readOnly')).toBeTruthy()
    })
    test('fraction price element', () => {
      expect(transaction.find('.fraction_price').prop('readOnly')).toBeTruthy()
    })
  })
})
