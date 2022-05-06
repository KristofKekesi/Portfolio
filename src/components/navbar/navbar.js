import React from "react";
import { Link, Route, Switch } from "react-router-dom";


import Hamburger from './../hamburger/hamburger.js'
import MoreTooltip from "../more-tooltip/more-tooltip.js";


import moreTooltipToggle from "../../functions/more-tooltip";
import './navbar.css';


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


function Navbar() {
    return(
        <>
            <nav id="navbar" className="bg-white text-black visited:text-black top blur-white text-xl fixed flex justify-between items-center">
                <Switch>
                    <Route exact path="/">
                        <Link className="home first text-homeAccentLight-500" to="./#">Home</Link>
                    </Route>
                    <Route>
                        <Link className="home target first text-homeAccentLight-500" to="./#">Home</Link>
                    </Route>
                </Switch>
                <ul id="navbar-links">
                    <li>
                        <Switch>
                            <Route path="/mobile">
                                <Link className="active target text-activeAccentLight-500" to="./mobile">Mobile Development</Link>
                            </Route>
                            <Route>
                                <Link className="inactive target" to="./mobile">Mobile Development</Link>
                            </Route>
                        </Switch>
                    </li>
                    <li>
                        <Switch>
                            <Route path="/web">
                                <Link className="active target text-activeAccentLight-500" to="./web">Web Development</Link>
                            </Route>
                            <Route>
                                <Link className="inactive target" to="./web">Web Development</Link>
                            </Route>
                        </Switch>
                    </li>
                    <li className="block md:hidden">
                        <Link className="target" to="./translations">Translations</Link>
                    </li>
                    <li className="block md:hidden">
                        <Link className="target" to="./photography">Photograpy</Link>
                    </li>
                    <li className="block md:hidden">
                        <Link className="target" to="./articles">Articles</Link>
                    </li>
                    <li className="block sm:hidden">
                        <Link className="target" to="./timeline">Timeline</Link>
                    </li>
                    <li className="block md:hidden">
                        <Link className="target" to="./about">About</Link>
                    </li>
                    <li className="hidden md:block">
                        <Link to="#" id="more-button" onClick={ moreTooltipToggle } className="inactive target last">More</Link>
                    </li>
                </ul>
                <div id="hamburger" className="block md:hidden">
                    <Hamburger />
                </div>
            </nav>
            <div style={{marginRight: "12px"}} className="hidden md:block target">
                <MoreTooltip/>
            </div>
        </>
    );
}

export default Navbar;