import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand>MERN-ETHNUS TASK 2</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="/task1">TASK1</Nav.Link>
                            <Nav.Link href="/task2">TASK2</Nav.Link>
                            <Nav.Link href="/task3">TASK3</Nav.Link>
                            <Nav.Link href="/task4">TASK4</Nav.Link>
                            <Nav.Link href="/task5">TASK5</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar