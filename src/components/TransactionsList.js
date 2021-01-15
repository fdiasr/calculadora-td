import PropTypes from 'prop-types'
import IconButton from '@material-ui/core/IconButton';
import AddBoxIcon from '@material-ui/icons/AddBox';
import DeleteIcon from '@material-ui/icons/Delete';

import TransactionsHeader from './TransactionsHeader'
import Transaction from './Transaction'

const buildTransaction = (transaction, removeCallback, changeCallback, isFutureTransaction) => {
  return (
    <div data-transaction-id={transaction.id} key={transaction.id} className="transaction-item" >
      <div className="transaction-item-actions">
        {/* <button className='transaction-item-remove' onClick={() => removeCallback(transaction.id)}>Remover</button> */}
        <IconButton aria-label="Delete" className='transaction-item-remove' onClick={() => removeCallback(transaction.id)} >
          <DeleteIcon />
        </IconButton>

      </div>
      <Transaction {...transaction} changeCallback={changeCallback} isFutureTransaction={isFutureTransaction} />
    </div>
  )
}

const TransactionsList = ({ transactions, addCallback, removeCallback, changeCallback, isFutureTransaction }) => {
  return (
    <div>
      <TransactionsHeader />
      { transactions.map(transaction => buildTransaction(transaction, removeCallback, changeCallback, isFutureTransaction)) }
      {/* <button className='addTransaction' onClick={addCallback}>Adicionar</button> */}
      <div className="transactions-bottom">
        <IconButton aria-label="Adicionar" className="transaction-item-add" onClick={addCallback} >
          <AddBoxIcon />
        </IconButton>
      </div>

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
