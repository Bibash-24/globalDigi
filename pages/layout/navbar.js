import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import navbarStyle from '../../styles/navbar.module.css';

export default function navbar() {
    return (
        <div className={navbarStyle.navbarOverview}>
            <Navbar expand="lg">
                <Navbar.Brand className={navbarStyle.navbarBrand} href="#home"><img src="/logo.png" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className={navbarStyle.navbarList}>
                    <Nav className="mx-auto">
                    <Nav.Link className={`${navbarStyle.gdNavLink} mx-1`} href="#home">Home</Nav.Link>
                    <Nav.Link className={`${navbarStyle.gdNavLink} mx-1`} href="#link">Services</Nav.Link>
                    <Nav.Link className={`${navbarStyle.gdNavLink} mx-1`} href="#home">Products</Nav.Link>
                    <Nav.Link className={`${navbarStyle.gdNavLink} mx-1`} href="#link">Teams</Nav.Link>
                    <Nav.Link className={`${navbarStyle.gdNavLink} mx-1`} href="#home">Technology</Nav.Link>
                    <Nav.Link className={`${navbarStyle.gdNavLink} mx-1`} href="#link">Development</Nav.Link>
                    <Nav.Link className={`${navbarStyle.gdNavLink} mx-1`} href="#link">Clients</Nav.Link>
                    <Nav.Link className={`${navbarStyle.gdNavLink} mx-1`} href="#link">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};