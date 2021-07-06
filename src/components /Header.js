import React, { Component } from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap'


export class Header extends Component {
    render() {
        return (
            <div>
  <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/favorite">favoritedrinks</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
            </div>
        )
    }
}

export default Header
