import Image from 'next/image';
import hamburgerImage from '../../public/hamburger.svg'


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


export default function Hamburger() {
  return <Image src={hamburgerImage} id="hamburger"  className="target block md:hidden mr-10 h-10 w-10" alt="Hamburger" />;
}