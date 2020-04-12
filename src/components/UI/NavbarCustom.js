
import React from 'react'
import {Navbar, Nav} from "react-bootstrap";
import {Link, NavLink} from "react-router-dom";
import logoNav from '../../assets/images/logoNavbar.png';

export const NavbarCustom = () => {
    return(
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>
                <Link to='/'>
                    <img src={logoNav} alt="Logo" />
                </Link>
            </Navbar.Brand>
            <Nav className="mr-auto">
                <NavLink exact activeClassName='active' to = '/' className='btn btn-outline-primary mr-2'>Pokemons</NavLink>
                <NavLink activeClassName='active' to = '/abilities' className='btn btn-outline-primary'>Abilities</NavLink>
            </Nav>
        </Navbar>
    )
};