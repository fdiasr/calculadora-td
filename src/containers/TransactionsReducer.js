const defaultTransaction = { date: '2021-01-01', price: 0, tax: 0, fraction: 0 }

const TransactionsReducer = (state, action) => {
  switch (action.type) {
    case 'SET':
      return {
        ...state,
        transactions: action.payload
      }
    case 'ADD':
      return {
        ...state,
        transactions: state.transactions.concat(defaultTransaction)
      }
    case 'REMOVE':
      return {
        ...state,
        transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
      }
    default:
      return state
  }
}

export default TransactionsReducer
