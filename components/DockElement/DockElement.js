import React, { useEffect } from "react";

import { server } from "../../config";


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


export default function DockElement(props) {
	useEffect(() => {
		window.removeEventListener('popstate', function () {
			window.location.reload();
		});
		window.addEventListener('popstate', function () {
			window.location.reload();
		});
	}, [props.id]);

	let projectName = props.project.name.substring(0, 12);;
	if (props.project.name !== projectName) {
		projectName += "...";
	}

	return(
		<a href={server + "/projects/" + encodeURIComponent(props.project.name)}>
			<div className="radius24 dock-element target" id={"dock-element-id-" + props.project.id}>
				<center>
					<img src={ server + "/" + props.project.logo.path } alt={ projectName }/>
					<p className="nowrap basis-full h-0 text-white">{ projectName }</p>
				</center>
			</div>
		</a>
	);
};