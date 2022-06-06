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
		imports.push('"project_roles"');
		selectorQueries.push('"project_roles"."role" = \'' + role + '\' AND "projects"."id" = "project_roles"."projectID"');
	}
	if (platform != undefined) {
		imports.push('"project_platforms"');
		selectorQueries.push('"project_platforms"."platform" = \'' + platform + '\' AND "projects"."id" = "project_platforms"."projectID"');
	}
	if (bundle != undefined) {
		imports.push('"project_bundles"');
		selectorQueries.push('"project_bundles"."bundleID" = \'' + bundle + '\' AND "projects"."id" = "project_bundles"."projectID"');
	}
	if (download != undefined) {
		imports.push('"project_downloads"');
		selectorQueries.push('"project_downloads"."type" = \'' + download + '\' AND "projects"."id" = "project_downloads"."projectID"');
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
			mainResult.rows[i].bundleIDs = [];
			mainResult.rows[i].downloads = [];
			mainResult.rows[i].platforms = [];
			mainResult.rows[i].roles = [];
			mainResult.rows[i].screenshots = [];
			mainResult.rows[i].skillIDs = [];
			mainResult.rows[i].toolIDs  = [];

			// Project Bundles
			const bundlesSideQuery = "SELECT * FROM project_bundles WHERE \"projectID\" = " + mainResult.rows[i].id;
			const bundlesSideResult = await conn.query(bundlesSideQuery);
			for (let j = 0; j < bundlesSideResult.rows.length; j++) {
				mainResult.rows[i].bundleIDs.push(bundlesSideResult.rows[j].bundleID);
			}

			// Downloads
			const downloadsSideQuery = "SELECT * FROM project_downloads WHERE \"projectID\" = " + mainResult.rows[i].id;
			const downloadsSideResult = await conn.query(downloadsSideQuery);
			for (let j = 0; j < downloadsSideResult.rows.length; j++) {
				delete downloadsSideResult.rows[j].projectID;
				mainResult.rows[i].downloads.push(downloadsSideResult.rows[j]);
			}

			// Platforms
			const platformsSideQuery = "SELECT * FROM project_platforms WHERE \"projectID\" = " + mainResult.rows[i].id;
			const platformsSideResult = await conn.query(platformsSideQuery);
			for (let j = 0; j < platformsSideResult.rows.length; j++) {
				mainResult.rows[i].platforms.push(platformsSideResult.rows[j].platform);
			}

			// Roles
			const rolesSideQuery = "SELECT * FROM project_roles WHERE \"projectID\" = " + mainResult.rows[i].id;
			const rolesSideResult = await conn.query(rolesSideQuery);
			for (let j = 0; j < rolesSideResult.rows.length; j++) {
				mainResult.rows[i].roles.push(rolesSideResult.rows[j].role);
			}

			// Screenshots
			const screenshotsSideQuery = "SELECT * FROM project_screenshots WHERE \"projectID\" = " + mainResult.rows[i].id;
			const screenshotsSideResult = await conn.query(screenshotsSideQuery);
			for (let j = 0; j < screenshotsSideResult.rows.length; j++) {
				mainResult.rows[i].screenshots.push(screenshotsSideResult.rows[j].imageID);
			}

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