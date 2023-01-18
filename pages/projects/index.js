import { useEffect } from 'react';
import Link from 'next/link';

import Navbar from "../../components/Navbar/Navbar";
import Dock from "../../components/Dock/Dock";
import Footer from "../../components/Footer/Footer";
import Cursor from "../../components/Cursor/Cursor";
import AutoHead from '../../components/Head/Head';
import ExBundle from '../../components/ExBundle/ExBundle';
import Label from '../../components/Label/Label';

import navbarToggle from "../../functions/navbar";
import cursorSetup from "../../functions/cursor";
import setProjectTooltipState from '../../functions/project-tooltip-state';
import projectTooltipPosition from '../../functions/project-tooltip-position';

import { defaultDockElementIDs } from "../../config";
import getProjects from '../../functions/api/projects';
import getBundles from '../../functions/api/bundles';
import getKeywords from '../../functions/api/keywords';


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


export default function ProjectsPage({ projects, bundles, dockElements, keywords }) {
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

	console.log(bundles);

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
				<article>
					<div className="article-content">
						<h1 className="text-title nosection selectable">Projects</h1>
                        <div className="text nosection selectable">
							Use the selectors below to filter the projects.
							<div className="article-content flex flex-wrap gap-y-2 gap-x-2 md:px-0 pt-2 -mx-4 items-center">
								<div className="md:inline hidden">Filter by: </div> 
								<Link href="#skills"><div className="rounded-full text-base font-normal font-inter bg-secondaryLight text-black px-3 line-clamp-1 target">Skills</div></Link>
								<Link href="#bundles"><div className="rounded-full text-base font-normal font-inter bg-secondaryLight text-black px-3 line-clamp-1 target">Bundles</div></Link>
								<Link href="#tools"><div className="rounded-full text-base font-normal font-inter bg-secondaryLight text-black px-3 line-clamp-1 target">Tools</div></Link>
							</div>
						</div>
						<div className="section">
							<ExBundle id="all"
								children={projects.map((project) => {
									project.label = <Label size="xl" theme="dark" name={project.name} image={project.logo} selectable cropName />
									project.type = "";
									return project;
								})}
								title={"All Projects"}
							/>
						</div>
						<div id="skills">
							<div className="text-title nosection selectable">
								Skill based sections
							</div>
							<div className="section">
								<ExBundle id="translating"
									children={projects.filter((project) => {
										if (project.skills.includes("Translating")) {
										project.label = <Label size="xl" theme="dark" name={project.name} image={project.logo} selectable cropName />
										project.type = "";
										return project;
										}
									})}
									title={"Translations"}
								/>
							</div>
							<div className="section">
								<ExBundle id="mobile"
									children={projects.filter((project) => {
										if (project.skills.includes("Mobile Development")) {
										project.label = <Label size="xl" theme="dark" name={project.name} image={project.logo} selectable cropName />
										project.type = "";
										return project;
										}
									})}
									title={"Mobile Development"}
								/>
							</div>
							<div className="section">
								<ExBundle id="web"
									children={projects.filter((project) => {
										if (project.skills.includes("Web Development")) {
										project.label = <Label size="xl" theme="dark" name={project.name} image={project.logo} selectable cropName />
										project.type = "";
										return project;
										}
									})}
									title={"Web Development"}
								/>
							</div>
						</div>
						<div id="bundles">
							<div className="text-title nosection selectable">
								Bundle based sections
							</div>
							{bundles.map((bundle) => {
								return <ExBundle
									key={bundle.id}
									title={bundle.name}
									children={bundle.projects.map((project) => {
										project.label = <Label size="xl" theme="light" name={project.name} image={project.logo} selectable cropName />
										project.type = "";
										return project;
									})}
									background={bundle.background}
									theme="light"
								/>;
							})}
						</div>
						<div id="tools">
							<div className="text-title nosection selectable">
								Tool based sections
							</div>
						</div>
					</div>
				</article>
			</main>

			<Dock elements={ dockElements } />
			<Footer />
			<Cursor />
		</>
	)
}


export const getStaticProps = async ( _ ) => {
	const projects = await getProjects();
	const bundles = await getBundles();

	const dockElements = [];
	for (let i = 0; i < defaultDockElementIDs.length; i++) {
		const project = await getProjects(defaultDockElementIDs[i])
		
		dockElements.push(project);
	}

    const keywords =  await getKeywords();

	console.log(projects[0])

	return {
		props: { projects: projects, bundles: bundles, dockElements: dockElements, keywords: keywords.join(", ")},
	};
};