import Hamburger from '../Hamburger/Hamburger.js';
import MoreTooltip from "../MoreTooltip/MoreTooltip.js";

import Link from 'next/link';
import { useRouter } from 'next/router';

import moreTooltipToggle from '../../functions/more-tooltip.js';
import NavbarLink from './NavbarLink.js';


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


function Navbar() {
    function linkStyle(path, additionalClasses) {
        const router = useRouter();
        console.log(router.pathname);
        if (router.pathname === path) {
            return "active textAccentLight " + additionalClasses;
        } else {
            return "inactive target " + additionalClasses;
        }
    }

    return(
        <>
            <nav className="bg-white text-black visited:text-black top blur-white text-xl fixed flex justify-between items-center w-screen h-16 z-40">
                <NavbarLink className={"first ml-20 text-homeAccentLight"} path="/">Home</NavbarLink>
                <ul id="navbar-links" className="flex">
                    <li>
                        <NavbarLink path="/mobile">Mobile Development</NavbarLink>
                    </li>
                    <li>
                        <NavbarLink path="/web">Web Development</NavbarLink>
                    </li>
                    <li className="block md:hidden">
                    <NavbarLink path="/translations">Translations</NavbarLink>
                    </li>
                    <li className="block md:hidden">
                        <NavbarLink path="/photography">Photography</NavbarLink>
                    </li>
                    {//<li className="block md:hidden">
                    //    <NavbarLink path="/articles">Articles</NavbarLink>
                    //</li>
                    }
                    <li className="block md:hidden">
                        <NavbarLink path="/timeline">Timeline</NavbarLink>
                    </li>
                    <li className="block md:hidden">
                        <NavbarLink path="/about">About</NavbarLink>
                    </li>
                    <li className="hidden md:block">
                        <a id="more-button" onClick={ moreTooltipToggle } className="inactive target last">More</a>
                    </li>
                </ul>
                <Hamburger />
            </nav>
            <MoreTooltip/>
        </>
    );
}

export default Navbar;