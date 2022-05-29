import Image from 'next/image';
import hamburgerImage from './hamburger.svg'


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


export default function Hamburger() {
  return(
    <div className="target relative md:hidden mr-10 h-7 w-7">
      <Image src={ hamburgerImage } id="hamburger" alt="Hamburger" layout="fill" objectFit="contain" />
    </div>
  );
}