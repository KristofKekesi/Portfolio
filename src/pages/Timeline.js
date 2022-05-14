import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import background from "../bg.jpg";

import "../components/timeline/timeline.css";
import "../components/article/article.css";

import Navbar from "../components/navbar/navbar";
import Dock from "../components/dock/dock";
import Footer from "../components/footer/footer";
import Cursor from "../components/cursor/cursor";

import navbarToggle from "../functions/navbar";
import cursorSetup from "../functions/cursor";


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


function Timeline() {
useEffect(() => {
        // title
        document.title = "Timeline";

        // navbar
        navbarToggle();

        // cursor
        cursorSetup();

    }, []);

    let timeline = <article id="timeline" className="flex flex-nowrap flex-row items-start justify-center bg-white">
        <div className="sticky flex mt-10 flex-col">
            <Link to="#2004" className="text-title target sticky">2004</Link>
            <Link to="#2015" className="text-title target sticky">2015</Link>
            <Link to="#2018" className="text-title target sticky">2018</Link>
            <Link to="#2019" className="text-title target sticky">2019</Link>
            <Link to="#2020" className="text-title target sticky">2020</Link>
            <Link to="#2021" className="text-title target sticky">2021</Link>
            <Link to="#2022" className="text-title target sticky">2022</Link>
            <Link to="#2023" className="text-title target sticky">2023</Link>
        </div>
        <div className="sticky mt-10" style={{backgroundImage: `url(${background})`, top: "50px", width: "1rem", minHeight: "100vh"}}><div className="sticky blur-dark" style={{top: "50px", width: "1rem", minHeight: "100vh"}}></div></div>
        <div>
            <div className="m-10 section">
                <div id="2004" className="text-title selectable">2004</div>
                <div className="text last selectable">Born</div>
            </div>
            <div className="m-10 section">
                <div id="2015" className="text-title selectable">2015</div>
                <div className="text last selectable">Started learning English</div>
            </div>
            <div className="m-10 section">
                <div id="2018" className="text-title selectable">2018</div>
                <div className="text last selectable">Started learning <abbr className="target" title="HyperText Markup Language">HTML</abbr>, <abbr className="target" title="Cascadian Style Sheet">CSS</abbr> and JavaScript</div>
            </div>
            <div className="m-10 section">
                <div id="2019" className="text-title selectable">2019</div>
                <div className="text-subtitle selectable" style={{paddingTop: "0"}}>December</div>
                <div className="text last selectable">Started learning Flutter and Dart</div>
            </div>
            <div className="m-10 section">
                <div id="2020" className="text-title selectable">2020</div>
                <div className="text-subtitle selectable" style={{paddingTop: "0"}}>May</div>
                <div className="text-subsubtitle selectable">May 16</div>
                <div className="text selectable">Translated Notepads to Hungarian</div>
                <div className="text-subtitle selectable">July</div>
                <div className="text-subsubtitle selectable">July 6</div>
                <div className="text selectable">Released Elements version 0.1</div>
                <div className="text-subsubtitle selectable">July 12</div>
                <div className="text selectable">Released Elements version 0.2</div>
                <div className="text-subsubtitle selectable">July 22</div>
                <div className="text selectable">Released NASA Mira 0.1</div>
                <div className="text-subsubtitle selectable">July 24</div>
                <div className="text selectable">Released kekesi.dev</div>
                <div className="text-subsubtitle selectable">July 29</div>
                <div className="text selectable">Released NASA Mira 1.0</div>
                <div className="text-subtitle selectable">August</div>
                <div className="text-subsubtitle selectable">August 2</div>
                <div className="text selectable">Released Elements version 0.3</div>
                <div className="text-subtitle selectable">September</div>
                <div className="text-subsubtitle selectable">September 1</div>
                <div className="text selectable">Released Elements version 0.4</div>
                <div className="text-subtitle selectable">October</div>
                <div className="text-subsubtitle selectable">October 16</div>
                <div className="text selectable">Translated Files to Hungarian</div>
                <div className="text-subtitle selectable">November</div>
                <div className="text-subsubtitle selectable">November 9</div>
                <div className="text selectable">Translated Ambie to Hungarian</div>
                <div className="text-subtitle selectable">December</div>
                <div className="text-subsubtitle selectable">December 8</div>
                <div className="text selectable">Translated Quick Pad to Hungarian</div>
                <div className="text-subsubtitle selectable">December 14</div>
                <div className="text last selectable">Released Preacher</div>
            </div>
            <div className="m-10 section">
                <div id="2021" className="text-title selectable">2021</div>
                <div className="text-subtitle selectable" style={{paddingTop: "0"}}>February</div>
                <div className="text-subsubtitle selectable">February 15</div>
                <div className="text selectable">Translated Replica to Hungarian</div>
                <div className="text-subsubtitle selectable">February 17</div>
                <div className="text selectable">Translated Quick Picture Viewer to Hungarian</div>
                <div className="text-subtitle selectable">March</div>
                <div className="text-subsubtitle selectable">March 2</div>
                <div className="text selectable">Translated DogeHouse to Hungarian</div>
                <div className="text-subsubtitle selectable">March 19</div>
                <div className="text selectable">Released Elements version 1.0</div>
                <div className="text-subtitle selectable">April</div>
                <div className="text-subsubtitle selectable">April 13</div>
                <div className="text selectable">Released NASA Mira 2</div>
                <div className="text-subsubtitle selectable">April 16</div>
                <div className="text selectable">Translated Vinyls to Hungarian</div>
                <div className="text-subtitle selectable">June</div>
                <div className="text selectable">Started learning React</div>
                <div className="text-subtitle selectable">September</div>
                <div className="text selectable">Math and <abbr className="target" title="Computer Science">CS</abbr> Major</div>
                <div className="text-subtitle selectable">October</div>
                <div className="text-subsubtitle selectable">October 26</div>
                <div className="text selectable">Graduated from <abbr className="target" title="Computer Science">CS</abbr> level B</div>
                <div className="text-subtitle selectable">December</div>
                <div className="text-subsubtitle selectable">December 23</div>
                <div className="text last selectable">Translated Navi to Hungarian</div>
            </div>
            <div className="m-10 section">
                <div id="2022" className="text-title selectable">2022</div>
                <div className="text-subtitle selectable" style={{paddingTop: "0"}}>March</div>
                <div className="text-subsubtitle selectable">March 6</div>
                <div className="text selectable">Translated Posture Pal to Hungarian</div>
                <div className="text-subsubtitle selectable">March 10</div>
                <div className="text last selectable">Released NASA Mira version 3</div>
            </div>
            <div className="m-10 section">
                <div id="2023" className="text-title selectable">2023</div>
                <div className="text last selectable">Graduating from Chernel István High School Hungary</div>
            </div>
        </div>
        </article>

    return (
    <>
        <Navbar />
        <div style={{width: "100%", paddingTop: "150px", paddingBottom: "75px", backgroundImage: `url(${background})`, backgroundSize: "cover"}}>
        <center>
                <h1 className="white selectable" style={{textShadow: "6px 6px 12px rgba(0, 0, 0, .75)", textAlign: "center"}}>Timeline</h1>
        </center>
        </div>
        {timeline}
        <Dock />
        <Footer />
        <Cursor />
    </>
    );
}

export default Timeline;