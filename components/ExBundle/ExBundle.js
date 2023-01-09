import Bookmark from "../Bookmark/Bookmark.js";
import Label from "../Label/Label.js";


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


function ExBundle(props) {
	// PROPS
	// name, children, background, theme

	// PROP EXAMPLE
	//*
	let children = [
		{type: "a", label: <Label size="xl" name="1" image={{"type":"logo","path":"f/images/steeped_logo.png","onIOS":null,"onMacOS":null,"copyrightHolder":"Steeped","copyrightURL":"https://www.steeped.app","width":512,"height":512,"alt":"The logo of Steeped."}}/>},
		{type: "a", label: <Label size="xl" name="2" image={{"type":"logo","path":"f/images/steeped_logo.png","onIOS":null,"onMacOS":null,"copyrightHolder":"Steeped","copyrightURL":"https://www.steeped.app","width":512,"height":512,"alt":"The logo of Steeped."}}/>},
		{type: "b", label: <Label size="xl" name="3" image={{"type":"logo","path":"f/images/steeped_logo.png","onIOS":null,"onMacOS":null,"copyrightHolder":"Steeped","copyrightURL":"https://www.steeped.app","width":512,"height":512,"alt":"The logo of Steeped."}}/>},
	];
	//*/


	console.log("name: " + props.name + ", children: " + props.children + ", background: " + props.background + ", theme: " + props.theme);

	if (props.children == undefined || props.children.length == 0) {
		return null;
	}

	let types = children.map(child => child["type"]);
	types = [...new Set(types)];

	console.log(types);

	let contentTypes = {};
	props.children.forEach(child => {
		if (child.type in contentTypes) {
			contentTypes[child.type].push(child);
		} else {
			contentTypes[child.type] = [child];
		}
	});

	let content = [];
	for (let contentType in contentTypes) {
		content.push(<h1 id={ contentType.toLowerCase().replaceAll(" ", "-") } className="selectable text-subtitle nosection group flex items-center gap-2 pt-4 pb-2" key={ contentType + "-title" }><span>{ contentType }</span><Bookmark color="black" weight="medium" id={ contentType.toLowerCase().replaceAll(" ", "-") } /></h1>);
		let contentTypeContent = [];

		for (let i in contentTypes[contentType]) {
			contentTypeContent.push("label");
		}
		content.push(<div className="w-full flex flex-wrap flex-row gap-8 px-12 mb-10" key={contentType + "-content"}>{contentTypeContent}</div>);
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