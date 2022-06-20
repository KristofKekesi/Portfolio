import DockElement from "../DockElement/DockElement";
import ProjectTooltip from "../ProjectTooltip/ProjectTooltip";


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


export default function Dock(props) {
    return(
        <>
            {props.elements.map((element => <ProjectTooltip project={element[0]} key={element[0].id}/>))}
            <div id="dock" className="blur-dark z-30 fixed inline-block text-primaryLightHover bottom-0 md:bottom-3 left-1/2 p-3 rounded-none md:rounded-2xl">
                <center>
                    {props.elements.map(element => <DockElement project={element[0]} key={element[0].id} />)}
                </center>
            </div>
        </>
    );
};