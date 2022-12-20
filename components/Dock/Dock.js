import Label from "../Label/Label";
import ProjectTooltip from "../ProjectTooltip/ProjectTooltip";

import { server } from "../../config";


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


export default function Dock(props) {
    return(
        <>
            {props.elements.map((element => <ProjectTooltip project={element[0]} key={element[0].id}/>))}
            <div id="dock" className="blur-dark z-30 fixed text-primaryLightHover bottom-0 whitespace-nowrap md:bottom-3 left-1/2 p-3 rounded-none md:rounded-2xl flex flex-wrap md:flex-nowrap justify-center">
                {props.elements.map(element => <Label size="md" name={element[0].name} image={ element[0].logo} href={ server + "/projects/" + element[0].name } id={"dock-element-id-" + element[0].id} cropName={true} key={element[0].id} />)}
            </div>
        </>
    );
};