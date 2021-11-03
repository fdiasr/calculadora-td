import React from 'react'
import { mount } from 'enzyme'
import { DataGrid } from "@material-ui/data-grid";

import { ViewerProvider, StocksProvider } from './stores'

import SummaryTransactions from './SummaryTransactions'

import { ipca26bradesco } from '../data'

let summaryTransactions = null

describe('Summary Transactions component', () => {
  beforeEach(() => {
    summaryTransactions = mount(
      <ViewerProvider>
        <StocksProvider initialState={{ stocks: [ ipca26bradesco ] }}>
          <SummaryTransactions />
        </StocksProvider>
      </ViewerProvider>
    )
  })

  describe('summary', () => {
    test('validates summary table', () => {
      // ADD DATA VALIDATION IF POSSIBLE
      expect(summaryTransactions.find(DataGrid)).toHaveLength(1)
    })
  })
})
