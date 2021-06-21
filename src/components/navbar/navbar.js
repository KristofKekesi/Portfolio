import React, { Component } from 'react';
import Hamburger from './../hamburger/hamburger.js'

import './navbar.css';


class Navbar extends Component {
    render() {
        return(
        <nav id="navbar" className="white top">
            <a className="home active" href="./#">Home</a>
            <ul id="navbar-links">
                <li>
                    <a href="./mobile">Mobile Development</a>
                </li>
                <li>
                    <a href="./web">Web Development</a>
                </li>
                <li>
                    <a className="mobile-view" href="./translations">Translations</a>
                </li>
                <li>
                    <a className="mobile-view" href="./articles">Articles</a>
                </li>
                <li>
                    <a className="mobile-view" href="./about">About</a>
                </li>
                <li>
                    <a className="mobile-view" href="./contacts">Contacts</a>
                </li>
                <li>
                    <a className="desktop-view" href="./#">More</a>
                </li>
            </ul>
            <div id="hamburger" style={{marginRight: "12px"}} className="future-animated-material-hamburger-icon-flare mobile-view"><Hamburger /></div>
        </nav>
        );
    }
}

export default Navbar;