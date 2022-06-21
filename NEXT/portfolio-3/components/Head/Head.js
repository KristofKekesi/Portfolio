import Head from "next/head";
import Script from 'next/script';

import { defaultDescription, defaultOpenGraphImage, defaultFavicon, server } from "../../config";


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


export default function AutoHead(props) {
    const description = props.description || defaultDescription;
    const opengraph = props.opengraph || defaultOpenGraphImage;
    const favicon = props.favicon || defaultFavicon;
    const keywords = props.keywords;
    const title = props.title;

    return (
        <Head>
				<meta charSet="utf-8" />

				<link rel="icon" href={ favicon } />

				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="theme-color" content="#ffffff" />

				<meta name="author" content="Kristóf Kékesi" />
				<meta name="description" content={ description } />
				<meta name="keywords" content={ keywords } />

				<meta name="twitter:card" content="summary" />
				<meta name="twitter:site" content="@KristofKekesi" />
				<meta name="twitter:title" content="Kristóf Kékesi" />
				<meta name="twitter:description" content={ description.replace( /(<([^>]+)>)/ig, '') } />
				<meta name="twitter:image" content={ opengraph } />

				<meta name="og:url" content={ server } />
				<meta name="og:type" content="website" />
				<meta name="og:description" content={ description.replace( /(<([^>]+)>)/ig, '') } />
				<meta name="og:image" content={ opengraph } />

				<link rel="apple-touch-icon" href={ favicon } />
				<link rel="manifest" href={ server + "/manifest.json" } />

				<Script async="" src="https://www.googletagmanager.com/gtag/js?id=G-NMTQ12KGY9"></Script>

				<title>{ title.replace( /(<([^>]+)>)/ig, '') }</title>
			</Head>
    );
}