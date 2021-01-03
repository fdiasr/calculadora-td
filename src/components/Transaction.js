import PropTypes from 'prop-types'

const Transaction = ({ date, price, tax, fraction }) => {
  return (
    <div>
      <input className='date' value={date} />
      <input className='price' value={price} />
      <input className='tax' value={tax} />
      <input className='fraction' value={fraction} />
      <input className='fraction_tax' value={fraction * tax} readOnly />
      <input className='fraction_price' value={fraction * price} readOnly />
    </div>
  )
}

Transaction.propTypes = {
  date: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  tax: PropTypes.number.isRequired,
  fraction: PropTypes.number.isRequired
}

export default Transaction
