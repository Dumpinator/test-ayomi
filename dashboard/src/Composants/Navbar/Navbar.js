import React from 'react';
import './Navbar.css';
import { MdNotificationsNone } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="icons"><MdNotificationsNone /></div>
            <div className="icons"><FaUserCircle /></div>
        </nav>
    );
}

export default Navbar;
