import React, { useState } from 'react'
import { useEffect } from 'react'
import { Button, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { ModalForm } from '../components/ModalForm'
import { ModalUpdate } from '../components/ModalUpdate'
import { deleteData, fetchAll, fetchOne } from '../store/actions/application'

function Home() {
  const [show, setShow] = useState(false)
  const [showUpdate, setShowUpdate] = useState(false)
  const [id, setId] = useState(false)
  const { applications, application } = useSelector(state => state.application)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAll())
  }, [dispatch])

  const onDelete = id => {
    console.log(id)
    dispatch(deleteData(id))
  }
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  // UPDATE
  const onUpdate = id => {
    setId(id)
    setShowUpdate(true)
  }
  useEffect(() => {
    if (id) dispatch(fetchOne(id))
  }, [dispatch, id])
  const handleCloseUpdate = () => {
    setId(false)
    setShowUpdate(false)
  }

  return (
    <>
      <Button variant='primary' onClick={handleShow}>
        ADD DATA
      </Button>
      <ModalForm show={show} handleClose={handleClose} data={application} />
      <ModalUpdate
        show={showUpdate}
        handleClose={handleCloseUpdate}
        data={application}
      />

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nama Aplikasi</th>
            <th>Keterangan</th>
            <th>Jumlah Pengguna</th>
            <th>Pendiri</th>
            <th>Tanggal Didirikan</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {applications.map(app => (
            <tr key={app.id}>
              <td>{app.name}</td>
              <td>{app.information}</td>
              <td>{app.total_users}</td>
              <td>{app.founder}</td>
              <td>{app.date_founded}</td>
              <td>
                <Button variant='success' onClick={() => onUpdate(app.id)}>
                  EDIT
                </Button>
                <Button variant='warning' onClick={() => onDelete(app.id)}>
                  DELETE
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}

export default Home
