import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import moreTooltipToggle from "../../functions/more-tooltip";

import './more-tooltip.css';

const localStorage = require('../../functions/storage');


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


function MoreTooltip() {
    useEffect(() => {
        if(localStorage.getStorage("more-tooltip") === "true") {
            moreTooltipToggle();
        }
      }, []);

    return (
        <div id="more-tooltip" className="blur-dark hidden fixed right-3 rounded-2xl">
            <ul>
                <li>
                    <Link className="target" to="/translations">Translations</Link>
                </li>
                <li>
                    <Link className="target" to="/photography">Photography</Link>
                </li>
                <li>
                    <Link className="target" to="/articles">Articles</Link>
                </li>
                <hr className="w-full"/>
                <li>
                    <Link className="target" to="/timeline">Timeline</Link>
                </li>
                <li>
                    <Link className="target" to="/about">About</Link>
                </li>
            </ul>
        </div>
    )
}

export default MoreTooltip;