import React, { Component } from 'react';
import Hamburger from './../hamburger/hamburger.js'

import './navbar.css';

class Navbar extends Component {
    render() {
        return(
        <nav id="navbar" className="white top blur-white">
            <a className="home active target" href="./#">Home</a>
            <ul id="navbar-links">
                <li>
                    <a className="target" href="./mobile">Mobile Development</a>
                </li>
                <li>
                    <a className="target" href="./web">Web Development</a>
                </li>
                <li className="mobile-view">
                    <a className="target" href="./translations">Translations</a>
                </li>
                <li className="mobile-view">
                    <a className="target" href="./articles">Articles</a>
                </li>
                <li className="mobile-view">
                    <a className="target" href="./about">About</a>
                </li>
                <li className="mobile-view">
                    <a className="target" href="./contacts">Contacts</a>
                </li>
                <li className="desktop-view">
                    <a className="target" href="./#">More</a>
                </li>
            </ul>
            <div id="hamburger" style={{marginRight: "12px"}} className="mobile-view target"><Hamburger /></div>
        </nav>
        );
    }
}

export default Navbar;