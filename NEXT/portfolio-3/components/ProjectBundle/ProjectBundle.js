import ProjectBundleContent from "./ProjectBundleContent";


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


function ProjectBundle(props) {
    console.log(props.projectBundle);

    return(
        <div className={"project-bundle text-white my-10"} style={{background: `linear-gradient(${props.projectBundle.background.split(";")[2]}, ${props.projectBundle.background.split(";")[0]} 0%, ${props.projectBundle.background.split(";")[1]} 75%)`}}>
            <div className="mb-10 h-px"></div>
            <h1 className="text-title">{props.projectBundle.name}</h1>
            <div className="project-bundle-content w-full flex justify-between px-12 mb-10">
                <ProjectBundleContent projects={props.projectBundle.projects}/>
            </div>
            <div className="mt-10 h-px"></div>
        </div>
    );
}

export default ProjectBundle;