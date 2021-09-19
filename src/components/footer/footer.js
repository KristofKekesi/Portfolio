import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import footerDockSpacer from "../../functions/footer";

import './footer.css';


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


function Footer() {
    useEffect(() => {
        // footer
        footerDockSpacer();
        window.addEventListener("resize", footerDockSpacer);
      }, []);

    return (
        <footer>
            <center>
                <ul id="footer-content">
                    <li>
                        Contacts
                        <ul>
                            <li><a className="target" href="mailto:kristof@kekesi.dev">Email</a></li>
                            <li><a className="target" href="https://github.com/KristofKekesi">GitHub</a></li>
                            <li><a className="target" href="https://twitter.com/KristofKekesi">Twitter</a></li>
                            <li><a className="target" href="https://www.instagram.com/kristofkekesiofficial/">Instagram</a></li>
                        </ul>
                    </li>
                    <li>
                        Policies
                        <ul>
                            <li><Link className="target" to="./termsandcontidions">General terms and conditions</Link></li>
                        </ul>
                    </li>
                    <li id="copyright" style={{display: "none"}}>
                        Copyright
                        <ul id="copyright-content" />
                    </li>
                    <li>
                        RSS
                        <ul>
                            <li><a className="target" href="https://rss.kekesi.dev/rss.xml">Subscribe</a></li>
                        </ul>
                    </li>
                </ul>
                </center>
            <div id="footer-dock-spacer"></div>
        </footer>
    )
}

export default Footer;