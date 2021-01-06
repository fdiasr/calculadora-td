import React from 'react'
import { shallow } from 'enzyme'

import Transaction from './Transaction'

let transaction = null
const defaultValues = { id: 'hash-001', date: '2021-01-01', price: 2802.40, tax: 2.56, fraction: 0.18 }
const changeCallback = jest.fn()

describe('Transaction component', () => {
  beforeEach(() => {
    const props = { ...defaultValues, changeCallback }
    transaction = shallow(<Transaction { ...props } />)
    changeCallback.mockReset()
  })

  describe('renders with defined props value', () => {
    test('date element', () => {
      expect(transaction.find('.input_date').get(0).props.value).toBe('2021-01-01')
    })

    test('price element', () => {
      expect(transaction.find('.input_price').get(0).props.value).toBe(2802.40)
    })

    test('tax element', () => {
      expect(transaction.find('.input_tax').get(0).props.value).toBe(2.56)
    })

    test('fraction element', () => {

      expect(transaction.find('.input_fraction').get(0).props.value).toBe(0.18)
    })

    test('fraction tax element', () => {
      expect(transaction.find('.input_fraction_tax').get(0).props.value).toBe(0.460800)
    })

    test('fraction price element', () => {
      expect(transaction.find('.input_fraction_price').get(0).props.value).toBe(504.432000)
    })
  })

  describe('renders for read only', () => {
    test('fraction tax element', () => {
      expect(transaction.find('.input_fraction_tax').prop('readOnly')).toBeTruthy()
    })

    test('fraction price element', () => {
      expect(transaction.find('.input_fraction_price').prop('readOnly')).toBeTruthy()
    })
  })

  describe('handles with inputs onChange event', () => {
    test('executes callback with new values', () => {
      transaction.find('.input_price').simulate('change', { target: { name: 'price', value: 2789.10 } })

      const updatedValues = { ...defaultValues, price: 2789.10 }
      expect(changeCallback).toBeCalledWith(updatedValues)
    })
  })
})
