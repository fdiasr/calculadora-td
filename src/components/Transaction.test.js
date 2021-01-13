import React from 'react'
import { mount } from 'enzyme'

import Transaction from './Transaction'

let transaction = null
const defaultValues = { id: 'hash-001', date: '2021-01-01', price: 2802.40, tax: 2.56, fraction: 0.18 }
const changeCallback = jest.fn()

describe('Transaction component', () => {
  beforeEach(() => {
    const props = { ...defaultValues, changeCallback }
    transaction = mount(<Transaction { ...props } />)
    changeCallback.mockReset()
  })

  const getInputFrom = element => transaction.find(element).find('input')

  describe('renders with defined props value', () => {
    test('date element', () => {
      const inputValue = getInputFrom('.transaction-item-date').get(0).props.value
      expect(inputValue).toBe('2021-01-01')
    })

    test('price element', () => {
      const inputValue = getInputFrom('.transaction-item-price').get(0).props.value
      expect(inputValue).toBe(2802.40)
    })

    test('tax element', () => {
      const inputValue = getInputFrom('.transaction-item-tax').get(0).props.value
      expect(inputValue).toBe(2.56)
    })

    test('fraction element', () => {
      const inputValue = getInputFrom('.transaction-item-fraction').get(0).props.value
      expect(inputValue).toBe(0.18)
    })

    test('fraction tax element', () => {
      const inputValue = getInputFrom('.transaction-item-fraction-tax').get(0).props.value
      expect(inputValue).toBe(0.460800)
    })

    test('fraction price element', () => {
      const inputValue = getInputFrom('.transaction-item-fraction-price').get(0).props.value
      expect(inputValue).toBe(504.432000)
    })
  })

  describe('renders for read only', () => {
    test('fraction tax element', () => {
      const inputIsReadOnly = getInputFrom('.transaction-item-fraction-tax').get(0).props.readOnly
      expect(inputIsReadOnly).toBeTruthy()
    })

    test('fraction price element', () => {
      const inputIsReadOnly = getInputFrom('.transaction-item-fraction-price').get(0).props.readOnly
      expect(inputIsReadOnly).toBeTruthy()
    })
  })

  describe('handles with inputs onChange event', () => {
    test('executes callback with new values', () => {
      const input = getInputFrom('.transaction-item-price').at(0)
      input.simulate('change', { target: { name: 'price', value: 2789.10 } })

      const updatedValues = { ...defaultValues, price: 2789.10 }
      expect(changeCallback).toBeCalledWith(updatedValues)
    })
  })
})
