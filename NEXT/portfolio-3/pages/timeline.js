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


const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export default function Timeline({ timestamps, dockElements, keywords }) {
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

	const yearpicker = <div className="hidden md:flex mt-10 flex-col">
		{years.map(year => {
			return (
				<Link href={ "#" + year } key={ year }>
					<a className="text-title target">{ year }</a>
				</Link>
			);
		})}
	</div>;

	const organisedTimestamps = {};
	timestamps.forEach(timestamp => {
		// Years
		if (!organisedTimestamps[timestamp.date.getFullYear()]) {
			organisedTimestamps[timestamp.date.getFullYear()] = {};
		}
		if (!timestamp.showMonth) {
			if (!organisedTimestamps[timestamp.date.getFullYear()]["undefined"]) {
				organisedTimestamps[timestamp.date.getFullYear()]["undefined"] = [];
			}
			organisedTimestamps[timestamp.date.getFullYear()]["undefined"].push(timestamp);

			return;
		}
		// Months
		if (!organisedTimestamps[timestamp.date.getFullYear()][timestamp.date.getMonth()]) {
			organisedTimestamps[timestamp.date.getFullYear()][timestamp.date.getMonth()] = {};
		}
		if (timestamp.showMonth && !timestamp.showDay) {
			if (!organisedTimestamps[timestamp.date.getFullYear()][timestamp.date.getMonth()]["undefined"]) {
				organisedTimestamps[timestamp.date.getFullYear()][timestamp.date.getMonth()]["undefined"] = [];
			}
			organisedTimestamps[timestamp.date.getFullYear()][timestamp.date.getMonth()]["undefined"].push(timestamp);

			return;
		}
		// Days
		if (!organisedTimestamps[timestamp.date.getFullYear()][timestamp.date.getMonth()][timestamp.date.getDate()]) {
			organisedTimestamps[timestamp.date.getFullYear()][timestamp.date.getMonth()][timestamp.date.getDate()] = [];
		}
		organisedTimestamps[timestamp.date.getFullYear()][timestamp.date.getMonth()][timestamp.date.getDate()].push(timestamp);
	});

	const timeline = <article id="timeline" className="flex flex-nowrap flex-row items-start justify-center bg-white">
		{ yearpicker }
		<div className="sticky mt-10 hidden md:flex" style={{backgroundImage: `url('bg.jpeg')`, top: "50px", left: "0px", width: "1rem", height: "calc(100vh)", marginBottom: "40px"}}><div className="sticky blur-dark" style={{width: "1rem", height: "100"}}></div></div>
		<div>
			{Object.keys(organisedTimestamps).map(year => {
				return (
					<div className="m-10 section" key={ year }>
						<div className="h-px mb-10" />
						<div id={ year } className="text-title selectable">{ year }</div>
						{ // Year timestamps
						organisedTimestamps[year]["undefined"] ? organisedTimestamps[year]["undefined"].map( timestamp => {
							return (
								<div className="text selectable" key={ timestamp.id } dangerouslySetInnerHTML={{ __html: timestamp.name }} />
							);
						}) : null}
						{ // Month timestamps
						Object.keys(organisedTimestamps[year]).map( month => {
							if (month == "undefined") {
								{ organisedTimestamps[year][month].map( timestamp => {
									return (
										<div className="text selectable" key={ timestamp.id } dangerouslySetInnerHTML={{ __html: timestamp.name }}></div>
									)
								})}
							} else {
								return (
									<div key={ month }>
										<div className="text-subtitle selectable" style={{paddingTop: "0"}}>{ months[month] }</div>
										{
											Object.keys(organisedTimestamps[year][month]).map( day => {
												if (day == "undefined") {
													return (
													organisedTimestamps[year][month][day].map( timestamp => {
														return (
															<div className="text selectable" key={ timestamp.id } dangerouslySetInnerHTML={{ __html: timestamp.name }}></div>
														)
													}))
												} else {
													return (
														<div key={ day }>
															<div className="text-subsubtitle selectable">{months[month] + " " + day}</div>
															{ organisedTimestamps[year][month][day].map( timestamp => {
																return (
																	<div className="text selectable" key={ timestamp.id } dangerouslySetInnerHTML={{ __html: timestamp.name }}></div>
																)
															})}
														</div>
													);
												}
											})
										}
									</div>
								);
							}})}
						<div className="h-px mt-10" />
					</div>
				);
			})}
		</div>
	</article>

	return (
		<>
			<Head title="Timeline" description="Important dates and events in my career." keywords={ keywords } />

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
		const projectResponse = await fetch(server + "/api/projects?id=" + encodeURIComponent(defaultDockElementIDs[i]));
		const project = await projectResponse.json();
		
		dockElements.push(project);
	}

	const response = await fetch(server + "/api/keywords");
    const keywords = await response.json();

	return {
		props: { timestamps: timestamps, dockElements: dockElements, keywords: keywords.join(", ")},
	};
};