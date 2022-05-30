import { useEffect } from 'react';

import Script from 'next/script';
import Head from 'next/head';

import Article from '../components/Article/Article';
import Navbar from '../components/Navbar/Navbar';
import Cursor from '../components/Cursor/Cursor';
import Dock from '../components/Dock/Dock';
import Footer from '../components/Footer/Footer';

import opengraphImage from '../public/opengraph.jpg';
import favicon from '../public/favicon.png';

import navbarToggle from '../functions/navbar.js';
import cursorSetup from '../functions/cursor.js';


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


export default function Home() {
  useEffect(() => {
    navbarToggle();
    cursorSetup();
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />

        <link rel="icon" href={favicon} />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />

        <meta name="author" content="Kristóf Kékesi" />
        <meta name="description" content="I'm Kristóf Kékesi, developer of Elements and more." />
        <meta name="keywords" content="HTML,CSS,JavaScript,Flutter,React,Dart,Programming,Programmer,Developer,Mobile,Web" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@KristofKekesi" />
        <meta name="twitter:title" content="Kristóf Kékesi" />
        <meta name="twitter:description" content="I'm Kristóf Kékesi, developer of Elements and more." />
        <meta name="twitter:image" content={opengraphImage}/>

        <meta name="og:url" content="%PUBLIC_URL%" />
        <meta name="og:type" content="website" />
        <meta name="og:description" content="I'm Kristóf Kékesi, developer of Elements and more." />
        <meta name="og:image" content={opengraphImage} />

        <link rel="apple-touch-icon" href={favicon} />
        <link rel="manifest" href="manifest.json" />

        <Script async="" src="https://www.googletagmanager.com/gtag/js?id=G-NMTQ12KGY9"></Script>

        <title>About Kristóf Kékesi</title>
      </Head>

        <Navbar />

        <main>
          <center className="w-full bg-cover" style={{paddingTop: "150px", paddingBottom: "75px", backgroundImage: `url('bg.jpeg')`}}>
          <div className="w-max">
          <h1 className="text-white text-7xl font-bold text-left font-interBold" style={{paddingTop: "0vh", textShadow: "6px 6px 12px rgba(0, 0, 0, .5)"}}>About</h1>
          </div>
          </center>
          <Article id="13"></Article>
        </main>

        <Dock />
        <Footer />

        <Cursor />
    </>
  )
}
