import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return(
        <>
            <Navbar collapseOnSelect expand='lg' variant='dark' bg='dark'>
                <Navbar.Brand as={NavLink} to='/'>
                    Bajon de Paulo
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='me-auto'>
                        <Nav.Link as={NavLink} to='/menu'>Menu</Nav.Link>
                        <Nav.Link as={NavLink} to='/reservas'>Reservas</Nav.Link>
                        <NavDropdown title='Admin'>
                            <NavDropdown.Item as={NavLink} to='/admin/reservas'>Reservas</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        {/* <Nav.Link as={NavLink} to='/login'>Login</Nav.Link>
                        <Nav.Link as={NavLink} to='/register'>Register</Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Navigation;