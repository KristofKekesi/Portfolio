import Link from 'next/link';
import { useRouter } from 'next/router';


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)

export default function NavbarLink(props) {
    const router = useRouter();

    var href = "." + props.path;

    if (router.pathname === "/" && props.path === "/") {
        console.log("home");
        return (
            <Link href={ props.path }>
                <a className="target text-white md:text-homeAccentLight font-normal md:font-bold">{ props.children }</a>
            </Link>
        );
    } else if (router.pathname === props.path) {
        return (
            <Link href={ props.path } className="target text-white md:text-activeAccentLight font-normal md:font-bold">{ props.children }</Link>
        );
    } else {
        return (
            <Link className="target text-white md:text-black" href={ href }>{ props.children }</Link>
        );
    }
}