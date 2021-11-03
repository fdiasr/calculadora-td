import reducer from './Reducer'

const initialState = { id: null, viewer: '' }

describe('Viewer Reducer', () => {
  test('runs SUMMARY action type', () => {
    const state = reducer(initialState, { type: 'SUMMARY' })
    
    expect(state).toEqual({ viewer: 'summary', id: '' })
  })

  test('runs TRANSACTIONS action type', () => {
    const state = reducer(initialState, { type: 'TRANSACTIONS', payload: 'ID-01' })
    
    expect(state).toEqual({ viewer: 'transactions', id: 'ID-01' })
  })
})
