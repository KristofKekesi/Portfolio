import React, { useState, useEffect } from "react";

import projectTooltipPosition from "../../functions/project-tooltip";

import { server } from "../../config";


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


export default function DockElement(props) {
    console.log(props.project);
    
    useEffect(() => {
          window.removeEventListener('popstate', function () {
            window.location.reload();
          });
          window.addEventListener('popstate', function () {
            window.location.reload();
          });
        }, [props.id]);

        //let projectName = project["name"].substring(0, 12);;
        //if (project.name !== projectName) {
        //    projectName += "...";
        //}

        //let href = "/project?" + project.id.replace("PROJ-", "") + "-" + project.name.replace(/[^a-zA-Z]/g, "");
        return(
            //<a href={"/#" + href}>
            //    <div className="radius24 dock-element target" id={"dock-element-" + project.id}>
            //        <center>
            //            <img src={image.url} alt={image.name}/>
            //            <p className="nowrap basis-full h-0 text-white">{ projectName }</p>
            //        </center>
            //    </div>
            //</a>
            <a href={server + "/project?" + props.project.id}>
                <div className="radius24 dock-element target" id={"dock-element-" + "project.id"}>
                    <center>
                        <img src={server +  "/" + props.project.logo.path} alt={props.project.name}/>
                        <p className="nowrap basis-full h-0 text-white">{ props.project.name }</p>
                    </center>
                </div>
            </a>
        );
};