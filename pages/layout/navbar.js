import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import navbarStyle from '../../styles/navbar.module.css';

export default function navbar() {
    return (
        <div>
            <Navbar fixed="top" expand="lg">
                <Navbar.Brand className="ml-5" href="#home"><img src="/logo.png" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                    <Nav.Link className={`${navbarStyle.gdNavLink} mx-3`} href="#home">Home</Nav.Link>
                    <Nav.Link className={`${navbarStyle.gdNavLink} mx-3`} href="#link">Services</Nav.Link>
                    <Nav.Link className={`${navbarStyle.gdNavLink} mx-3`} href="#home">Clients</Nav.Link>
                    <Nav.Link className={`${navbarStyle.gdNavLink} mx-3`} href="#link">Products</Nav.Link>
                    <Nav.Link className={`${navbarStyle.gdNavLink} mx-3`} href="#home">Team</Nav.Link>
                    <Nav.Link className={`${navbarStyle.gdNavLink} mx-3`} href="#link">Contacts</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};