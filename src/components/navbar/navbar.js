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
            <nav id="navbar" className="white top blur-white">
                <Switch>
                    <Route exact path="/">
                        <Link className="home active target first" to="./#">Home</Link>
                    </Route>
                    <Route>
                        <Link className="home target first" to="./#">Home</Link>
                    </Route>
                </Switch>
                <ul id="navbar-links">
                    <li>
                        <Switch>
                            <Route path="/mobile">
                                <Link className="active target" to="./mobile">Mobile Development</Link>
                            </Route>
                            <Route>
                                <Link className="target" to="./mobile">Mobile Development</Link>
                            </Route>
                        </Switch>
                    </li>
                    <li>
                        <Switch>
                            <Route path="/web">
                                <Link className="active target" to="./web">Web Development</Link>
                            </Route>
                            <Route>
                                <Link className="target" to="./web">Web Development</Link>
                            </Route>
                        </Switch>
                    </li>
                    <li className="block sm:hidden">
                        <Link className="target" to="./translations">Translations</Link>
                    </li>
                    <li className="block sm:hidden">
                        <Link className="target" to="./photography">Photograpy</Link>
                    </li>
                    {//<li className="block sm:hidden">
                    //    <Link className="target" to="./articles">Articles</Link>
                    //</li>
                    }
                    <li className="block sm:hidden">
                        <Link className="target" to="./timeline">Timeline</Link>
                    </li>
                    <li className="block sm:hidden">
                        <Link className="target" to="./about">About</Link>
                    </li>
                    <li className="hidden sm:block">
                        <Link to="#" id="more-button" onClick={ moreTooltipToggle } className="target last">More</Link>
                    </li>
                </ul>
                <div id="hamburger" className="block sm:hidden">
                    <Hamburger />
                </div>
            </nav>
            <div style={{marginRight: "12px"}} className="hidden sm:block target">
                <MoreTooltip/>
            </div>
        </>
    );
}

export default Navbar;