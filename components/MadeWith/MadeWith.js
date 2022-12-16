import Bookmark from "../Bookmark/Bookmark.js";

import { server } from "../../config.js";


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


function MadeWith(props) {
	if (props.tools == undefined || props.tools.length == 0) {
		return null;
	}

	function TechnologyElement(props) {
		return (
			<div className="technologies-content" key={props.tool.name}>
				<img src={server + "/" + props.tool.logo.path} alt={props.tool.name} />
				<h3 className="text selectable null-padding text-center">{props.tool.name}</h3>
			</div>  
		);
	}

	let technologyTypes = {};
	props.tools.forEach(tool => {
		if (tool.type in technologyTypes) {
			technologyTypes[tool.type].push(tool);
		} else {
			technologyTypes[tool.type] = [tool];
		}
	});

	let content = [];
	for (let technologyType in technologyTypes) {
		content.push(<h1 id={ technologyType.toLowerCase().replaceAll(" ", "-") } className="selectable text-subtitle nosection group flex items-center gap-2 pt-4 pb-2" key={ technologyType + "-title" }><span>{ technologyType }</span><Bookmark color="black" weight="medium" id={ technologyType.toLowerCase().replaceAll(" ", "-") } /></h1>);
		let typeContent = [];
		for (let i in technologyTypes[technologyType]) {
			typeContent.push(<TechnologyElement tool={ technologyTypes[technologyType][i] } key={ i }/>);
		}
		content.push(<div className="w-full flex flex-wrap flex-row gap-8 px-12" key={technologyType + "-content"}>{typeContent}</div>);
	}

	return(
		<div id={ props.title.toLowerCase().replaceAll(" ", "-") } className="section">
			<div className="mh-10 h-px"></div>
			{ props.title ?  <h1 className="selectable text-title nosection group flex items-center gap-2" key={ props.title }><span>{ props.title }</span><Bookmark color="black" weight="bold" id={ props.title.toLowerCase().replaceAll(" ", "-") } /></h1> : null }
			{ content }
			<div className="mt-10 w-full bg-white h-px"/>
		</div>
	);
}

export default MadeWith;