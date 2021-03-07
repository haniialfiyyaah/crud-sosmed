import React, { useEffect, useState } from 'react'
import { Form, Button, Container, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { fetchOne, insertData } from '../store/actions/application'

export const ModalForm = ({ show, handleClose, id }) => {
  const { application } = useSelector(state => state.application)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchOne(id))
  }, [dispatch])

  const handleSubmit = e => {
    e.preventDefault()
    console.log(application)
    dispatch(insertData(application))
    setApplication({
      name: '',
      information: '',
      total_users: 0,
      founder: '',
      date_founded: ''
    })
    handleClose()
  }

  const onChange = e => {
    let { name, value } = e.target
    name === 'total_users' && (value = +value)
    const newInput = { ...application, [name]: value }
    setApplication(newInput)
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Social Media</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Form.Group controlId='formName'>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  value={application.name}
                  name='name'
                  onChange={onChange}
                  type='text'
                  placeholder='Facebook'
                />
              </Form.Group>
              <Form.Group controlId='formInfo'>
                <Form.Label>Keterangan</Form.Label>
                <Form.Control
                  value={application.information}
                  name='information'
                  onChange={onChange}
                  type='text'
                  placeholder='Aplikasi ini adalah ...'
                />
              </Form.Group>
              <Form.Group controlId='formJumlahPengguna'>
                <Form.Label>Jumlah Pengguna</Form.Label>
                <Form.Control
                  value={application.total_users}
                  name='total_users'
                  onChange={onChange}
                  type='number'
                  placeholder='1000'
                />
              </Form.Group>
              <Form.Group controlId='formPendiri'>
                <Form.Label>Pendiri</Form.Label>
                <Form.Control
                  value={application.founder}
                  name='founder'
                  onChange={onChange}
                  type='text'
                  placeholder='Mark Zuckerberg'
                />
              </Form.Group>
              <Form.Group controlId='formDateFound'>
                <Form.Label>Tanggal Didirikan</Form.Label>
                <Form.Control
                  value={application.date_founded}
                  name='date_founded'
                  onChange={onChange}
                  type='date'
                  placeholder=''
                />
              </Form.Group>
            </Container>
          </Modal.Body>
          {/* <FormApplication /> */}
          <Modal.Footer>
            <Button variant='secondary' onClick={handleClose}>
              Close
            </Button>
            <Button variant='primary' type='submit' onClick={handleSubmit}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </Form>
    </>
  )
}
