const Reducer = (state, { type, payload }) => {
  let updatedStocks = null;

  let stocks = [ ...state.stocks ];

  switch (type) {
    case 'SET':
      return { ...state, stocks: [ ...payload ] }

    case 'CREATE':
      const foundStock = stocks.filter(item => item.key === payload.key);
      if (foundStock.length === 0) {
        const newStock = {
          key: payload.key,
          name: payload.name,
          transactions: []
        }
        stocks.push(newStock);
      }

      return { ...state, stocks: [ ...stocks ] }

    case 'ADD':
      const pushLambda = item => {
        if (item.key === payload.key) {
          item.transactions.push(payload.transaction);
        }
        return item;
      }
      updatedStocks = stocks.map(pushLambda)
      return { ...state, stocks: updatedStocks };

    case 'UPDATE':
      const updateStock = (item, updatedTransaction) => {
        const mapTransaction = transaction => transaction.id === updatedTransaction.id ? updatedTransaction : transaction
        return { ...item, transactions: item.transactions.map(mapTransaction) }
      };

      const mapStocks = item => item.key === payload.key ? updateStock(item, payload.transaction) : item
      updatedStocks = stocks.map(mapStocks);
      return { ...state, stocks: updatedStocks }

    case 'LOCK':
      // console.log(type, optionId, payload);
      // const lockTransactionLambda = transaction => isEqual(transaction, payload) ? { ...transaction, isLocked: !transaction.isLocked } : transaction;
      // const updatedLockedTransactions = {
        // ...state.transactions,
        // [optionId]: state.transactions[optionId].map(lockTransactionLambda)
      // }
      // return { ...state, transactions: updatedLockedTransactions }
      return state;

    case 'REMOVE':
      const removeTransaction = (stock, transactionId) => {
        return stock.transactions.filter(transaction => {
          return transaction.id !== String(transactionId)
        })
      }

      const mapStockToUpdate = item => {
        if (item.key !== payload.key) {
          return item
        }
        return { ...item, transactions: removeTransaction(item, payload.transactionId) }
      }

      updatedStocks = stocks.map(mapStockToUpdate);
      
      return { ...state, stocks: stocks.map(mapStockToUpdate) };

    default:
      return state;
  }
}

export default Reducer
