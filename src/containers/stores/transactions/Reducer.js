const isEqual = (transaction, payload) => transaction.id === payload.id

const updateTransaction = (transaction, payload) => {
  return isEqual(transaction, payload) ? payload : transaction
}

const Reducer = (state, {type, payload}) => {
  switch (type) {
    case 'SET':
      return {
        ...state,
        transactions: payload
      }
    case 'ADD':
      return {
        ...state,
        transactions: state.transactions.concat(payload)
      }
    case 'UPDATE':
      const updatedTransactions = state.transactions.map(transaction => updateTransaction(transaction, payload))
      return {
        ...state,
        transactions: updatedTransactions
      }
    case 'REMOVE':
      return {
        ...state,
        transactions: state.transactions.filter(transaction => !isEqual(transaction, payload))
      }
    default:
      return state
  }
}

export default Reducer
