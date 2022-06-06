import { Pool } from "pg";

let conn;

if (!conn) {
	conn = new Pool({
		user: "kristofkekesi",
		password: "",
		host: "localhost",
		port: 5432,
		database: "portfolio",
	});
}

export default async (req, res) => {
    const {
        query: { id, name, version, role, platform, bundle, download, skill, tool },
        method,
    } = req;
    console.log("ID: " + id + " Name: " + name + " Version: " + version + " Role: " + role + " Platform: " + platform + " Bundle: " + bundle + " Download: " + download + " Skill: " + skill + " Tool: " + tool);

	let imports = ['"projects"'];
	let selectorQueries = [];

	if (id != undefined) {
		selectorQueries.push('"projects"."id" = ' + id);
	}
	if (name != undefined) {
		selectorQueries.push('"projects"."name" = ' + '\'' + name + '\'');
	}
	if (version != undefined) {
		selectorQueries.push('"projects"."version" = ' + '\'' + version + '\'');
	}
	if (role != undefined) {
		// search if role is in array
		imports.push('"project_roles"');
	}
	if (platform != undefined) {
		selectorQueries.push('"projects"."platform" = ' + '\'' + platform + '\'');
	}
	if (skill != undefined) {
		imports.push('"project_skills"');
		selectorQueries.push('"project_skills"."skillID" = ' + skill + ' AND "projects"."id" = "project_skills"."projectID"');
	}
	if (tool != undefined) {
		imports.push('"project_tools"');
		selectorQueries.push('"project_tools"."toolID" = ' + tool + ' AND "projects"."id" = "project_tools"."projectID"');
	}

	imports = 'FROM ' + imports.join(", ");
	if (selectorQueries.length > 0) {
		selectorQueries = 'WHERE ' + selectorQueries.join(' AND ');
	} else {
		selectorQueries = '';
	}

	try {
		const mainQuery = 'SELECT "projects".* ' + imports + ' ' + selectorQueries + ';';
		console.log(mainQuery);
		const mainResult = await conn.query(mainQuery);

		for (let i = 0; i < mainResult.rows.length; i++) {
			mainResult.rows[i].skillIDs = [];
			mainResult.rows[i].toolIDs  = [];

			// Skills
			const skillsSideQuery = "SELECT * FROM project_skills WHERE \"projectID\" = " + mainResult.rows[i].id;
			const skillsSideResult = await conn.query(skillsSideQuery);
			for (let j = 0; j < skillsSideResult.rows.length; j++) {
				mainResult.rows[i].skillIDs.push(skillsSideResult.rows[j].skillID);
			}

			// Tools
			const toolsSideQuery = "SELECT * FROM project_tools WHERE \"projectID\" = " + mainResult.rows[i].id;
			const toolsSideResult = await conn.query(toolsSideQuery);
			for (let j = 0; j < toolsSideResult.rows.length; j++) {
				mainResult.rows[i].toolIDs.push(toolsSideResult.rows[j].toolID);
			}

			if (i === mainResult.rows.length - 1) {
				return res.status(200).json(mainResult.rows);
			}
		}
		return res.status(404).json("No results found");


	} catch ( error ) {
		console.log( error );
	}
};