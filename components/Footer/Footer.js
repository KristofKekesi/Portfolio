import React, { useEffect } from "react";

import footerDockSpacer from "../../functions/footer";

import { server } from "../../config";

//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


export default function Footer() {
    useEffect(() => {
        // footer
        footerDockSpacer();
        window.addEventListener("resize", footerDockSpacer);
      }, []);

    return (
        <footer>
            <center>
                <ul id="footer-content" className="w-screen flex justify-center wrap px-10 pb-7">
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
                            <li>
                                <a href="/generalprivacypolicy.txt" className="target">Privacy Policy</a>
                            </li>
                        </ul>
                    </li>
                    <li id="copyright" className="hidden">
                        Copyright
                        <ul id="copyright-content" />
                    </li>
                    <li>
                        RSS
                        <ul>
                            <li><a className="target" href={ server + "/rss.xml" }>Subscribe</a></li>
                        </ul>
                    </li>
                </ul>
                </center>
            <div id="footer-dock-spacer" className="w-full"></div>
        </footer>
    )
}