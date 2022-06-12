import {useEffect} from 'react';

import Script from 'next/script';
import Head from 'next/head';

import Article from '../components/Article/Article';
import Navbar from '../components/Navbar/Navbar';
import Cursor from '../components/Cursor/Cursor';
import Dock from '../components/Dock/Dock';
import Footer from '../components/Footer/Footer';

import navbarToggle from '../functions/navbar.js';
import cursorSetup from '../functions/cursor.js';
import setImageGalleries from '../functions/image-gallery';

import { server } from "../config";



//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


export const getStaticPaths = async () => {
	const response = await fetch(server + "/api/articles");
	const articles = await response.json();

	const paths = [];
	for (let i = 0; i < articles.length; i++) {
		paths.push(articles[i].redirect || articles[i].id);
	}

	return {
		paths: [],
		fallback: "blocking", 
	}
}

export default function ArticlePage({ article, dockElements }) {
	console.log(dockElements);

	const keywords = ["Kristóf Kékesi"];
	keywords.push.apply(keywords, article.skills);
	for (let i = 0; i < article.tools.length; i++) {
		keywords.push(article.tools[i].name);
	}

	useEffect(() => {
		navbarToggle();
		cursorSetup();
		setImageGalleries();
	} , []);

	return (
		<>	
			<Head>
				<meta charSet="utf-8" />

				<link rel="icon" href={server + "/favicon.png"} />

				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="theme-color" content="#ffffff" />

				<meta name="author" content="Kristóf Kékesi" />
				<meta name="description" content={ article.description.replace( /(<([^>]+)>)/ig, '') } />
				<meta name="keywords" content={ keywords.join(",") }/>

				<meta name="twitter:card" content="summary" />
				<meta name="twitter:site" content="@KristofKekesi" />
				<meta name="twitter:title" content="Kristóf Kékesi" />
				<meta name="twitter:description" content={ article.description.replace( /(<([^>]+)>)/ig, '') } />
				<meta name="twitter:image" content={server + "/opengraph.jpg"}/>

				<meta name="og:url" content={ server } />
				<meta name="og:type" content="website" />
				<meta name="og:description" content={ article.description.replace( /(<([^>]+)>)/ig, '') } />
				<meta name="og:image" content={ server + "/opengraph.jpg" } />

				<link rel="apple-touch-icon" href={server + "/favicon.png"} />
				{//<link rel="manifest" href={server + "/manifest.json"} />
				}

				<Script async="" src="https://www.googletagmanager.com/gtag/js?id=G-NMTQ12KGY9"></Script>

				<title>{ article.name.replace( /(<([^>]+)>)/ig, '') }</title>
			</Head>


			<Navbar />

			<main>
				<center className="w-full bg-cover" style={{paddingTop: "150px", paddingBottom: "75px", backgroundImage: `url('bg.jpeg')`}}>
					<div className="w-max">
					<h1
						className="text-white text-7xl font-bold text-left font-interBold"
						style={{paddingTop: "0vh", textShadow: "6px 6px 12px rgba(0, 0, 0, .5)"}}
						dangerouslySetInnerHTML={{__html: article.name.replace( /(<([^>]+)>)/ig, '')}}
					></h1>
					</div>
				</center>
				<Article content={article.content} />
			</main>

			<Dock />
			<Footer />

			<Cursor />
		</>
	);
}

export const getStaticProps = async ( params ) => {
	const articleResponse = await fetch(server + "/api/articles?redirect=" + params.params.article);
	const article = await articleResponse.json();

	//TODO: custom dock elements from articles
	const dockElementIDs = [1, 2, 5, 9, 6];
	const dockElements = [];
	for (let i = 0; i < dockElementIDs.length; i++) {
		const projectResponse = await fetch(server + "/api/projects?id=" + dockElementIDs[i]);
		const project = await projectResponse.json();
		console.log(project);
		dockElements.push(project);
	}

	return {
		props: { article: article[0], dockElements: dockElements},
	};
};