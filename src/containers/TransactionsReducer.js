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
        transactions: state.transactions.concat(action.payload)
      }
    case 'REMOVE':
      return {
        ...state,
        transactions: state.transactions.filter(transaction => transaction.id !== action.payload.id)
      }
    default:
      return state
  }
}

export default TransactionsReducer
