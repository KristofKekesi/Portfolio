import { useEffect } from 'react';

import Link from 'next/link';

import Navbar from "../components/Navbar/Navbar";
import Dock from "../components/Dock/Dock";
import Footer from "../components/Footer/Footer";
import Cursor from "../components/Cursor/Cursor";
import Head from '../components/Head/Head';

import navbarToggle from "../functions/navbar";
import cursorSetup from "../functions/cursor";
import setProjectTooltipState from '../functions/project-tooltip-state';
import projectTooltipPosition from '../functions/project-tooltip-position';

import { defaultDockElementIDs, server } from "../config";


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


export default function Home({ timestamps, dockElements, keywords }) {
	useEffect(() => {
		navbarToggle();
		cursorSetup();
		//setImageGalleries();
	
		projectTooltipPosition();
		dockElements.map(
			dockElement => {setProjectTooltipState(dockElement[0].id);}
		);

		console.log("%cHello there!\n\n%cIf you are interested in the source code check out this site's repo at https://www.github.com/KristofKekesi/Portfolio.", "color:#ffffff;font-family:system-ui;font-size:2rem;font-weight:bold;text-shadow:2px 2px 0 #5ebd3e, 4px 4px 0 #ffbb00, 6px 6px 0 #f78400, 8px 8px 0 #e23838, 10px 10px 0 #973999, 12px 12px 0 #009cdf", "color:auto;font-size:1rem; font-family:monospace;");
	} , []);

	timestamps.map(timestamp => {
		timestamp.date = new Date(timestamp.date);
	});

	const years = [];
	timestamps.forEach(timestamp => {
		if (!years.includes(timestamp.date.getFullYear())) {
			years.push(timestamp.date.getFullYear());
		}
	});
	console.log(years);

	const yearpicker = <div className="hidden md:flex mt-10 flex-col">
		{years.map(year => {
			return (
				<Link href={ "#" + year } key={ year }>
					<a className="text-title target">{ year }</a>
				</Link>
			);
		})}
	</div>;

	let lastYear = null;
	const timeline2 = <>
		{//<div className="sticky mt-10 hidden md:flex" style={{backgroundImage: `url('bg.jpeg')`, top: "50px", left: "0px", width: "1rem", height: "calc(100vh)", marginBottom: "40px"}}><div className="sticky blur-dark" style={{width: "1rem", height: "100"}}></div></div>
		
		}<div>
			{ timestamps.map(timestamp => {
				if (lastYear !== timestamp.date.getFullYear()) {
					lastYear = timestamp.date.getFullYear();
					console.log(lastYear);
					return (
						<div className="m-10 section">
							<div className="h-px mb-10" />
							<div id="2004" className="text-title selectable">{ timestamp.date.getFullYear() }</div>
							<div className="text selectable">Born</div>
							<div className="h-px mt-10" />
						</div>
					);
				}
			})}
		</div>
	</>;

	const timeline = <article id="timeline" className="flex flex-nowrap flex-row items-start justify-center bg-white">
		{ yearpicker }
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
			{ //timeline2
			}
		</div>
	</article>

	return (
		<>
			<Head title="timeline" description="" keywords={ keywords } />

			<Navbar />

			<main>
			<center className="w-screen bg-cover" style={{paddingTop: "150px", paddingBottom: "75px", backgroundImage: `url('bg.jpeg')`}}>
			<div className="w-max">
			<h1 className="text-white text-7xl font-bold text-left font-interBold" style={{paddingTop: "0vh", textShadow: "6px 6px 12px rgba(0, 0, 0, .5)"}}>Timeline</h1>
			</div>
			</center>
			{ timeline }
			</main>

			<Dock elements={ dockElements } />
			<Footer />

			<Cursor />
		</>
	)
}


export const getStaticProps = async ( _ ) => {
	const timestampsResponse = await fetch(server + "/api/timeline");
	let timestamps = await timestampsResponse.json();

	const dockElements = [];
	for (let i = 0; i < defaultDockElementIDs.length; i++) {
		const projectResponse = await fetch(server + "/api/projects?id=" + defaultDockElementIDs[i]);
		const project = await projectResponse.json();
		
		dockElements.push(project);
	}

	const response = await fetch(server + "/api/keywords");
    const keywords = await response.json();

	return {
		props: { timestamps: timestamps, dockElements: dockElements, keywords: keywords.join(", ")},
	};
};