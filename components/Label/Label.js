import React, { useEffect } from "react";


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


export default function Label(props) {
    // PROPS:
    // size, theme, name, image, href, id, cropName, selectable
    //console.log("size: " + props.size + ", theme" + props.theme + ", name: " + props.name + ", image: " + props.image + ", href: " + props.href + ", id: " + props.id);

	useEffect(() => {
		window.removeEventListener('popstate', function () {
			window.location.reload();
		});
		window.addEventListener('popstate', function () {
			window.location.reload();
		});
	}, [props.id]);

	let labelName = (props.cropName ? props.name.substring(0, 12) : props.name);;
	if (props.name !== labelName) {
		labelName += "...";
	}

	return(
		<a href={ props.href }>
			<div className={((props.size == "md") ? "label-md" : "label-xl") + " " + (props.href ? "target" : "")} id={ props.id }>
				<center>
					<img src={ props.image.url } alt={ props.name }/>
					<p className={ `nowrap basis-full h-0 ${props.theme == "dark" ? "text-black" : "text-white" } ${props.selectable ? "selectable" : ""}` }>{ labelName }</p>
				</center>
			</div>
		</a>
	);
};