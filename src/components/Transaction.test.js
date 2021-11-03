import React from 'react'
import { mount } from 'enzyme'

import Transaction from './Transaction'

let transaction = null

const defaultValues = {
  id: 'hash-001',
  date: '2021-01-01',
  price: 2802.40,
  tax: 2.56,
  quantity: 0.18,
}

const changeCallback = jest.fn()

describe('Transaction component', () => {

  const getInputFrom = element => transaction.find(element).find('input')

  describe('renders Transaction', () => {
    beforeEach(() => {
      const props = { ...defaultValues, isLocked: true, changeCallback }
      transaction = mount(<Transaction { ...props } />)
      changeCallback.mockReset()
    })
  
    test('with date element value', () => {
      const inputValue = getInputFrom('.transaction-item-date').get(0).props.value
      expect(inputValue).toBe('2021-01-01')
    })

    test('with price element value', () => {
      const inputValue = getInputFrom('.transaction-item-price').get(0).props.value
      expect(inputValue).toBe(2802.40)
    })

    test('tax element value', () => {
      const inputValue = getInputFrom('.transaction-item-tax').get(0).props.value
      expect(inputValue).toBe(2.56)
    })

    test('quantity element value', () => {
      const inputValue = getInputFrom('.transaction-item-quantity').get(0).props.value
      expect(inputValue).toBe(0.18)
    })

    test('fraction tax element value', () => {
      const inputValue = getInputFrom('.transaction-item-fraction-tax').get(0).props.value
      expect(inputValue).toBe(0.460800)
    })

    test('fraction price element value', () => {
      const inputValue = getInputFrom('.transaction-item-fraction-price').get(0).props.value
      expect(inputValue).toBe(504.432000)
    })
  })

  describe('renders with isLocked On', () => {
    beforeEach(() => {
      const props = { ...defaultValues, isLocked: true, changeCallback }
      transaction = mount(<Transaction { ...props } />)
      changeCallback.mockReset()
    })

    test('date element', () => {
      const inputIsReadOnly = getInputFrom('.transaction-item-date').get(0).props.disabled
      expect(inputIsReadOnly).toBeTruthy()
    })

    test('price element', () => {
      const inputIsReadOnly = getInputFrom('.transaction-item-price').get(0).props.readOnly
      expect(inputIsReadOnly).toBeTruthy()
    })

    test('tax element', () => {
      const inputIsReadOnly = getInputFrom('.transaction-item-tax').get(0).props.readOnly
      expect(inputIsReadOnly).toBeTruthy()
    })

    test('quantity element', () => {
      const inputIsReadOnly = getInputFrom('.transaction-item-quantity').get(0).props.readOnly
      expect(inputIsReadOnly).toBeTruthy()
    })

    test('fraction tax element', () => {
      const inputIsReadOnly = getInputFrom('.transaction-item-fraction-tax').get(0).props.readOnly
      expect(inputIsReadOnly).toBeTruthy()
    })

    test('fraction price element', () => {
      const inputIsReadOnly = getInputFrom('.transaction-item-fraction-price').get(0).props.readOnly
      expect(inputIsReadOnly).toBeTruthy()
    })
  })

  describe('renders with isLocked OFF', () => {
    beforeEach(() => {
      const props = { ...defaultValues, isLocked: false, changeCallback }
      transaction = mount(<Transaction { ...props } />)
      changeCallback.mockReset()
    })

    test('date element', () => {
      const inputIsReadOnly = getInputFrom('.transaction-item-date').get(0).props.disabled
      expect(inputIsReadOnly).toBeFalsy()
    })

    test('price element', () => {
      const inputIsReadOnly = getInputFrom('.transaction-item-price').get(0).props.readOnly
      expect(inputIsReadOnly).toBeFalsy()
    })

    test('tax element', () => {
      const inputIsReadOnly = getInputFrom('.transaction-item-tax').get(0).props.readOnly
      expect(inputIsReadOnly).toBeFalsy()
    })

    test('quantity element', () => {
      const inputIsReadOnly = getInputFrom('.transaction-item-quantity').get(0).props.readOnly
      expect(inputIsReadOnly).toBeFalsy()
    })

    test('fraction tax element keeps locked', () => {
      const inputIsReadOnly = getInputFrom('.transaction-item-fraction-tax').get(0).props.readOnly
      expect(inputIsReadOnly).toBeTruthy()
    })

    test('fraction price element keeps locked', () => {
      const inputIsReadOnly = getInputFrom('.transaction-item-fraction-price').get(0).props.readOnly
      expect(inputIsReadOnly).toBeTruthy()
    })
  })

  describe('handles with inputs onChange event', () => {
    beforeEach(() => {
      const props = { ...defaultValues, isLocked: false, changeCallback }
      transaction = mount(<Transaction { ...props } />)
      changeCallback.mockReset()
    })

    test('executes callback with new values', () => {
      const input = getInputFrom('.transaction-item-price').at(0)
      input.simulate('change', { target: { id: 'price', value: 2789.10 } })

      const updatedValues = { ...defaultValues, price: 2789.10, isLocked: false }
      expect(changeCallback).toBeCalledWith(updatedValues)
    })
  })
})
