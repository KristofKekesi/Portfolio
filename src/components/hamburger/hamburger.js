import React from 'react';
import hamburger from './hamburger.svg';


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


function Hamburger() {
  return <img src={hamburger} id="hamburger"  className="target block md:hidden mr-10 h-10 w-10" alt="Hamburger" />;
}

export default Hamburger;