import { useEffect } from 'react';

import Script from 'next/script';
import Head from 'next/head';

import Navbar from '../components/Navbar/Navbar';
import Cursor from '../components/Cursor/Cursor';
import Dock from '../components/Dock/Dock';

import opengraphImage from '../public/opengraph.jpg';
import favicon from '../public/favicon.png';

import navbarToggle from '../functions/navbar.js';
import cursorSetup from '../functions/cursor.js';

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

        <title>Kristóf Kékesi</title>
      </Head>

      <Navbar />

      <main className="w-full h-screen flex absolute justify-center bg-cover" style={{backgroundImage: "url('bg.jpeg')"}}>
        <div className="relative">
          <div className="w-max">
          <h1 className="text-white text-7xl font-bold text-left font-interBold" style={{paddingTop: "33vh", textShadow: "6px 6px 12px rgba(0, 0, 0, .5)"}}>Kristóf Kékesi</h1>
          <h2 className="text-white text-4xl font-bold text-left font-interBold" style={{textShadow: "6px 6px 12px rgba(0, 0, 0, .5)"}}>
            Mobile Developer
            <span className="text-xl ml-5 italic" style={{color: "#ffffffAA"}}>[from Hungary]</span>
          </h2>
        </div>
        </div>
      </main>

      <Dock />

      <Cursor />
    </>
  )
}
