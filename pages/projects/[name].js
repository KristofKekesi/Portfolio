import { useEffect } from 'react';
import { QRCodeSVG } from "qrcode.react";

import ExBundle from '../../components/ExBundle/ExBundle';
import Navbar from '../../components/Navbar/Navbar';
import Cursor from '../../components/Cursor/Cursor';
import ImageGallery from '../../components/ImageGallery/ImageGallery';
import Dock from '../../components/Dock/Dock';
import Footer from '../../components/Footer/Footer';
import AutoHead from '../../components/Head/Head';
import Badges from '../../components/Badges/Badges';
import Award from '../../components/Award/Award';
import Label from '../../components/Label/Label';

import cursorSetup from '../../functions/cursor.js';
import navbarToggle from '../../functions/navbar.js';
import setCopyright from '../../functions/copyright';
import setImageGalleries from '../../functions/image-gallery';
import projectTooltipPosition from '../../functions/project-tooltip-position.js';
import setProjectTooltipState from '../../functions/project-tooltip-state.js';

import { defaultDockElementIDs, server } from "../../config";
import getProjects from '../../functions/api/projects';


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


export const getStaticPaths = async () => {
	const projects = await getProjects();

	const paths = [];
	for (let i = 0; i < projects.length; i++) {
		paths.push("/projects/" + projects[i].name);
	}

	return {
		paths: paths,
		fallback: false, 
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
	} , [project.logo, project.screenshots, dockElements]);

    // awards
    let awardsDiv = null;
    if (project.awards.length != 0) {
        let awards = [];
        project.awards.forEach((awardName) => {
            awards.push(<Award awardName={awardName} key={awardName} />);
        });

        awardsDiv = <div className="section">
            <div className="mt-10 h-px" />
            <h1 className="text-title selectable">Awards</h1>
            <div className="flex flex-wrap gap-3 gap-x-12 mx-12">
                {awards}
            </div>
            <div className="mt-12 h-px" />
        </div>
    }

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
            <AutoHead title={ project.name } description={ project.description } keywords={ keywords } />

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
                                <div className="w-auto h-auto ml-12 mr-0 py-12" style={{width: "7.5rem", height: "7.5rem"}}>
                                    <div className="relative flex items-center justify-center" style={{width: "7.5rem", height: "7.5rem"}}>
                                        <QRCodeSVG value={ project.downloads[0].value } bgColor={"#ffffff"} level={"Q"} className="fade2 bg-transparent absolute" style={{width: "7.5rem", height: "7.5rem", boxSizing: "content-box"}}/>
                                        <img src={ project.logo.url } alt={ project.name } className="fade1 absolute" style={{maxWidth: "7.5rem", maxHeight: "7.5rem", boxSizing: "content-box"}}></img>
                                    </div>
                                </div>
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
                        { awardsDiv }
                        <ExBundle title={"Tools that I used while working on " + project.name}>
                            {project.tools.map((tool) => {
                                tool.label = <Label size="xl" theme="dark" image={tool.logo} name={tool.name} selectable />
                                return tool
                            })}
                        </ExBundle>
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
	const project = await getProjects(undefined, params.params.name);

	const keywords = ["Kristóf Kékesi"];
	keywords.push.apply(keywords, project[0].skills);
    project[0].tools.forEach(tool => {
        keywords.push(tool.name);
    });

    const dockElements = [];
	for (let i = 0; i < defaultDockElementIDs.length; i++) {
		const project = await getProjects(defaultDockElementIDs[i]);
	
		dockElements.push(project);
	}

	return {
		props: { project: project[0], dockElements: dockElements, keywords: keywords.join(", ")},
	};
};