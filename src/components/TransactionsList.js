import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'

import TransactionsHeader from './TransactionsHeader'
import Transaction from './Transaction'

const buildTransaction = transaction => {
  return (
    <li key={uuidv4()}>
      <Transaction {...transaction} />
      <button className='removeTransaction' onClick={() => console.log('remove')}>Remover</button>
    </li>
  )
}

const buildList = transactions => {
  return (
    <ul>
      { transactions.map(transaction => buildTransaction(transaction)) }
    </ul>
  )
}

const TransactionsList = ({ transactions }) => {
  return (
    <div>
      <TransactionsHeader />
      {buildList(transactions)}
      <button className='addTransaction' onClick={() => console.log('add')}>Adicionar</button>
    </div>
  )
}

TransactionsList.propTypes = {
  transactions: PropTypes.array.isRequired
}

export default TransactionsList
