import React from 'react'
import { shallow } from 'enzyme'

import TransactionsHeader from './TransactionsHeader'

describe('Transactions Header component', () => {
  test('renders columns for actions', () => {
    const header = shallow(<TransactionsHeader />)
    expect(header.find('.transactions-header-actions')).toHaveLength(1)
  })
  test('renders container for actions', () => {
    const header = shallow(<TransactionsHeader />)
    expect(header.find('.transactions-header-actions')).toHaveLength(1)
  })
  test('renders container for data headers', () => {
    const header = shallow(<TransactionsHeader />)
    expect(header.find('.transactions-header-actions')).toHaveLength(1)
  })
  test('renders columns for date', () => {
    const header = shallow(<TransactionsHeader />)
    expect(header.find('.transactions-header-date')).toHaveLength(1)
  })
  test('renders columns for price', () => {
    const header = shallow(<TransactionsHeader />)
    expect(header.find('.transactions-header-price')).toHaveLength(1)
  })
  test('renders columns for tax', () => {
    const header = shallow(<TransactionsHeader />)
    expect(header.find('.transactions-header-tax')).toHaveLength(1)
  })
  test('renders columns for fraction', () => {
    const header = shallow(<TransactionsHeader />)
    expect(header.find('.transactions-header-fraction')).toHaveLength(1)
  })
  test('renders columns for fraction tax', () => {
    const header = shallow(<TransactionsHeader />)
    expect(header.find('.transactions-header-fraction-tax')).toHaveLength(1)
  })
  test('renders columns for fraction price', () => {
    const header = shallow(<TransactionsHeader />)
    expect(header.find('.transactions-header-fraction-price')).toHaveLength(1)
  })
})
