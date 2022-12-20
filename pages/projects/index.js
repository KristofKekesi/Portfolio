import { useEffect } from 'react';

import Navbar from "../../components/Navbar/Navbar";
import Dock from "../../components/Dock/Dock";
import Footer from "../../components/Footer/Footer";
import Cursor from "../../components/Cursor/Cursor";
import AutoHead from '../../components/Head/Head';

import navbarToggle from "../../functions/navbar";
import cursorSetup from "../../functions/cursor";
import setProjectTooltipState from '../../functions/project-tooltip-state';
import projectTooltipPosition from '../../functions/project-tooltip-position';

import { defaultDockElementIDs } from "../../config";
import getProjects from '../../functions/api/projects';
import getKeywords from '../../functions/api/keywords';


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


export default function Timeline({ projects, projectTypes, dockElements, keywords }) {
	useEffect(() => {
		navbarToggle();
		cursorSetup();
		//setImageGalleries();
	
		projectTooltipPosition();
		dockElements.map(
			dockElement => {setProjectTooltipState(dockElement[0].id);}
		);

		console.log("%cHello there!\n\n%cIf you are interested in the source code check out this site's repo at https://www.github.com/KristofKekesi/Portfolio.", "color:#ffffff;font-family:system-ui;font-size:2rem;font-weight:bold;text-shadow:2px 2px 0 #5ebd3e, 4px 4px 0 #ffbb00, 6px 6px 0 #f78400, 8px 8px 0 #e23838, 10px 10px 0 #973999, 12px 12px 0 #009cdf", "color:auto;font-size:1rem; font-family:monospace;");
	} , [dockElements]);

	return (
		<>
			<AutoHead title="Projects" description="Every project I've ever worked on." keywords={ keywords } />

			<Navbar />

			<main>
				<center className="w-screen bg-cover" style={{paddingTop: "150px", paddingBottom: "75px", backgroundImage: `url('bg.jpeg')`}}>
					<div className="w-max">
						<h1 className="text-white text-7xl font-bold text-left font-interBold" style={{paddingTop: "0vh", textShadow: "6px 6px 12px rgba(0, 0, 0, .5)"}}>Projects</h1>
					</div>
				</center>
                {projectTypes}
                {projects.map(project => {
                    return project.name
                })}
			</main>

			<Dock elements={ dockElements } />
			<Footer />
			<Cursor />
		</>
	)
}


export const getStaticProps = async ( _ ) => {
	const projects = await getProjects();

    let projectTypes = [];
    projects.forEach(project => {
        projectTypes = [...new Set([...projectTypes,...project.skills])]
        console.log(projectTypes)
    });

	const dockElements = [];
	for (let i = 0; i < defaultDockElementIDs.length; i++) {
		const project = await getProjects(defaultDockElementIDs[i])
		
		dockElements.push(project);
	}

    const keywords =  await getKeywords();

	return {
		props: { projects: projects, projectTypes: projectTypes, dockElements: dockElements, keywords: keywords.join(", ")},
	};
};