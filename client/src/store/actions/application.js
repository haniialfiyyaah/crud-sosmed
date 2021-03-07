export const fetchAll = () => {
  return async dispatch => {
    try {
      const response = await fetch('http://localhost:3000/api/aplikasi')
      const data = await response.json()
      dispatch({
        type: 'FETCH',
        payload: data
      })
    } catch (err) {
      console.log(err)
    }
  }
}

export const fetchOne = id => {
  return async dispatch => {
    try {
      const response = await fetch('http://localhost:3000/api/aplikasi/' + id)
      const data = await response.json()
      dispatch({
        type: 'FETCH_ONE',
        payload: data
      })
    } catch (err) {
      console.log(err)
    }
  }
}

export const insertData = newData => {
  return async dispatch => {
    try {
      const response = await fetch('http://localhost:3000/api/aplikasi', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newData) // body data type must match "Content-Type" header
      })
      const data = await response.json()
      dispatch({
        type: 'CREATE',
        payload: data
      })
    } catch (err) {
      console.log(err)
    }
  }
}

export const updateData = (id, newData) => {
  return async dispatch => {
    try {
      const response = await fetch('http://localhost:3000/api/aplikasi/' + id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newData) // body data type must match "Content-Type" header
      })
      const data = await response.json()
      dispatch({
        type: 'UPDATE',
        payload: data
      })
    } catch (err) {
      console.log(err)
    }
  }
}

export const deleteData = id => {
  return async dispatch => {
    try {
      const response = await fetch('http://localhost:3000/api/aplikasi/' + id, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await response.json()
      dispatch({
        type: 'DELETE',
        payload: { id }
      })
    } catch (err) {
      console.log(err)
    }
  }
}
