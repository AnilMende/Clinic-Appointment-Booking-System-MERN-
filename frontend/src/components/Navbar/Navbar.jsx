
import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';


import "./Navbar.css";

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <nav className="navbar">

            <div className="navbar-container">

                {/* Logo */}
                <div className="logo">
                    <a href="#home">
                        <img src="/clinic-logo.png" alt="Clinic logo" />
                    </a>
                </div>

                {/* Navigation Links */}
                <ul className={menuOpen ? "nav-links active" : "nav-links"}>

                    <a href="#home" className="nav-link">Home</a>
                    <a href="#about" className="nav-link">About</a>
                    <a href="#benefits" className="nav-link">Benefits</a>
                    <a href="#services" className="nav-link">Services</a>
                    <a href="#booking-form" className="nav-link">Book Session</a>
                    <a href="#contact" className="nav-link">Contact</a>

                </ul>

                {/* Mobile Menu Button*/}
                <div className="menu-icon" onClick={toggleMenu}>
                    <MenuIcon />
                </div>

            </div>

        </nav>
    )
}
export default Navbar;