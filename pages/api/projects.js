import getProjects from "../../functions/api/projects";


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


const projects = async (req, res) => {
    const {
        query: { id, name, version, role, platform, award, bundle, download, skill, tool },
        method,
    } = req;
    
	const projects = await getProjects(id, name, version, role, platform, award, bundle, download, skill, tool);
	
	if (projects == "No results found") {
		return res.status(404).send(projects);
	} else {
		return res.status(200).json(projects);
	}
}

export default projects;