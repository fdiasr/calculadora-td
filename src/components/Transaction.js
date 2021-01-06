import PropTypes from 'prop-types'

const Transaction = ({ id, date, price, tax, fraction, changeCallback }) => {

  const getValues = () =>  ({ id, date, price, tax, fraction })

  const handleOnChange = event => {
    const key = event.target.name
    const value = event.target.value
    changeCallback({ ...getValues(), [key]: value })
  }

  return (
    <div>
      <input name='date' className='input_date' onChange={handleOnChange} value={date} />
      <input name='price' className='input_price' onChange={handleOnChange} value={price} />
      <input name='tax' className='input_tax' onChange={handleOnChange} value={tax} />
      <input name='fraction' className='input_fraction' onChange={handleOnChange} value={fraction} />
      <input name='fraction_tax' className='input_fraction_tax' onChange={handleOnChange} value={fraction * tax} readOnly />
      <input name='fraction_price' className='input_fraction_price' onChange={handleOnChange} value={fraction * price} readOnly />
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
