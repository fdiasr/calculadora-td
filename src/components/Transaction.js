import PropTypes from 'prop-types'
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';

const Transaction = ({ id, date, tax, price, quantity, isLocked, changeCallback }) => {

  const getCurrentValues = () =>  ({ id, date, tax, price, quantity, isLocked })

  const handleOnChange = event => {
    const attribute = event.target.id
    const newValue = attribute === 'date' ? event.target.value : parseFloat(event.target.value)
    changeCallback({ ...getCurrentValues(), [attribute]: newValue })
  }

  return (
    <div data-id={`transactionId-${id}`} className="transaction-item-data">
      <div className="transaction-item-date">
        <TextField
          id="date"
          type="date"
          name="date"
          value={date}
          onChange={handleOnChange}
          disabled={isLocked}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <div className="transaction-item-price">
        <Input id='price' type="number" className='input_price' onChange={handleOnChange} value={price} readOnly={isLocked} />
      </div>
      <div className="transaction-item-tax">
        <Input id='tax' type="number" className='input_tax' onChange={handleOnChange} value={tax} readOnly={isLocked} />
      </div>
      <div className="transaction-item-quantity">
        <Input id='quantity' type="number" className='input_quantity' onChange={handleOnChange} value={quantity} readOnly={isLocked} />
      </div>
      <div className="transaction-item-fraction-tax">
        <Input id='fraction_tax' type="number" className='input_fraction_tax' value={quantity * tax} readOnly />
      </div>
      <div className="transaction-item-fraction-price">
        <Input id='fraction_price' type="number" className='input_fraction_price' value={quantity * price} readOnly />
      </div>
    </div>
  )
}

Transaction.propTypes = {
  date: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  tax: PropTypes.number.isRequired,
  // fraction: PropTypes.number.isRequired,
  isLocked: PropTypes.bool.isRequired,
  changeCallback: PropTypes.func.isRequired
}

export default Transaction
