//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


function ProjectTooltip(props) {
    let platforms = null;
    if (props.project.platforms.length != 0) {
        platforms = <>
            <hr width="100%" />
            <li>
                <center><span className="nowrap">{ props.project.platforms.join(" · ") }</span></center>
            </li>
        </>;
    }

    return(
        <div style={{ overflow: "hidden"}}>
            <div id={ "project-tooltip-id-" + props.project.id } style={{ position: "fixed", display: "none" }} className="blur-dark project-tooltip z-40 w-min sticky rounded-2xl text-primaryLightHover">
                <ul>
                    <li>
                        <center className="nowrap" id={ "project-tooltip-id-" + props.project.id + "-name" }>{ props.project["name"] }</center>
                    </li>
                    <hr width="100%"/>
                    <li>
                    <center><q style={{ textAlign: "justify" }}>{ props.project["description"] }</q></center>
                    </li>
                    { platforms }
                </ul>
            </div>
        </div>
    )
}

export default ProjectTooltip;