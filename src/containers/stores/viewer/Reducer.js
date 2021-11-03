const Reducer = (state, {type, payload}) => {
  switch (type) {
    case 'SUMMARY':
      return {
        ...state,
        viewer: 'summary',
        id: ''
      }
    case 'TRANSACTIONS':
      return {
        ...state,
        viewer: 'transactions',
        id: payload
      }
    default:
      return state
  }
}

export default Reducer
