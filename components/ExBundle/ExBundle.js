import Bookmark from "../Bookmark/Bookmark.js";
import Label from "../Label/Label.js";


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


function ExBundle(props) {
	// PROPS
	// name, children, background, theme?

	// PROP EXAMPLE
	/*
	let children = [
		{type: "a", label: <Label size="xl" name="1" image={{"type":"logo","url":"https://localhost:3000/f/images/steeped_logo.png","onIOS":null,"onMacOS":null,"copyrightHolder":"Steeped","copyrightURL":"https://www.steeped.app","width":512,"height":512,"alt":"The logo of Steeped."}}/>},
		{type: "a", label: <Label size="xl" name="2" image={{"type":"logo","url":"https://localhost:3000/f/images/steeped_logo.png","onIOS":null,"onMacOS":null,"copyrightHolder":"Steeped","copyrightURL":"https://www.steeped.app","width":512,"height":512,"alt":"The logo of Steeped."}}/>},
		{type: "b", label: <Label size="xl" name="3" image={{"type":"logo","url":"https://localhost:3000/f/images/steeped_logo.png","onIOS":null,"onMacOS":null,"copyrightHolder":"Steeped","copyrightURL":"https://www.steeped.app","width":512,"height":512,"alt":"The logo of Steeped."}}/>},
	];
	*/


	//console.log("name: " + props.name + ", children: " + props.children + ", background: " + props.background + ", theme: " + props.theme);

	if (props.children == undefined || props.children.length == 0) {
		return null;
	}

	const theme = props.theme ?? "dark";

	let types = {};
	props.children.forEach(child => {
		if (child.type in types) {
			types[child.type].push(child.label);
		} else {
			types[child.type] = [child.label];
		}
	});

	let content = [];
	for (let type in types) {
		if (type != undefined && type != "") {
			content.push(<h1 id={ type.toLowerCase().replaceAll(" ", "-") } className="selectable text-subtitle nosection group flex items-center gap-2 pt-4 pb-2" key={ type + "-title" }><span>{ type }</span><Bookmark color={theme == "dark" ? "black" : "white"} weight="medium" id={ type.toLowerCase().replaceAll(" ", "-") } /></h1>);
		}
		let output = [];

		for (let i in types[type]) {
			output.push(
				<div key={i}>
				{types[type][i]}
				</div>
			);
		}
		content.push(<div className="w-fit flex flex-wrap flex-row gap-16 gap-y-16 px-12 mb-10 justify-between" key={type + "-content"}>{output}</div>);
	}

	return(
		<div id={ props.title.toLowerCase().replaceAll(" ", "-") } className={"section " + (theme == "dark" ? "text-black" : "text-white")} style={{background: props.background}}>
			<div className="mh-10 h-px"></div>
			{ props.title ?  <h1 className="selectable text-title nosection group flex items-center gap-2" key={ props.title }><span>{ props.title }</span><Bookmark color={theme == "dark" ? "black" : "white"} weight="bold" id={ props.title.toLowerCase().replaceAll(" ", "-") } /></h1> : null }
			{ content }
			<div className="mt-16 w-full bg-white h-px"/>
		</div>
	);
}

export default ExBundle;