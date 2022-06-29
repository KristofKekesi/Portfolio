import conn from "../../db";


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


export default async (req, res) => {
	const {
        method,
    } = req;

	try {
        const keywords = ["Kristóf Kékesi"];

        const toolsQuery = 'SELECT "name" FROM "tools";';		
		const toolsResult = await conn.query(toolsQuery);
        toolsResult.rows.forEach(tool => { keywords.push(tool.name); });

        const projectsQuery = 'SELECT "name" FROM "projects";';
        const projectsResult = await conn.query(projectsQuery);
        projectsResult.rows.forEach(project => { keywords.push(project.name); });

        const skillsQuery = 'SELECT "skill" FROM "project_skills" GROUP BY "skill";';
        const skillsResult = await conn.query(skillsQuery);
        skillsResult.rows.forEach(skill => { keywords.push(skill.skill); });

        return res.status(200).json(keywords);

	} catch ( error ) {
		//console.log( error );
	}
};