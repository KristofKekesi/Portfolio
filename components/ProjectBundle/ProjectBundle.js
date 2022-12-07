import { server } from "../../config";
import ProjectBundleContent from "./ProjectBundleContent";
import Bookmark from "../Bookmark/Bookmark";


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
        <div id={ props.projectBundle.name } className={"project-bundle text-white my-10"} style={{backgroundImage: props.projectBundle.background}}>
            <div id={ props.projectBundle.name.toLowerCase().replaceAll(" ", "-") } className="mb-10 h-px"></div>
            { props.projectBundle.name ? <h1 className="selectable text-title nosection group flex items-center gap-2" key={ props.projectBundle.name }><span>{ props.projectBundle.name }</span><Bookmark color="white" weight="bold" id={ props.projectBundle.name.toLowerCase().replaceAll(" ", "-") } /></h1> : null }
            <div className="project-bundle-content w-full flex justify-between px-12 mb-10">
                <ProjectBundleContent projects={ props.projectBundle.projects }/>
            </div>
            <div className="mt-10 h-px"></div>
        </div>
    );
}

export default ProjectBundle;