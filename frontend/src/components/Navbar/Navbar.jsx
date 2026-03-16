
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
                    
                    <li>
                        <a href="#home">Home</a>
                    </li>

                    <li>
                        <a href="#about">About</a>
                    </li>

                    <li>
                        <a href="#services">Services</a>
                    </li>

                    <li>
                        <a href="#book-session">Book Session</a>
                    </li>

                    <li>
                        <a href="#contact">Contact</a>
                    </li>

                </ul>

                {/* Mobile Menu Button*/}
                <div className="menu-icon" onClick={toggleMenu}>
                    <MenuIcon/>
                </div>

            </div>

        </nav>
    )
}
export default Navbar;