import reducer from './Reducer'

import data from '../../../calculator/mockData'

// TODO move it to be imported into real code
const initialState = { type: null, futureTransactions: [] }

describe('Transactions Reducer', () => {
  test('runs SET action type', () => {
    const state = reducer(initialState, { type: 'SET', payload: data })
    
    expect(state.futureTransactions).toEqual(data)
  })

  test('runs ADD action type', () => {
    const firstState = reducer(initialState, { type: 'ADD', payload: data[0] })
    
    const finalState = reducer(firstState, { type: 'ADD', payload: data[1] })
    
    const expectedTransactions = [ data[0], data[1] ]
    expect(finalState.futureTransactions).toEqual(expectedTransactions)
  })

  test('runs REMOVE action type', () => {
    const firstState = reducer(initialState, { type: 'SET', payload: data })
    
    const state = reducer(firstState, { type: 'REMOVE', payload: { id: 'hash-001' } })
    
    expect(state.futureTransactions).toHaveLength(10)
  })

  test('runs UPDATE action type', () => {
    const firstState = reducer(initialState, { type: 'SET', payload: data })

    const updatedTransaction = { ...data[6], price: 2854.16, tax: 2.61 }
    const state = reducer(firstState, { type: 'UPDATE', payload: updatedTransaction })

    const expectedTransactions = data.map(item => ({ ...item }))
    expectedTransactions[6]['price'] = 2854.16
    expectedTransactions[6]['tax'] = 2.61
    expect(state.futureTransactions).toEqual(expectedTransactions)
  })

  test('runs DEFAULt action using undefined action type', () => {
    const firstState = reducer(initialState, { type: 'ADD', payload: data[0] })
    
    const state = reducer(firstState, { type: 'unknown' })
    
    expect(state.futureTransactions).toHaveLength(1)
  })
})
