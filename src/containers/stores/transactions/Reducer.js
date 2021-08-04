const isEqual = (transaction, payload) => transaction.id === payload.id

const updateTransaction = (transaction, payload) => {
  return isEqual(transaction, payload) ? payload : transaction
}

const Reducer = (state, { type, optionId, payload }) => {
  switch (type) {
    case 'SET':
      console.log(' set ');
      console.log(payload);
      return {
        ...state,
        transactions: payload
      }

    case 'ADD':
      console.log(type, optionId, payload);
      console.log(state.transactions);
      const addedTransactions = {
        ...state.transactions,
        [optionId]: [ ...state.transactions[optionId], payload ]
      }
      console.log(addedTransactions);
      return { ...state, transactions: addedTransactions }

    case 'UPDATE':
      console.log(type, optionId, payload);
      const updateTransactionLambda = transaction => updateTransaction(transaction, payload);
      const updatedTransactions = {
        ...state.transactions,
        [optionId]: state.transactions[optionId].map(updateTransactionLambda)
      }
      return { ...state, transactions: updatedTransactions }

    case 'LOCK':
      console.log(type, optionId, payload);
      const lockTransactionLambda = transaction => isEqual(transaction, payload) ? { ...transaction, isLocked: !transaction.isLocked } : transaction;
      const updatedLockedTransactions = {
        ...state.transactions,
        [optionId]: state.transactions[optionId].map(lockTransactionLambda)
      }
      return { ...state, transactions: updatedLockedTransactions }

    case 'REMOVE':
      console.log(' remove ');
      const removedTransactions = {
        ...state.transactions,
        [optionId]: state.transactions[optionId].filter(transaction => !isEqual(transaction, payload))
      }
      return { ...state, transactions: removedTransactions }

    default:
      console.log(' default ');
      return state
  }
}

export default Reducer
