import React, { useState, useEffect } from "react";

import projectTooltipPosition from "../../functions/project-tooltip";

import API from '../../api/index';
import SpinnerLoader from "../SpinnerLoader/SpinnerLoader";


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


export default function DockElement(props) {
    const [project, setProject] = useState( undefined );
    const [image,   setImage]   = useState( undefined );
    
    useEffect(() => {
        API.getProject("https://www.kekesi.dev/api/proj/PROJ-" + props.id + ".json").then(
          project => {
                API.getImage("https://www.kekesi.dev/api/img/" + project["logo"] + ".json").then(
                    image => {
                        setImage   ( image   );
                        setProject ( project );

                        try {
                            projectTooltipPosition();
                            document.getElementById("dock-element-PROJ-" + props.id ).addEventListener('mouseenter', function () {
                                var projectTooltip = document.getElementById("project-tooltip-" + props.id);

                                document.getElementById("project-tooltip-" + props.id).style.display = "inline";
                                projectTooltipPosition();
                                projectTooltip.style.opacity = "0";
                                setTimeout(() => {
                                    projectTooltip.style.opacity = "1";
                                }, 0);
                            });
                            document.getElementById("dock-element-PROJ-" + props.id ).addEventListener('mouseleave', function () {
                                var projectTooltip = document.getElementById("project-tooltip-" + props.id);

                                setTimeout(() => {
                                    projectTooltip.style.display = "none";
                                }, 150);
                                projectTooltip.style.opacity = "0";
                            });
                        } catch (e) {
                            console.error(e);
                        }
                    }
                );
          }).catch((e) => {setProject( null )});

          window.removeEventListener('popstate', function () {
            window.location.reload();
          });
          window.addEventListener('popstate', function () {
            window.location.reload();
          });
        }, [props.id]);

    if(project === null) {
        return(
            <></>
        );
    }
    else if(project !== undefined) {
        let projectName = project["name"].substring(0, 12);;
        if (project.name !== projectName) {
            projectName += "...";
        }

        let href = "/project?" + project.id.replace("PROJ-", "") + "-" + project.name.replace(/[^a-zA-Z]/g, "");
        return(
            <a href={"/#" + href}>
                <div className="radius24 dock-element target" id={"dock-element-" + project.id}>
                    <center>
                        <img src={image.url} alt={image.name}/>
                        <p className="nowrap basis-full h-0 text-white">{ projectName }</p>
                    </center>
                </div>
            </a>
        );
    } else {
        return (
            <a href="#" className="radius24 dock-element target" id={"dock-element-" + props.id}>
                <center>
                    <SpinnerLoader color="white"/>
                    <p className="nowrap basis-full h-0 text-white">Loading...</p>
                </center>
            </a>
        );
    }
};