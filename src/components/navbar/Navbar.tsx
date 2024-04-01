import React from 'react';
import './Navbar.css';
import logoSVG from '../../assets/telesign-logo-blue.svg';

const Navbar: React.FC = () => {
    return (
        <nav className='navbar'>
            <div className='navbar-logo'>
                <img src={logoSVG} alt="Navbar Logo" className='logo-image'></img>
            </div>
            <div className='navbar-links'>
                <a href="https://support.telesign.com/s/">Support</a>
            </div>
        </nav>
    );
}

export default Navbar;