const TransactionsHeader = () => {
  return (
    <div className="transactions-header">
      <div className='transactions-header-actions'>&nbsp;</div>
      <div className='transactions-header-data'>
        <div className='transactions-header-date'>Data</div>
        <div className='transactions-header-price'>Compra Valor</div>
        <div className='transactions-header-tax'>Compra Tx</div>
        <div className='transactions-header-fraction'>Fração</div>
        <div className='transactions-header-fraction-tax'>Fração %</div>
        <div className='transactions-header-fraction-price'>Fração Valor</div>
      </div>
    </div>
  )
}

export default TransactionsHeader
