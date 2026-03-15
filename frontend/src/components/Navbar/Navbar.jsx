
import React, { useState } from "react";
import { Link } from "react-router-dom";

import MenuIcon from '@mui/icons-material/Menu';


import "./Navbar.css";

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">

            <div className="navbar-container">

                <div className="logo">
                    <p>HijamaCare</p>
                </div>

                {/* Desktop Menu */}
                <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/contact">Contact</Link></li>

                    <li>
                        <Link to="/book-session" className="book-btn">
                            Book Session
                        </Link>
                    </li>

                </ul>

                {/* Mobile Menu */}
                <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                    <MenuIcon/>
                </div>

            </div>

        </nav>
    )
}
export default Navbar;