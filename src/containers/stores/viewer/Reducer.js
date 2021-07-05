const Reducer = (state, {type, payload}) => {
  switch (type) {
    case 'SUMMARY':
      return {
        ...state,
        viewer: 'summary',
        id: payload
      }
    case 'TRANSACTIONS':
      return {
        ...state,
        viewer: 'transactions',
        id: ''
      }
    default:
      return state
  }
}

export default Reducer
