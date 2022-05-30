import Link from 'next/link';
import { useRouter } from 'next/router';


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)

export default function NavbarLink(props) {
    const router = useRouter();

    if (router.pathname === "/" && props.path === "/") {
        return (
            <Link href={ props.path }>
                <a className="target text-homeAccentLight font-normal font-interBold md:font-bold">{ props.children }</a>
            </Link>
        );
    } else if (router.pathname !== "/" && props.path === "/") {
        return (
            <Link href={ props.path }>
                <a className="text-homeAccentLight font-normal font-interBold md:font-bold">{ props.children }</a>
            </Link>
        );
    } else if (router.pathname === props.path) {
        return (
            <Link href={ props.path }>
                <a className="text-white md:text-activeAccentLight font-normal md:font-bold">{ props.children }</a>
            </Link>
        );
    } else {
        return (
            <Link href={ props.path }>
                <a className="target text-white md:text-black">{ props.children }</a>
            </Link>
        );
    }
}