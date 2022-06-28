import {useEffect} from 'react';

import MadeWith from '../../components/MadeWith/MadeWith';
import Navbar from '../../components/Navbar/Navbar';
import Cursor from '../../components/Cursor/Cursor';
import ImageGallery from '../../components/ImageGallery/ImageGallery';
import Dock from '../../components/Dock/Dock';
import Footer from '../../components/Footer/Footer';
import Head from '../../components/Head/Head';
import Badges from '../../components/Badges/Badges';

import cursorSetup from '../../functions/cursor.js';
import navbarToggle from '../../functions/navbar.js';
import setCopyright from '../../functions/copyright';
import setImageGalleries from '../../functions/image-gallery';
import projectTooltipPosition from '../../functions/project-tooltip-position.js';
import setProjectTooltipState from '../../functions/project-tooltip-state.js';

import { defaultDockElementIDs, server } from "../../config";


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


export const getStaticPaths = async () => {
	const response = await fetch(server + "/api/projects");
	const projects = await response.json();

	const paths = [];
	for (let i = 0; i < projects.length; i++) {
		paths.push(projects[i].name);
	}

	return {
		paths: [],
		fallback: "blocking", 
	}
}


export default function ArticlePage({ project, dockElements, keywords }) {
	useEffect(() => {
		navbarToggle();
		cursorSetup();
		setCopyright([project.logo, project.screenshots]);
		setImageGalleries();
    
		projectTooltipPosition();
		dockElements.map(dockElement => {setProjectTooltipState(dockElement[0].id);});

		console.log("%cHello there!\n\n%cIf you are interested in the source code check out this site's repo at https://www.github.com/KristofKekesi/Portfolio.", "color:#ffffff;font-family:system-ui;font-size:2rem;font-weight:bold;text-shadow:2px 2px 0 #5ebd3e, 4px 4px 0 #ffbb00, 6px 6px 0 #f78400, 8px 8px 0 #e23838, 10px 10px 0 #973999, 12px 12px 0 #009cdf", "color:auto;font-size:1rem; font-family:monospace;");
	} , []);

    // version
    let versionDiv = null;
    if (project.version != null) {
        versionDiv = <>
            <h1 className="text-subtitle selectable pb-0">
                Latest version
            </h1>
            <div className="text selectable">{project.version}</div>
        </>;
    }

    // platforms
    let platformDiv = null;
    if (project.platforms.length > 0) {
        platformDiv = <>
            <h1 className="text-subtitle selectable pb-0">Available for</h1>
            <div className="text selectable">{project.platforms.join(", ").replace(/,([^,]*)$/, ' and $1')}</div>
        </>;
    }

	return (
		<>	
            <Head title={ project.name } description={ project.description } keywords={ keywords } />

			<Navbar />

			<main>
				<center className="w-full bg-cover" style={{paddingTop: "150px", paddingBottom: "75px", backgroundImage: "url(" + server + "/bg.jpeg)"}}>
					<div className="w-max">
					<h1
						className="text-white text-7xl font-bold text-left font-interBold"
						style={{paddingTop: "0vh", textShadow: "6px 6px 12px rgba(0, 0, 0, .5)"}}
					>
                        { project.name }
                    </h1>
					</div>
				</center>
                <article>
                    <div className="article-content">
                        <h1 className="text-title nosection selectable">{ project.name }</h1>
                        <div className="text nosection selectable">{ project.description }</div>
                        <div className="section">
                            <div className="flex">
                                <img src={ server + "/" + project.logo.path } alt={ project.name } className="w-auto h-auto ml-12 mr-0 py-12" style={{maxWidth: "7.5rem", maxHeight: "7.5rem", boxSizing: "content-box"}}></img>
                                <div>
                                    <div className="mt-8 h-px" />
                                    { versionDiv }
                                    <h1 className="text-subtitle selectable pb-0">Worked on as</h1>
                                    <div className="text selectable">{ project.roles.join(", ").replace(/,([^,]*)$/, ' and $1') }</div>
                                    { platformDiv }
                                    <div className="mb-4 h-px" />
                                    <div className="hidden sm:block">
                                        <Badges className="mx-20 mb-20" downloads={project.downloads} projectName={project.name} />
                                    </div>
                                </div>
                            </div>
                            <div className="block sm:hidden">
                                <Badges className="mx-20 mb-20" downloads={project.downloads} projectName={project.name} />
                            </div>
                            <div className="mt-12 h-px" />
                        </div>
                        <ImageGallery galleryTag={"max"} className={"nosection"} images={project.screenshots}/>
                        <MadeWith tools={project.tools} title={"Tools that I used while working on " + project.name} />
                        <div className="mt-10 h-px" />
                    </div>
                </article>
			</main>

			<Dock elements={ dockElements } />
			<Footer />

			<Cursor />

		</>
	);
}


export const getStaticProps = async ( params ) => {
	const projectResponse = await fetch(server + "/api/projects?name=" + encodeURIComponent(params.params.name));
	const project = await projectResponse.json();

    console.log(project);
    console.log(params.params.name)

	const keywords = ["Kristóf Kékesi"];
	keywords.push.apply(keywords, project[0].skills);
    project[0].tools.forEach(tool => {
        keywords.push(tool.name);
    });

    const dockElements = [];
	for (let i = 0; i < defaultDockElementIDs.length; i++) {
		const projectResponse = await fetch(server + "/api/projects?id=" + encodeURIComponent(defaultDockElementIDs[i]));
		const project = await projectResponse.json();
	
		dockElements.push(project);
	}

	return {
		props: { project: project[0], dockElements: dockElements, keywords: keywords.join(", ")},
	};
};