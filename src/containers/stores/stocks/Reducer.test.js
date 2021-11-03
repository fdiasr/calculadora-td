import reducer from './Reducer'

import { ipca26bradesco as fullyStock } from '../../../../mock/index'

// TODO move it to be imported into real code
const initialState = { type: null, stocks: [] };

describe('Stocks Reducer', () => {

  test('runs SET action to define all stock list from sratch', () => {
    const stockList = [ fullyStock ];
    
    const state = reducer(initialState, { type: 'SET', payload: stockList })
    
    expect(state.stocks).toEqual(stockList)
  })

  test('runs CREATE action to create a new stock', () => {
    const payload = { key: fullyStock.key, name: fullyStock.name };
    
    const state = reducer(initialState, { type: 'CREATE', payload });
    
    const expectedStocks = [ { key: fullyStock.key, name: fullyStock.name, transactions: [] } ];
    expect(state.stocks).toEqual(expectedStocks);
  })

  test('skip CREATE action when stock already exists', () => {
    const stockList = [ fullyStock ];
    const firstState = reducer(initialState, { type: 'SET', payload: stockList })

    const newStock = { key: 'ipca26-brad', name: 'IPCA+26 Bradesco' };
    const state = reducer(firstState, { type: 'CREATE', payload: newStock });
    
    expect(state).toEqual(firstState)
  })

  test('runs ADD action to add new transaction to a stock', () => {
    const emptyStock = { ...fullyStock, transactions: [] };
    const state = { type: null, stocks: [ emptyStock ] }

    const firstPayload = { key: fullyStock.key, transaction: fullyStock.transactions[0] };
    const firstState = reducer(state, { type: 'ADD', payload: firstPayload } );    
    const secondPayload = { key: fullyStock.key, transaction: fullyStock.transactions[1] };
    const secondState = reducer(firstState, { type: 'ADD', payload: secondPayload } );

    const expectedStocks = [ { ...fullyStock, transactions: [ fullyStock.transactions[0], fullyStock.transactions[1] ] } ];
    expect(secondState.stocks).toEqual(expectedStocks)
  })

  test('runs REMOVE action to remove transaction from a stock', () => {
    const firstState = reducer(initialState, { type: 'SET', payload: [ fullyStock ] });
    
    const payload = { key: 'ipca26-brad', transactionId: '5' };
    const state = reducer(firstState, { type: 'REMOVE', payload });
    
    expect(state.stocks[0].transactions).toHaveLength(8);
  })

  test('runs UPDATE action', () => {
    const firstState = reducer(initialState, { type: 'SET', payload: [ fullyStock ] })

    const updatedTransaction = { ...fullyStock.transactions[6], price: 2854.16, tax: 2.61 }
    const payload = { key: fullyStock.key, transaction: updatedTransaction };
    const state = reducer(firstState, { type: 'UPDATE', payload })

    const expectedTransactions = fullyStock.transactions.map(item => ({ ...item }))
    expectedTransactions[6]['price'] = 2854.16
    expectedTransactions[6]['tax'] = 2.61
    expect(state.stocks[0].transactions).toEqual(expectedTransactions)
  })

  test('runs DEFAULT action using undefined action', () => {
    const firstState = reducer(initialState, { type: 'SET', payload: [ fullyStock ] });
    
    const state = reducer(firstState, { type: 'unknown' })
    
    expect(state.stocks).toEqual([ fullyStock ])
  })
})
