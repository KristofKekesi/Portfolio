import {useEffect} from 'react';

import Article from '../components/Article/Article';
import Navbar from '../components/Navbar/Navbar';
import Cursor from '../components/Cursor/Cursor';
import Dock from '../components/Dock/Dock';
import Footer from '../components/Footer/Footer';
import AutoHead from '../components/Head/Head';

import cursorSetup from '../functions/cursor.js';
import navbarToggle from '../functions/navbar.js';
import setCopyright from '../functions/copyright';
import setImageGalleries from '../functions/image-gallery';
import projectTooltipPosition from '../functions/project-tooltip-position.js';
import setProjectTooltipState from '../functions/project-tooltip-state.js';

import { defaultDockElementIDs, server } from "../config";
import MadeWith from '../components/MadeWith/MadeWith';

import getArticles from '../functions/api/articles';
import getProjects from '../functions/api/projects';


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


export default function ArticlePage({ article, dockElements, keywords }) {
	useEffect(() => {
		navbarToggle();
		cursorSetup();
		setCopyright(article.content);
		setImageGalleries();
    
		projectTooltipPosition();
		dockElements.map(dockElement => {setProjectTooltipState(dockElement[0].id);});

		console.log("%cHello there!\n\n%cIf you are interested in the source code check out this site's repo at https://www.github.com/KristofKekesi/Portfolio.", "color:#ffffff;font-family:system-ui;font-size:2rem;font-weight:bold;text-shadow:2px 2px 0 #5ebd3e, 4px 4px 0 #ffbb00, 6px 6px 0 #f78400, 8px 8px 0 #e23838, 10px 10px 0 #973999, 12px 12px 0 #009cdf", "color:auto;font-size:1rem; font-family:monospace;");
	} , [article.content, dockElements]);

	return (
		<>	
			<AutoHead title={ article.name } description={ article.description } keywords={ keywords } />

			<Navbar />

			<main>
				<center className="w-full bg-cover" style={{paddingTop: "150px", paddingBottom: "75px", backgroundImage: "url(" + server + "/bg.jpeg)"}}>
					<div className="w-max">
					<h1
						className="text-white text-7xl font-bold text-left font-interBold"
						style={{paddingTop: "0vh", textShadow: "6px 6px 12px rgba(0, 0, 0, .5)"}}
						dangerouslySetInnerHTML={{__html: article.name}}
					></h1>
					</div>
				</center>
				<Article content={ article.content } published={ article.releaseDate } edited={ article.lastModified } skills={ article.skills }>
                    <MadeWith tools={ article.tools } title="Tools I used" />
                </Article>
			</main>

			<Dock elements={ dockElements } />
			<Footer />

			<Cursor />

		</>
	);
}


export const getStaticProps = async ( params ) => {
	const article = await getArticles(14);

	let dockElementIDs;
	if (article[0].dockElements.length === 0) {
		dockElementIDs = defaultDockElementIDs;
	} else {
		dockElementIDs = article[0].dockElements;
	}

	const dockElements = [];
	for (let i = 0; i < dockElementIDs.length; i++) {
		const project = await getProjects(defaultDockElementIDs[i]);
	
		dockElements.push(project);
	}

	const keywords = ["Kristóf Kékesi"];
	keywords.push.apply(keywords, article[0].skills);
	for (let i = 0; i < article[0].tools.length; i++) {
		keywords.push(article[0].tools[i].name);
	}

	return {
		props: { article: article[0], dockElements: dockElements, keywords: keywords.join(", ")},
	};
};