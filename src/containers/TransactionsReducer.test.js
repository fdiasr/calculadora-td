import reducer from './TransactionsReducer'

import data from '../calculator/mockData'

// TODO move it to be imported into real code
const initialState = { transactions: [] }

describe('Transactions Reducer', () => {
  test('runs SET action type', () => {
    const state = reducer(initialState, { type: 'SET', payload: data })
    
    expect(state.transactions).toEqual(data)
  })

  test('runs ADD action type', () => {
    const firstState = reducer(initialState, { type: 'ADD', payload: data[0] })
    
    const finalState = reducer(firstState, { type: 'ADD', payload: data[1] })
    
    const expectedTransactions = [ data[0], data[1] ]
    expect(finalState.transactions).toEqual(expectedTransactions)
  })

  test('runs REMOVE action type', () => {
    const firstState = reducer(initialState, { type: 'SET', payload: data })
    
    const state = reducer(firstState, { type: 'REMOVE', payload: { id: 'hash-001' } })
    
    expect(state.transactions).toHaveLength(10)
  })

  test('runs DEFAULt action using undefined action type', () => {
    const firstState = reducer(initialState, { type: 'ADD', payload: data[0] })
    
    const state = reducer(firstState, { type: 'unknown' })
    
    expect(state.transactions).toHaveLength(1)
  })
})
