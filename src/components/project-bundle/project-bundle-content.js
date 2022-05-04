import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./project-bundle.css";

import API from "../../api";

import cursorSetup from "../../functions/cursor";


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


function ProjectBundleContent(props) {
    const [isFinished, setIsFinished] = useState( false );
    const [data, setData] = useState( null );

    useEffect(() => {
        let final = Array(props.IDs.length).fill(null);
        for (let i = 0; i < props.IDs.length; i++) {
            API.getProject("https://www.kekesi.dev/api/proj/" + props.IDs[i] + ".json").then(project => {
                API.getImage("https://www.kekesi.dev/api/img/" + project.logo + ".json").then(image => {
                    final[i] = {"proj": project, "img": image};

                    setData(final);

                    if(!final.includes(null)) {
                        setIsFinished( true );
                        cursorSetup();
                    }
                });
            });
        }
    }, []);

    if(isFinished === false) {
        return(
            <h1 className="text nowrap" style={{padding: "0", color: "#ffffff", fontWeight: "normal", textAlign: "center"}}>Loading projects...</h1>
        );
    } else {
        let final = [];
        for (let i = 0; i < props.IDs.length; i++) {
            final.push(
                <Link key={i} to={"project?" + data[i]["proj"].id.replace("PROJ-", "") + "-" + data[i]["proj"].name.replace(/[^a-zA-Z]/g, "")} className="target">
                    <img src={data[i]["img"].url} alt={data[i]["img"].description} />
                    <h2 className="text nowrap" style={{padding: "0", color: "#ffffff", textAlign: "center"}}>{data[i]["proj"].name}</h2>
                </Link>
            );
        }

        return ( final );
    }
}

export default ProjectBundleContent;