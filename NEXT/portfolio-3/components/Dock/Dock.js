import DockElement from "../DockElement/DockElement";
import ProjectTooltip from "../ProjectTooltip/ProjectTooltip";

import './Dock.module.css';


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


export default function Dock(props) {
    const dockElementIDs = [0, 1, 4, 12, 5];
    
    let projectTooltips = [];
    for (let i = 0; i < dockElementIDs.length; i++) {
        projectTooltips.push(<ProjectTooltip id={dockElementIDs[i]} key={i}/>);
    }

    let dockElements = [];
    for (let i = 0; i < dockElementIDs.length; i++) {
        dockElements.push(<DockElement id={dockElementIDs[i]} key={i}/>);
    }

    return(
        <>
            {projectTooltips}
            <div id="dock" className="blur-dark z-30 fixed inline-block text-primaryLightHover bottom-0 md:bottom-3 left-1/2 p-3 rounded-none md:rounded-2xl">
                <center>
                    {dockElements}
                </center>
            </div>
        </>
    );
};