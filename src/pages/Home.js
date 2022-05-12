import React, { useEffect } from "react";

import background from "../bg.jpg";

import Navbar from "../components/navbar/navbar";
import Dock from "../components/dock/dock";
import Cursor from "../components/cursor/cursor";

import navbarToggle from "../functions/navbar";
import cursorSetup from "../functions/cursor";


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


function Home() {
  useEffect(() => {
    // title
    document.title = "Kristóf Kékesi";

    // navbar
    navbarToggle();

    // cursor
    cursorSetup();
  }, []);

  return (
    <>
      <Navbar />
      <div className="w-full h-screen flex justify-center bg-cover" style={{backgroundImage: `url(${background})`}}>
          <div>
          <h1 className="white" style={{paddingTop: "33vh", textShadow: "6px 6px 12px rgba(0, 0, 0, .75)"}}>Kristóf Kékesi</h1>
          <h2 className="white" style={{textShadow: "6px 6px 12px rgba(0, 0, 0, .75)"}}>Mobile Developer</h2>
        </div>
      </div>
      <Dock />
      <Cursor />
    </>
  );
}

export default Home;