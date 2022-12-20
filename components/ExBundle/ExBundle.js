import Bookmark from "../Bookmark/Bookmark.js";
import Label from "../Label/Label";

import { server } from "../../config.js";


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


function ExBundle(props) {
	if (props.tools == undefined || props.tools.length == 0) {
		return null;
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
			typeContent.push(<Label size="xl" theme="dark" name={ technologyTypes[technologyType][i].name } image={ technologyTypes[technologyType][i].logo } href={ null } key={ i + "w" }/>);
		}
		content.push(<div className="w-full flex flex-wrap flex-row gap-8 px-12 mb-10" key={technologyType + "-content"}>{typeContent}</div>);
	}

	return(
		<div id={ props.title.toLowerCase().replaceAll(" ", "-") } className="section">
			<div className="mh-10 h-px"></div>
			{ props.title ?  <h1 className="selectable text-title nosection group flex items-center gap-2" key={ props.title }><span>{ props.title }</span><Bookmark color="black" weight="bold" id={ props.title.toLowerCase().replaceAll(" ", "-") } /></h1> : null }
			{ content }
			<div className="mt-16 w-full bg-white h-px"/>
		</div>
	);
}

export default ExBundle;