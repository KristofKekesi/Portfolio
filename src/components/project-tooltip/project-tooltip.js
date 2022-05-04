import React, { useState, useEffect } from "react";

import './project-tooltip.css';

import { getPlatforms } from "../../functions/platforms";

import API from "../../api/index";


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


function ProjectTooltip(props) {
    const [project, setProject] = useState( undefined );

    useEffect(() => {
        API.getProject("https://www.kekesi.dev/api/proj/PROJ-" + props.id + ".json").then(
          project => { setProject ( project ); }).catch((e) => {setProject ( null )});
    }, [props.id]);

    if (project == null) {
        return (<></>)
    } else if (project !== undefined) {
        function get_downloader_indicator(downloader_string) {
            if (downloader_string === "") {
                return null;
            } else {
                return <li>
                    <center><span className="nowrap">{ downloader_string }</span></center>
                </li>;
            }
        }

        function get_downloader_separator(downloader_string) {
            if (downloader_string !== "") {
                return <hr width="100%"/>;
            } else {
                return null;
            }
        }

        let downloader_string = getPlatforms(project["download_link"], " · ", project["name"]);

        return(
            <div style={{ overflow: "hidden"}}>
                <div id={ "project-tooltip-" + props.id } style={{ position: "fixed", display: "none" }} className="blur-dark project-tooltip">
                    <ul>
                        <li>
                            <center className="nowrap" id={ "project-tooltip-" + props.id + "-name" }>{ project["name"] }</center>
                        </li>
                        <hr width="100%"/>
                        <li>
                        <center><q style={{ textAlign: "justify" }}>{ project["description"] }</q></center>
                        </li>
                        { get_downloader_separator(downloader_string) }
                        { get_downloader_indicator(downloader_string) }
                        
                    </ul>
                </div>
            </div>
        )
    } else {
        return(
            <div style={{ overflow: "hidden" }}>
                <div id={ "project-tooltip-" + props.id } style={{ position: "fixed", display: "none"  }} className="blur-dark project-tooltip">
                    <ul>
                        <li>
                            <center id={ "project-tooltip-" + props.id + "-name" }>Loading...</center>
                        </li>
                        <hr width="100%"/>
                        <li>
                        <center>Loading...</center>
                        </li>
                        <hr width="100%"/>
                        <li>
                        <center>Loading...</center>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default ProjectTooltip;