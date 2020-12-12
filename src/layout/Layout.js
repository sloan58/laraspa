import React from 'react'
import AuthNavbar from '../layout/AuthNavbar'
import { Container } from 'react-bootstrap'

const Layout = ({ children }) => {
  return (
    <>
      <AuthNavbar />
      <Container fluid>{children}</Container>
    </>
  )
}

export default Layout
