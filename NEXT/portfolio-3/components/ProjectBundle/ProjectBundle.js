import API from "../../api";
import ProjectBundleContent from "./ProjectBundleContent";


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


function ProjectBundle(props) {
    console.log(props["projectBundle"]);

    return(
        <p className="text-title">Project Bundle</p>
        //<div className="project-bundle text-white my-10" style={{backgroundImage: `linear-gradient(${projectBundle.style["gradient"].split(";")[2]}, #${projectBundle.style["gradient"].split(";")[0].replace("HEX-", "")} 0%, #${projectBundle.style["gradient"].split(";")[1].replace("HEX-", "")} 75%)`}}>
            //<div className="mb-10 h-px"></div>
            //<h1 className="text-title">{projectBundle.name}</h1>
            //<div className="project-bundle-content w-full flex justify-between px-12 mb-10">
            //    <ProjectBundleContent IDs={projectBundle.projects}/>
            //</div>
            //<div className="mt-10 h-px"></div>
        //</div>
    );
}

export default ProjectBundle;