const TransactionsHeader = () => {
  return (
    <div className="transactions-header">
      <div className='transactions-header-actions'>[]</div>
      <div className='transactions-header-data'>
        <div className='transactions-header-date'>Data</div>
        <div className='transactions-header-price'>Preço da Compra</div>
        <div className='transactions-header-tax'>Taxa da Compra</div>
        <div className='transactions-header-fraction'>Fração</div>
        <div className='transactions-header-fraction-tax'>% Fração</div>
        <div className='transactions-header-fraction-price'>Valor Fração</div>
      </div>
    </div>
  )
}

export default TransactionsHeader
