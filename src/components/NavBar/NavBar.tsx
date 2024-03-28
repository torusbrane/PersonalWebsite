import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'; // Importing the CSS file for styling

const NavBar = () => {

    return (
        <nav className="navbar">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Home</NavLink>
            <NavLink to="/programs" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Programs</NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>About</NavLink>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Contact</NavLink>        </nav>
    );
};

export default NavBar;
