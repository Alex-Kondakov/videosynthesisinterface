import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import logo from '../logo.svg'


const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand>
                    <img src={logo} height="40" className="d-inline-block align-top" alt="SDLR logo" />
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="header">
                        <LinkContainer to="/"><Nav.Link>Dashboard</Nav.Link></LinkContainer>
                        <LinkContainer to="/tasks"><Nav.Link>Tasks</Nav.Link></LinkContainer>
                        <LinkContainer to="/logs"><Nav.Link>Logs</Nav.Link></LinkContainer>
                        <NavDropdown title="New" id="basic-nav-dropdown">
                            <LinkContainer to="/remote"><NavDropdown.Item>From remote sources</NavDropdown.Item></LinkContainer>
                            <LinkContainer to="/local"><NavDropdown.Item>From local sources</NavDropdown.Item></LinkContainer>
                            <NavDropdown.Divider />
                            <LinkContainer to="/import"><NavDropdown.Item>Import from DB</NavDropdown.Item></LinkContainer>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header