const initialState = {
  applications: [],
  application: {
    id: '',
    name: '',
    information: '',
    total_users: 0,
    founder: '',
    date_founded: ''
  }
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'FETCH':
      return { ...state, applications: payload }
    case 'FETCH_ONE':
      return { ...state, application: payload }
    case 'CREATE':
      return { ...state, applications: state.applications.concat(payload) }
    case 'UPDATE':
      const newDataUpdated = state.applications.map(el => {
        if (el.id === payload.id) el = payload
        return el
      })
      return { ...state, applications: newDataUpdated }
    case 'DELETE':
      const newDataDeleted = state.applications.filter(el => {
        return el.id !== payload.id
      })
      return { ...state, applications: newDataDeleted }

    default:
      return state
  }
}
