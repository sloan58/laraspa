import React from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../App'
import apiClient from '../services/api'
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap'
import Gravatar from 'react-gravatar'
import { useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt, faCog } from '@fortawesome/free-solid-svg-icons'

const AuthNavbar = () => {
  const location = useLocation()
  const { state, dispatch } = React.useContext(AuthContext)

  const getActiveNav = (path) => {
    return location.pathname === path && 'border-bottom border-danger border-3'
  }

  const logout = (e) => {
    e.preventDefault()

    apiClient
      .post('/logout')
      .then((res) => {
        dispatch({
          type: 'LOGGED_OUT',
        })
      })
      .catch((e) => {
        console.log('logout error')
      })
  }
  return (
    <>
      <Navbar className='mb-5'>
        <Navbar.Brand as={Link} to='/'>
          Phoenix
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link as={Link} to='/' className={getActiveNav('/')}>
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to='/tables'
              className={getActiveNav('/tables')}
            >
              Tables
            </Nav.Link>
          </Nav>
          <Nav pullright='true' className='mr-2'>
            <NavDropdown
              title={
                <Gravatar
                  email={state.user.email || ''}
                  size={50}
                  rating='pg'
                  default='monsterid'
                  className='rounded-circle'
                />
              }
              id='basic-nav-dropdown'
              alignRight
            >
              <NavDropdown.Item onClick={logout} className='text-center'>
                <FontAwesomeIcon
                  icon={faSignOutAlt}
                  className='float-left mt-1'
                />
                <span>Logout</span>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.4' className='text-center'>
                <FontAwesomeIcon icon={faCog} className='float-left mt-1' />
                <span>Settings</span>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default AuthNavbar
