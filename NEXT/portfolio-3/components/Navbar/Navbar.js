import Hamburger from '../Hamburger/Hamburger.js';
import MoreTooltip from "../MoreTooltip/MoreTooltip.js";

import Link from 'next/link';
import { useRouter } from 'next/router';

import moreTooltipToggle from '../../functions/more-tooltip.js';


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
            return " active textAccentLight";
        } else {
            return " inactive target";
        }
    }

    return(
        <>
            <nav id="navbar" className="bg-white text-black visited:text-black top blur-white text-xl fixed flex justify-between items-center w-screen h-16 z-40">
                <Link className={"home first pl-20 text-homeAccentLight" + linkStyle("/")} href="./#">Home</Link>
                <ul id="navbar-links" className="flex">
                    <li>
                        <Link className={linkStyle("/mobile")} href="./mobile">Mobile Development</Link>
                    </li>
                    <li>
                        <Link className={linkStyle("/web")} href="./web">Web Development</Link>
                    </li>
                    <li className="block md:hidden">
                        <Link className="target" href="./translations">Translations</Link>
                    </li>
                    <li className="block md:hidden">
                        <Link className="target" href="./photography">Photograpy</Link>
                    </li>
                    {//<li className="block md:hidden">
                     //   <Link className="target" href="./articles">Articles</Link>
                    //</li>
                    }
                    <li className="block md:hidden">
                        <Link className="target" href="./timeline">Timeline</Link>
                    </li>
                    <li className="block md:hidden">
                        <Link className="target" href="./about">About</Link>
                    </li>
                    <li className="hidden md:block">
                        <Link href="#" id="more-button" onClick={ moreTooltipToggle } className="inactive target last">More</Link>
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