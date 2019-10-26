import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Menu = () => {
    return (
        <Navbar
            className="justify-content-center align-items-center"
        >
            <Navbar.Brand>
                <img
                    alt='logo'
                    src={'/images/logo.png'}
                    className="logo d-inline-block align-top"
                />
            </Navbar.Brand>
            <Nav.Item>
            <Nav.Link href="/home">Accueil</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link>Galleries</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link>Contact</Nav.Link>
            </Nav.Item>
        </Navbar>
    )
}

export default Menu;
