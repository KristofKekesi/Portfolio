import { server } from "../../config.js";


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


function BundleContent(props) {
    const projects = [];
    props.projects.forEach(project => {
        projects.push(
            <a key={ project.id } href={"projects/" + encodeURIComponent(project.name)}>
                <div className="target flex flex-col items-center">
                    <img className="w-auto h-24" src={ server + "/" + project.logo.path } alt={ project.name } />
                    <h2 className="text null-padding nowrap w-auto mt-3 text-white text-center">{ project.name }</h2>
                </div>
            </a>
        );
    });

    return(
        <>
            { projects }
        </>
    );
}

export default BundleContent;