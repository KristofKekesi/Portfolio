import { useEffect } from 'react';

import Script from 'next/script';
import Head from 'next/head';
import Link from 'next/link';

import opengraphImage from '../public/opengraph.jpg';
import favicon from '../public/favicon.png';

import Navbar from "../components/Navbar/Navbar";
import Dock from "../components/Dock/Dock";
import Footer from "../components/Footer/Footer";
import Cursor from "../components/Cursor/Cursor";

import navbarToggle from "../functions/navbar";
import cursorSetup from "../functions/cursor";


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

  let timeline = <article id="timeline" className="flex flex-nowrap flex-row items-start justify-center bg-white">
        <div className="hidden md:flex mt-10 flex-col">
            <Link href="#2004">
                <a className="text-title target">2004</a>
            </Link>
            <Link href="#2015">
                <a className="text-title target">2015</a>
            </Link>
            <Link href="#2018">
                <a className="text-title target">2018</a>
            </Link>
            <Link href="#2019">
                <a className="text-title target">2019</a>
            </Link>
            <Link href="#2020">
                <a className="text-title target">2020</a>
            </Link>
            <Link href="#2021">
                <a className="text-title target">2021</a>
            </Link>
            <Link href="#2022">
                <a className="text-title target">2022</a>
            </Link>
            <Link href="#2023">
                <a className="text-title target">2023</a>
            </Link>
        </div>
        <div className="sticky mt-10 hidden md:flex" style={{backgroundImage: `url('bg.jpeg')`, top: "50px", left: "0px", width: "1rem", height: "calc(100vh)", marginBottom: "40px"}}><div className="sticky blur-dark" style={{width: "1rem", height: "100"}}></div></div>
        <div>
            <div className="m-10 section">
                <div className="h-px mb-10" />
                <div id="2004" className="text-title selectable">2004</div>
                <div className="text selectable">Born</div>
                <div className="h-px mt-10" />
            </div>
            <div className="m-10 section">
                <div className="h-px mb-10" />
                <div id="2015" className="text-title selectable">2015</div>
                <div className="text selectable">Started learning English</div>
                <div className="h-px mt-10" />
            </div>
            <div className="m-10 section">
                <div className="h-px mb-10" />
                <div id="2018" className="text-title selectable">2018</div>
                <div className="text selectable">Started learning <abbr className="target" title="HyperText Markup Language">HTML</abbr>, <abbr className="target" title="Cascadian Style Sheet">CSS</abbr> and JavaScript</div>
                <div className="h-px mt-10" />
            </div>
            <div className="m-10 section">
                <div className="h-px mb-10" />
                <div id="2019" className="text-title selectable">2019</div>
                <div className="text-subtitle selectable" style={{paddingTop: "0"}}>December</div>
                <div className="text selectable">Started learning Flutter and Dart</div>
                <div className="h-px mt-10" />
            </div>
            <div className="m-10 section">
                <div className="h-px mb-10" />
                <div id="2020" className="text-title selectable">2020</div>
                <div className="text-subtitle selectable" style={{paddingTop: "0"}}>May</div>
                <div className="text-subsubtitle selectable">May 16</div>
                <div className="text selectable">Translated Notepads to Hungarian</div>
                <div className="text-subtitle selectable">July</div>
                <div className="text-subsubtitle selectable">July 6</div>
                <div className="text selectable">Released Elements version 0.1</div>
                <div className="text-subsubtitle selectable">July 12</div>
                <div className="text selectable">Released Elements version 0.2</div>
                <div className="text-subsubtitle selectable">July 22</div>
                <div className="text selectable">Released NASA Mira 0.1</div>
                <div className="text-subsubtitle selectable">July 24</div>
                <div className="text selectable">Released kekesi.dev</div>
                <div className="text-subsubtitle selectable">July 29</div>
                <div className="text selectable">Released NASA Mira 1.0</div>
                <div className="text-subtitle selectable">August</div>
                <div className="text-subsubtitle selectable">August 2</div>
                <div className="text selectable">Released Elements version 0.3</div>
                <div className="text-subtitle selectable">September</div>
                <div className="text-subsubtitle selectable">September 1</div>
                <div className="text selectable">Released Elements version 0.4</div>
                <div className="text-subtitle selectable">October</div>
                <div className="text-subsubtitle selectable">October 16</div>
                <div className="text selectable">Translated Files to Hungarian</div>
                <div className="text-subtitle selectable">November</div>
                <div className="text-subsubtitle selectable">November 9</div>
                <div className="text selectable">Translated Ambie to Hungarian</div>
                <div className="text-subtitle selectable">December</div>
                <div className="text-subsubtitle selectable">December 8</div>
                <div className="text selectable">Translated Quick Pad to Hungarian</div>
                <div className="text-subsubtitle selectable">December 14</div>
                <div className="text selectable">Released Preacher</div>
                <div className="h-px mt-10" />
            </div>
            <div className="m-10 section">
                <div className="h-px mb-10" />
                <div id="2021" className="text-title selectable">2021</div>
                <div className="text-subtitle selectable" style={{paddingTop: "0"}}>February</div>
                <div className="text-subsubtitle selectable">February 15</div>
                <div className="text selectable">Translated Replica to Hungarian</div>
                <div className="text-subsubtitle selectable">February 17</div>
                <div className="text selectable">Translated Quick Picture Viewer to Hungarian</div>
                <div className="text-subtitle selectable">March</div>
                <div className="text-subsubtitle selectable">March 2</div>
                <div className="text selectable">Translated DogeHouse to Hungarian</div>
                <div className="text-subsubtitle selectable">March 19</div>
                <div className="text selectable">Released Elements version 1.0</div>
                <div className="text-subtitle selectable">April</div>
                <div className="text-subsubtitle selectable">April 13</div>
                <div className="text selectable">Released NASA Mira 2</div>
                <div className="text-subsubtitle selectable">April 16</div>
                <div className="text selectable">Translated Vinyls to Hungarian</div>
                <div className="text-subtitle selectable">June</div>
                <div className="text selectable">Started learning React</div>
                <div className="text-subtitle selectable">September</div>
                <div className="text selectable">Math and <abbr className="target" title="Computer Science">CS</abbr> Major</div>
                <div className="text-subtitle selectable">October</div>
                <div className="text-subsubtitle selectable">October 26</div>
                <div className="text selectable">Graduated from <abbr className="target" title="Computer Science">CS</abbr> level B</div>
                <div className="text-subtitle selectable">December</div>
                <div className="text-subsubtitle selectable">December 23</div>
                <div className="text selectable">Translated Navi to Hungarian</div>
                <div className="h-px mt-10" />
            </div>
            <div className="m-10 section">
                <div className="h-px mb-10" />
                <div id="2022" className="text-title selectable">2022</div>
                <div className="text-subtitle selectable" style={{paddingTop: "0"}}>March</div>
                <div className="text-subsubtitle selectable">March 6</div>
                <div className="text selectable">Translated Posture Pal to Hungarian</div>
                <div className="text-subsubtitle selectable">March 10</div>
                <div className="text selectable">Released NASA Mira version 3</div>
                <div className="h-px mt-10" />
            </div>
            <div className="m-10 section">
                <div className="h-px mb-10" />
                <div id="2023" className="text-title selectable">2023</div>
                <div className="text selectable">Graduating from Chernel István High School Hungary</div>
                <div className="h-px mt-10" />
            </div>
        </div>
        </article>

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

        <title>Timeline</title>
      </Head>

        <Navbar />

        <main>
          <center className="w-full bg-cover" style={{paddingTop: "150px", paddingBottom: "75px", backgroundImage: `url('bg.jpeg')`}}>
          <div className="w-max">
          <h1 className="text-white text-7xl font-bold text-left font-interBold" style={{paddingTop: "0vh", textShadow: "6px 6px 12px rgba(0, 0, 0, .5)"}}>Timeline</h1>
          </div>
          </center>
          {timeline}
        </main>

        <Dock />
        <Footer />

        <Cursor />
    </>
  )
}