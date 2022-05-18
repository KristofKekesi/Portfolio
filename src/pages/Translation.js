import React, { useEffect } from "react";

import background from "../bg.jpg";

import Navbar from "../components/navbar/navbar";
import Dock from "../components/dock/dock";
import Footer from "../components/footer/footer";
import Cursor from "../components/cursor/cursor";
import Article from "../components/article/article";

import navbarToggle from "../functions/navbar";
import cursorSetup from "../functions/cursor";


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


function Translations() {
    useEffect(() => {
        // title
        document.title = "Translations";

         // navbar
        navbarToggle();

        // cursor
        cursorSetup();
      }, []);

    return (
      <>
        <Navbar />
        <div className="w-full bg-cover" style={{paddingTop: "150px", paddingBottom: "75px", backgroundImage: `url(${background})`}}>
          <center>
                <h1 className="white selectable text-center w-max" style={{textShadow: "6px 6px 12px rgba(0, 0, 0, .75)"}}> 
                  Translations
                </h1>
          </center>
        </div>
        <Article id="2"></Article>
        <Dock IDs={[5, 6, 7, 8, 9, 10, 11, 13, 14]}/>
        <Footer />
        <Cursor />
      </>
    );
  }
  
  export default Translations;