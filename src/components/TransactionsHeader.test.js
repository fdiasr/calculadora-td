import React from 'react'
import { shallow } from 'enzyme'

import TransactionsHeader from './TransactionsHeader'

describe('Transactions Header component', () => {
  test('renders with appropriate title lenght', () => {
    const header = shallow(<TransactionsHeader />)
    expect(header.find('.title')).toHaveLength(6)
  })
})
