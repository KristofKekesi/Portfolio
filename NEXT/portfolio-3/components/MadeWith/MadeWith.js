import { server } from "../../config.js";


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


function MadeWith(props) {
	if (props.tools.length == 0) {
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
		content.push(<h1 className="text-subtitle selectable pt-4 pb-2" key={technologyType + "-title"}>{technologyType}</h1>);
		let typeContent = [];
		for (let i in technologyTypes[technologyType]) {
			typeContent.push(<TechnologyElement tool={ technologyTypes[technologyType][i] } key={ i }/>);
		}
		content.push(<div className="w-full flex flex-wrap flex-row gap-8 px-12" key={technologyType + "-content"}>{typeContent}</div>);
	}

	return(
		<div className="section">
			<div className="mh-10 h-px"></div>
			<h1 className="text-title">{props.title}</h1>
			{ content }
			<div className="mt-10 w-full bg-white h-px"/>
		</div>
	);
}

export default MadeWith;