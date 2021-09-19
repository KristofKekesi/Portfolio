import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import background from "../bg.jpg";

import "../components/timeline/timeline.css";

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

    let timeline = <article id="timeline">
        <div className="sticky" style={{top: "75px", display: "flex", margin: "min(2.5rem, 2.5vw)",  flexDirection: "column"}}>
            <Link to="#2004" className="text-title target sticky">2004</Link>
            <Link to="#2015" className="text-title target sticky">2015</Link>
            <Link to="#2018" className="text-title target sticky">2018</Link>
            <Link to="#2019" className="text-title target sticky">2019</Link>
            <Link to="#2020" className="text-title target sticky">2020</Link>
            <Link to="#2021" className="text-title target sticky">2021</Link>
            <Link to="#2023" className="text-title target sticky">2023</Link>
        </div>
        <div className="sticky" style={{backgroundImage: `url(${background})`, marginTop: "min(2.5rem, 2.5vw)", marginBottom: "min(2.5rem, 2.5vw)", top: "50px", width: "1rem", minHeight: "100vh"}}><div className="sticky" style={{top: "50px", width: "1rem", minHeight: "100vh"}} className="blur-dark"></div></div>
        <div>
            <div className="section">
                <div id="2004" className="text-title">2004</div>
                <div className="text last">Born</div>
            </div>
            <div className="section">
                <div id="2015" className="text-title">2015</div>
                <div className="text last">Started learning English</div>
            </div>
            <div className="section">
                <div id="2018" className="text-title">2018</div>
                <div className="text last">Started learning <abbr className="target" title="HyperText Markup Language">HTML</abbr>, <abbr className="target" title="Cascadian Style Sheet">CSS</abbr> and JavaScript</div>
            </div>
            <div className="section">
                <div id="2019" className="text-title">2019</div>
                <div className="text-subtitle">December</div>
                <div className="text last">Started learning Flutter and Dart</div>
            </div>
            <div className="section">
                <div id="2020" className="text-title">2020</div>
                <div className="text-subtitle">May</div>
                <div className="text-subsubtitle">May 16</div>
                <div className="text">Translated Notepads to Hungarian</div>
                <div className="text-subtitle">July</div>
                <div className="text-subsubtitle">July 6</div>
                <div className="text">Released Elements version 0.1</div>
                <div className="text-subsubtitle">July 12</div>
                <div className="text">Released Elements version 0.2</div>
                <div className="text-subsubtitle">July 22</div>
                <div className="text">Released NASA Mira 0.1</div>
                <div className="text-subsubtitle">July 24</div>
                <div className="text">Released kekesi.dev</div>
                <div className="text-subsubtitle">July 29</div>
                <div className="text">Released NASA Mira 1.0</div>
                <div className="text-subtitle">August</div>
                <div className="text-subsubtitle">August 2</div>
                <div className="text">Released Elements version 0.3</div>
                <div className="text-subtitle">September</div>
                <div className="text-subsubtitle">September 1</div>
                <div className="text">Released Elements version 0.4</div>
                <div className="text-subtitle">October</div>
                <div className="text-subsubtitle">October 16</div>
                <div className="text">Translated Files to Hungarian</div>
                <div className="text-subtitle">November</div>
                <div className="text-subsubtitle">November 9</div>
                <div className="text">Translated Ambie to Hungarian</div>
                <div className="text-subtitle">December</div>
                <div className="text-subsubtitle">December 8</div>
                <div className="text">Translated Quick Pad to Hungarian</div>
                <div className="text-subsubtitle">December 14</div>
                <div className="text last">Released Preacher</div>
            </div>
            <div className="section">
                <div id="2021" className="text-title">2021</div>
                <div className="text-subtitle">February</div>
                <div className="text-subsubtitle">February 15</div>
                <div className="text">Translated Replica to Hungarian</div>
                <div className="text-subsubtitle">February 17</div>
                <div className="text">Translated Quick Picture Viewer to Hungarian</div>
                <div className="text-subtitle">March</div>
                <div className="text-subsubtitle">March 2</div>
                <div className="text">Translated DogeHouse to Hungarian</div>
                <div className="text-subsubtitle">March 19</div>
                <div className="text">Released Elements version 1.0</div>
                <div className="text-subtitle">April</div>
                <div className="text-subsubtitle">April 13</div>
                <div className="text">Released NASA Mira 2</div>
                <div className="text-subsubtitle">April 16</div>
                <div className="text">Translated Vinyls to Hungarian</div>
                <div className="text-subtitle">June</div>
                <div className="text">Started learning React</div>
                <div className="text-subtitle">September</div>
                <div className="text">Math and <abbr className="target" title="Computer Science">CS</abbr> Major</div>
                <div className="text-subtitle">October</div>
                <div className="text last">Graduating from <abbr className="target" title="Computer Science">CS</abbr> level B</div>
            </div>
            <div className="section">
                <div id="2023" className="text-title">2023</div>
                <div className="text last">Graduating from Chernel István High School Hungary</div>
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