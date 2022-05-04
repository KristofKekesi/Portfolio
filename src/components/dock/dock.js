import React from "react";
import DockElement from "../dock-element/dock-element";
import ProjectTooltip from "../project-tooltip/project-tooltip";

import './dock.css';


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


function Dock(props) {
    //const dockElementIDs = props.IDs ?? [0, 1, 4, 12, 5];
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
            <div id="dock" className="dock blur-dark">
                <center>
                    {dockElements}
                </center>
            </div>
        </>
    );
};

export default Dock;