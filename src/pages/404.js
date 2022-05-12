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


function NotFound() {
    useEffect(() => {
        // title
        document.title = "Kristóf Kékesi - 404";

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
                <h1 className="white selectable text-center" style={{textShadow: "6px 6px 12px rgba(0, 0, 0, .75)"}}>
                  <div>404</div>
                  <span className="nowrap">Not Found</span>
                </h1>
          </center>
        </div>
        <Article id="13"></Article>
        <Dock />
        <Footer />
        <Cursor />
      </>
    );
  }
  
  export default NotFound;