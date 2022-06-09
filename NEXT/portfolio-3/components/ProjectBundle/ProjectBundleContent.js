import React, { useEffect, useState } from "react";

import API from "../../api";


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
                    }
                });
            });
        }
    }, [props.IDs]);

    if(isFinished === false) {
        return(
            <h1 className="text nowrap p-0 text-white font-normal text-center">Loading...</h1>
        );
    } else {
        let final = [];
        for (let i = 0; i < props.IDs.length; i++) {
            final.push(
                <a key={i} href='{"project?" + data[i]["proj"].id.replace("PROJ-", "") + "-" + data[i]["proj"].name.replace(/[^a-zA-Z]/g, "")}"'>
                    <div className="target flex flex-col items-center">
                        <img className="w-auto" src={data[i]["img"].url} alt={data[i]["img"].description} />
                        <h2 className="text null-padding nowrap w-auto mt-3 text-white text-center">{data[i]["proj"].name}</h2>
                    </div>
                </a>
            );
        }

        return ( final );
    }
}

export default ProjectBundleContent;