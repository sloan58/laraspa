import React from 'react'
import apiClient from '../services/api'
import { AuthContext } from '../App'
import { Nav, Row, Col, Form, Button } from 'react-bootstrap'

const LoginPage = () => {
  const initialState = {
    email: '',
    password: '',
    isSubmitting: false,
    errorMessage: null,
  }

  const { dispatch } = React.useContext(AuthContext)
  const [data, setData] = React.useState(initialState)

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    })
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    setData({
      ...data,
      isSubmitting: true,
      errorMessage: null,
    })
    apiClient
      .post('/login', {
        email: data.email,
        password: data.password,
      })
      .then((res) => {
        dispatch({
          type: 'LOGGED_IN',
          payload: res,
        })
      })
      .catch((error) => {
        setData({
          ...data,
          isSubmitting: false,
          errorMessage: error.message || error.statusText,
        })
      })
  }

  return (
    <>
      <Nav
        activeKey='/home'
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <Nav.Link href='/home'>Active</Nav.Link>
        </Nav.Item>
      </Nav>
      <Row className='mt-5'>
        <Col md={{ span: 4, offset: 4 }}>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                value={data.email}
                onChange={handleInputChange}
                name='email'
                id='email'
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Password'
                value={data.password}
                onChange={handleInputChange}
                name='password'
                id='password'
              />
            </Form.Group>
            <Button
              variant='primary'
              type='submit'
              disabled={data.isSubmitting}
            >
              {data.isSubmitting ? 'Loading...' : 'Login'}
            </Button>
            {data.errorMessage && (
              <span className='form-error'>{data.errorMessage}</span>
            )}
          </Form>
        </Col>
      </Row>
    </>
  )
}

export default LoginPage
