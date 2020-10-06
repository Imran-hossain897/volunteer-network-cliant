import React from 'react';
import { Button, InputGroup, Nav, Navbar, } from 'react-bootstrap';
import logoImage from '../../volunteer-network-main/logos/Group 1329.png'
import './Header.css'

const Header = () => {

    return (
        <div>
            <Navbar expand="lg">
                <img style={{ height: '40px', marginLeft: '40px' }} src={logoImage} alt="" />
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link style={{ marginLeft: '300px', color: 'black' }} href="#home">Home</Nav.Link>
                        <Nav.Link style={{ marginLeft: '30px', color: 'black' }} href="#donation">Donation</Nav.Link>
                        <Nav.Link style={{ marginLeft: '30px', color: 'black' }} href="#events">Events</Nav.Link>
                        <Nav.Link style={{ marginLeft: '30px', color: 'black' }} href="#blog">Blog</Nav.Link>
                        <Button href="logIn" style={{ marginLeft: '30px' }} variant="primary">Registar</Button>
                        <Button style={{ marginLeft: '10px' }} variant="dark">Admin</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            {/* <div className="group">
                <h4 className="text-design">I grow by helping people in need.</h4>
                <InputGroup className="simple">
                   <input className='input-slice' placeholder="search..." type="search" name="" id=""/>
                    <InputGroup.Prepend>
                        <Button variant="primary" >Search</Button>
                    </InputGroup.Prepend>
                </InputGroup>
            </div> */}

        </div>
    );
};

export default Header;