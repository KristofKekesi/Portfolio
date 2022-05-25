import Hamburger from '../Hamburger/Hamburger.js';
import MoreTooltip from "../MoreTooltip/MoreTooltip.js";

import Link from 'next/link';
import { useRouter } from 'next/router';

import moreTooltipToggle from '../../functions/more-tooltip.js';

import './Navbar.module.css';


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


function Navbar() {
    function linkStyle(path) {
        const router = useRouter();
        console.log(router.pathname);
        if (router.pathname === path) {
            return " active";
        } else {
            return " inactive target";
        }
    }

    return(
        <>
            <nav id="navbar" className="bg-white text-black visited:text-black top blur-white text-xl fixed flex justify-between items-center w-screen h-16 z-40">
                <Link className={"home first pl-20 text-homeAccentLight" + linkStyle("/")} to="./#">Home</Link>
                <ul id="navbar-links" className="flex">
                    <li>
                        <Link className={"active text-activeAccentLight" + linkStyle("/mobile")} to="./mobile">Mobile Development</Link>
                    </li>
                    <li>
                        <Switch>
                            <Route path="/web">
                                <Link className="active target text-activeAccentLight" to="./web">Web Development</Link>
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
                    {//<li className="block md:hidden">
                     //   <Link className="target" to="./articles">Articles</Link>
                    //</li>
                    }
                    <li className="block md:hidden">
                        <Link className="target" to="./timeline">Timeline</Link>
                    </li>
                    <li className="block md:hidden">
                        <Link className="target" to="./about">About</Link>
                    </li>
                    <li className="hidden md:block">
                        <Link to="#" id="more-button" onClick={ moreTooltipToggle } className="inactive target last">More</Link>
                    </li>
                </ul>
                <Hamburger />
            </nav>
            <div style={{marginRight: "12px"}} className="hidden md:block target">
                <MoreTooltip/>
            </div>
        </>
    );
}

export default Navbar;