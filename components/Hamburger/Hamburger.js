import Image from "next/image.js";

import { server } from "../../config.js";

//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


export default function Hamburger() {
  return(
    <div className="target relative md:hidden mr-10 h-7 w-7">
      <Image src={server + "/hamburger.svg"} id="hamburger" alt="Hamburger" layout="fill"/>
    </div>
  );
}