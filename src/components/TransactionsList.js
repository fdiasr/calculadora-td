import PropTypes from 'prop-types'

import TransactionsHeader from './TransactionsHeader'
import Transaction from './Transaction'

const buildTransaction = (transaction, removeCallback, changeCallback) => {
  return (
    <li data-transaction-id={transaction.id} key={transaction.id}>
      <Transaction {...transaction} changeCallback={changeCallback} />
      <button className='removeTransaction' onClick={() => removeCallback(transaction.id)}>Remover</button>
    </li>
  )
}

const TransactionsList = ({ transactions, addCallback, removeCallback, changeCallback }) => {
  return (
    <div>
      <TransactionsHeader />
      <ul>
        { transactions.map(transaction => buildTransaction(transaction, removeCallback, changeCallback)) }
      </ul>
      <button className='addTransaction' onClick={addCallback}>Adicionar</button>
    </div>
  )
}

TransactionsList.propTypes = {
  transactions: PropTypes.array.isRequired,
  addCallback: PropTypes.func.isRequired,
  removeCallback: PropTypes.func.isRequired,
  changeCallback: PropTypes.func.isRequired
}

export default TransactionsList
