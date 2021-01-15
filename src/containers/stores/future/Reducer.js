const isEqual = (transaction, payload) => transaction.id === payload.id

const updateTransaction = (transaction, payload) => {
  return isEqual(transaction, payload) ? payload : transaction
}

const Reducer = (state, {type, payload}) => {
  switch (type) {
    case 'SET':
      return {
        ...state,
        futureTransactions: payload
      }
    case 'ADD':
      return {
        ...state,
        futureTransactions: state.futureTransactions.concat(payload)
      }
    case 'UPDATE':
      const updatedTransactions = state.futureTransactions.map(transaction => updateTransaction(transaction, payload))
      return {
        ...state,
        futureTransactions: updatedTransactions
      }
    case 'REMOVE':
      return {
        ...state,
        futureTransactions: state.futureTransactions.filter(transaction => !isEqual(transaction, payload))
      }
    default:
      return state
  }
}

export default Reducer
