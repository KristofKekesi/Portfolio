import Link from 'next/link';
import { useRouter } from 'next/router';


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)

export default function NavbarLink(props) {
    const router = useRouter() ?? "";

    if (router.pathname === "/" && props.path === "/") {
        return (
            <a href={ props.path } className="target text-homeAccentLight font-normal font-interBold md:font-bold">{ props.children }</a>
        );
    } else if (router.pathname !== "/" && props.path === "/") {
        return (
            <a href={ props.path } className="text-homeAccentLight font-normal font-interBold md:font-bold">{ props.children }</a>
        );
    } else if (router.pathname === props.path) {
        return (
            <a href={ props.path } className="text-white md:text-activeAccentLight font-normal md:font-bold">{ props.children }</a>
        );
    } else {
        return (
            <a href={ props.path } className="target text-white md:text-black">{ props.children }</a>
        );
    }
}