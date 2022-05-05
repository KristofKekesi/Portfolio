import React, { useEffect } from "react";

import background from "../bg.jpg";

import Navbar from "../components/navbar/navbar";
import Dock from "../components/dock/dock";
import Footer from "../components/footer/footer";
import Cursor from "../components/cursor/cursor";
import Articles from "../components/articles/articles";

import navbarToggle from "../functions/navbar";
import cursorSetup from "../functions/cursor";


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


function ArticlesPage() {
    useEffect(() => {
        // title
        document.title = "Articles";

         // navbar
        navbarToggle();

        // cursor
        cursorSetup();
      }, []);

    return (
      <>
        <Navbar />
        <div style={{width: "100%", paddingTop: "150px", paddingBottom: "75px", backgroundImage: `url(${background})`, backgroundSize: "cover"}}>
          <center>
                <h1 className="white selectable" style={{textShadow: "6px 6px 12px rgba(0, 0, 0, .75)", textAlign: "center"}}>
                  Articles
                </h1>
          </center>
        </div>
        <Articles />
        <Dock />
        <Footer />
        <Cursor />
      </>
    );
  }
  
  export default ArticlesPage;