import React, { useEffect, useState } from "react";

import "./project-bundle.css";
import "../articles/articles.css";

import API from "../../api";
import ProjectBundleContent from "./project-bundle-content";


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


function ProjectBundle(props) {
    const [projectBundle, setProjectBundle] = useState( undefined );

    useEffect(() => {
        API.getProjectBundle("https://www.kekesi.dev/api/proj-bundle/" + props.id + ".json").then(projectBundle => {
            setProjectBundle(projectBundle);
        });
    }, []);

    if (projectBundle === undefined) {
        return(
            <div>Loading projects...</div>
        );
    } else if(projectBundle === null) {
        return(
            <div>Error loading projects...</div>
        );
    } else {
        return(
            <div className="project-bundle" style={{backgroundImage: `linear-gradient(${projectBundle.style["gradient"].split(";")[2]}, #${projectBundle.style["gradient"].split(";")[0].replace("HEX-", "")} 0%, #${projectBundle.style["gradient"].split(";")[1].replace("HEX-", "")} 75%)`}}>
                <h1 className="text-title">{projectBundle.name}</h1>
                <div className="project-bundle-content">
                    <ProjectBundleContent IDs={projectBundle.projects}/>
                </div>
            </div>
        );
    }
}

export default ProjectBundle;