import { server } from "../../config";
import ProjectBundleContent from "./ProjectBundleContent";


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


function ProjectBundle(props) {
    if (props.projectBundle == undefined || props.projectBundle.projects == undefined) {
        return null;
    }

    return(
        <div className={"project-bundle text-white my-10"} style={{backgroundImage: props.projectBundle.background}}>
            <div className="mb-10 h-px"></div>
            { props.projectBundle.name ? <h1 className="text-title">{props.projectBundle.name}</h1> : null }
            <div className="project-bundle-content w-full flex justify-between px-12 mb-10">
                <ProjectBundleContent projects={props.projectBundle.projects}/>
            </div>
            <div className="mt-10 h-px"></div>
        </div>
    );
}

export default ProjectBundle;