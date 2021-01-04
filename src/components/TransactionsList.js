import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'

import TransactionsHeader from './TransactionsHeader'
import Transaction from './Transaction'

const buildTransaction = (transaction, removeCallback) => {
  return (
    <li key={uuidv4()}>
      <Transaction {...transaction} />
      <button className='removeTransaction' onClick={removeCallback}>Remover</button>
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
