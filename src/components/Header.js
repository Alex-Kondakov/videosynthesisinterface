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
                        <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
                        <LinkContainer to="/scripts"><Nav.Link>Scripts</Nav.Link></LinkContainer>
                        <LinkContainer to="/logs"><Nav.Link>Logs</Nav.Link></LinkContainer>
                        <NavDropdown title="Applications" id="basic-nav-dropdown" disabled>
                            <LinkContainer to="/app1"><NavDropdown.Item>Application one</NavDropdown.Item></LinkContainer>
                            <LinkContainer to="/app2"><NavDropdown.Item>Application two</NavDropdown.Item></LinkContainer>
                            <LinkContainer to="/app3"><NavDropdown.Item>Application three</NavDropdown.Item></LinkContainer>
                            <NavDropdown.Divider />
                            <LinkContainer to="/app4"><NavDropdown.Item>Application four</NavDropdown.Item></LinkContainer>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header