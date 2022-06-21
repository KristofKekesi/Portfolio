import { useEffect } from 'react';

import Navbar from '../components/Navbar/Navbar';
import Cursor from '../components/Cursor/Cursor';
import Dock from '../components/Dock/Dock';
import Head from '../components/Head/Head';

import navbarToggle from '../functions/navbar.js';
import cursorSetup from '../functions/cursor.js';
import projectTooltipPosition from '../functions/project-tooltip-position.js';
import setProjectTooltipState from '../functions/project-tooltip-state.js';

import { defaultDockElementIDs, server } from "../config";


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


export default function Home({ dockElements, keywords }) {
	useEffect(() => {
		navbarToggle();
		cursorSetup();
		//setImageGalleries();
		
		projectTooltipPosition();
		dockElements.map(dockElement => {setProjectTooltipState(dockElement[0].id);});

		console.log("%cHello there!", "color:#ffffff;font-family:system-ui;font-size:2rem;font-weight:bold;text-shadow:2px 2px 0 #5ebd3e, 4px 4px 0 #ffbb00, 6px 6px 0 #f78400, 8px 8px 0 #e23838, 10px 10px 0 #973999, 12px 12px 0 #009cdf");
	}, []);

	return (
		<>
			<Head title="Kristóf Kékesi" keywords={ keywords } />

			<Navbar />

			<main className="w-full h-screen flex absolute justify-center bg-cover" style={{backgroundImage: "url('bg.jpeg')"}}>
				<div className="w-max">
				<h1 className="text-white text-7xl font-bold text-left font-interBold" style={{paddingTop: "33vh", textShadow: "6px 6px 12px rgba(0, 0, 0, .5)"}}>Kristóf Kékesi</h1>
				<h2 className="text-white text-4xl font-bold text-left font-interBold" style={{textShadow: "6px 6px 12px rgba(0, 0, 0, .5)"}}>
					Mobile Developer
					<span className="text-xl ml-5 italic" style={{color: "#ffffff"}}>[from Hungary]</span>
				</h2>
				</div>
			</main>

			<Dock elements={ dockElements } />

			<Cursor />
		</>
	)
}


export const getStaticProps = async ( _ ) => {
	const dockElements = [];
	for (let i = 0; i < defaultDockElementIDs.length; i++) {
		const projectResponse = await fetch(server + "/api/projects?id=" + defaultDockElementIDs[i]);
		const project = await projectResponse.json();

		dockElements.push(project);
	}

    const response = await fetch(server + "/api/keywords");
    const keywords = await response.json();

	return {
		props: { dockElements: dockElements, keywords: keywords.join(", ")},
	};
};