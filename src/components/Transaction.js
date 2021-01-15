import PropTypes from 'prop-types'
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';

const Transaction = ({ id, date, price, tax, fraction, changeCallback, isFutureTransaction }) => {

  const getValues = () =>  ({ id, date, price, tax, fraction })

  const handleOnChange = event => {
    const key = event.target.name
    const value = event.target.value
    changeCallback({ ...getValues(), [key]: value })
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
          disabled={isFutureTransaction}
          InputLabelProps={{
            shrink: true,
          }}

        />
      </div>
      <div className="transaction-item-price">
        <Input id='price' className='input_price' onChange={handleOnChange} value={price} readOnly={isFutureTransaction} />
      </div>
      <div className="transaction-item-tax">
        <Input id='tax' className='input_tax' onChange={handleOnChange} value={tax} />
      </div>
      <div className="transaction-item-fraction">
        <Input id='fraction' className='input_fraction' onChange={handleOnChange} value={fraction} />
      </div>
      <div className="transaction-item-fraction-tax">
        <Input id='fraction_tax' className='input_fraction_tax' value={fraction * tax} readOnly />
      </div>
      <div className="transaction-item-fraction-price">
        <Input id='fraction_price' className='input_fraction_price' value={fraction * price} readOnly />
      </div>
    </div>
  )
}

Transaction.propTypes = {
  date: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  tax: PropTypes.number.isRequired,
  fraction: PropTypes.number.isRequired,
  changeCallback: PropTypes.func.isRequired
}

export default Transaction
