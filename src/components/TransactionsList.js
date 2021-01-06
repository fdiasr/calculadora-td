import PropTypes from 'prop-types'

import TransactionsHeader from './TransactionsHeader'
import Transaction from './Transaction'

const buildTransaction = (transaction, removeCallback) => {
  return (
    <li key={transaction.id}>
      <Transaction {...transaction} />
      <button className='removeTransaction' onClick={() => removeCallback(transaction.id)}>Remover</button>
    </li>
  )
}

const buildList = (transactions, removeCallback) => {
  return (
    <ul>
      { transactions.map(transaction => buildTransaction(transaction, removeCallback)) }
    </ul>
  )
}

const TransactionsList = ({ transactions, addCallback, removeCallback }) => {
  return (
    <div>
      <TransactionsHeader />
      {buildList(transactions, removeCallback)}
      <button className='addTransaction' onClick={addCallback}>Adicionar</button>
    </div>
  )
}

TransactionsList.propTypes = {
  transactions: PropTypes.array.isRequired,
  addCallback: PropTypes.func.isRequired,
  removeCallback: PropTypes.func.isRequired
}

export default TransactionsList
