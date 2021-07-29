import PropTypes from 'prop-types'
import IconButton from '@material-ui/core/IconButton';
import AddBoxIcon from '@material-ui/icons/AddBox';
import DeleteIcon from '@material-ui/icons/Delete';
import UnlockIcon from '@material-ui/icons/LockOpen';
import LockIcon from '@material-ui/icons/Lock';

import TransactionsHeader from './TransactionsHeader'
import Transaction from './Transaction'

const transactionRow = (transaction, removeCallback, lockCallback, changeCallback) => {
  const lockToggleButton = transaction.isLocked ? <LockIcon /> : <UnlockIcon />;
  return (
    <div data-transaction-id={transaction.id} key={transaction.id} className="transaction-item" >
      <div className="transaction-item-actions">
        <IconButton aria-label="Delete" className='transaction-item-remove' onClick={() => removeCallback(transaction.id)} >
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="Lock" className='transaction-item-lock' onClick={() => lockCallback(transaction.id)} >
          {lockToggleButton}
        </IconButton>
      </div>
      <Transaction {...transaction} changeCallback={changeCallback} isLocked={transaction.isLocked} />
    </div>
  )
}

const TransactionsList = ({ transactions, addCallback, removeCallback, lockCallback, changeCallback }) => {
  return (
    <div>
      <TransactionsHeader />
      { transactions.map(transaction => transactionRow(transaction, removeCallback, lockCallback, changeCallback)) }
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
