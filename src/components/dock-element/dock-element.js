import React, { useState, useEffect } from "react";


import projectTooltipPosition from "../../functions/project-tooltip";


import './dock-element.css';

import API from '../../api/index';
import Loader from "../loader/loader";


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


function DockElement(props) {
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
                            console.log(e);
                        }
                    }
                );
          }).catch((e) => {setProject ( null )});

          window.removeEventListener('popstate', function () {
            window.location.reload();
          });
          window.addEventListener('popstate', function () {
            window.location.reload();
          });
        }, []);

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
            <a href={"./#" + href} id={"dock-element-" + project.id} className="target">
                <div className="radius24 dock-element target">
                    <center>
                        <img src={image.url} alt={image.name}/>
                        <p className="nowrap" style={{flexBasis: "100%", height: "0"}}>{ projectName }</p>
                    </center>
                </div>
            </a>
        );
    } else {
        return (
            <a href={"#"} className="target">
                <div className="radius24 dock-element target">
                    <center>
                        <Loader color="white"/>
                        <p style={{flexBasis: "100%", height: "0"}}>Loading...</p>
                    </center>
                </div>
            </a>
        );
    }
};

export default DockElement;