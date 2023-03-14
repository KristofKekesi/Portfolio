import { server } from "../../config";
import conn from "../../db";


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


async function getProjects(id, name, version, role, platform, award, bundle, download, skill, tool) {
    //console.log("ID: " + id + " Name: " + name + " Version: " + version + " Role: " + role + " Platform: " + platform + " Award: " + award + " Bundle: " + bundle + " Download: " + download + " Skill: " + skill + " Tool: " + tool);

	let imports = ['"projects"'];
	let selectorQueries = [];

	if (id != undefined) {
		selectorQueries.push('"projects"."id" = ' + id);
	}
	if (name != undefined) {
		selectorQueries.push('LOWER("projects"."name") = LOWER(\'' + name + '\')');
	}
	if (version != undefined) {
		selectorQueries.push('"projects"."version" = \'' + version + '\'');
	}
	if (role != undefined) {
		imports.push('"project_roles"');
		selectorQueries.push('(LOWER("project_roles"."role") = LOWER(\'' + role + '\') AND "projects"."id" = "project_roles"."projectID")');
	}
	if (platform != undefined) {
		imports.push('"project_platforms"');
		selectorQueries.push('(LOWER("project_platforms"."platform") = LOWER(\'' + platform + '\') AND "projects"."id" = "project_platforms"."projectID")');
	}
	if (award != undefined) {
		imports.push('"project_awards"');
		selectorQueries.push('(LOWER("project_awards"."awardName") = LOWER(\'' + award + '\') AND "projects"."id" = "project_awards"."projectID")')
	}
	if (bundle != undefined) {
		imports.push('"project_bundles"');
		selectorQueries.push('("project_bundles"."bundleID" = \'' + bundle + '\' AND "projects"."id" = "project_bundles"."projectID")');
	}
	if (download != undefined) {
		imports.push('"project_downloads"');
		selectorQueries.push('(LOWER("project_downloads"."store") = LOWER(\'' + download + '\') AND "projects"."id" = "project_downloads"."projectID")');
	}
	if (skill != undefined) {
		imports.push('"project_skills"');
		selectorQueries.push('(LOWER("project_skills"."skill") = LOWER(\'' + skill + '\') AND "projects"."id" = "project_skills"."projectID")');
	}
	if (tool != undefined) {
		imports.push('"project_tools"');
		selectorQueries.push('("project_tools"."toolID" = ' + tool + ' AND "projects"."id" = "project_tools"."projectID")');
	}

	imports = 'FROM ' + imports.join(", ");
	if (selectorQueries.length > 0) {
		selectorQueries = 'WHERE ' + selectorQueries.join(' AND ');
	} else {
		selectorQueries = '';
	}

	//try {
		const mainQuery = 'SELECT "projects".* ' + imports + ' ' + selectorQueries + ' ORDER BY "projects"."id";';
		//console.log(mainQuery);

		const mainResult = await conn.query(mainQuery);
		
		for (let i = 0; i < mainResult.rows.length; i++) {
			mainResult.rows[i].bundleIDs = [];
			mainResult.rows[i].downloads = [];
			mainResult.rows[i].platforms = [];
			mainResult.rows[i].awards = [];
			mainResult.rows[i].roles = [];
			mainResult.rows[i].screenshots = [];
			mainResult.rows[i].skills = [];
			mainResult.rows[i].tools  = [];

			mainResult.rows[i].url = encodeURI(server + "/projects/" + mainResult.rows[i].name);

			// Project Bundles
			const bundlesSideQuery = 'SELECT * FROM "project_bundles" WHERE "projectID" = ' + mainResult.rows[i].id + ' ORDER BY "project_bundles"."order";';
			const bundlesSideResult = await conn.query(bundlesSideQuery);
			for (let j = 0; j < bundlesSideResult.rows.length; j++) {
				mainResult.rows[i].bundleIDs.push(bundlesSideResult.rows[j].bundleID);
			}

			// Downloads
			const downloadsSideQuery = 'SELECT * FROM "project_downloads" WHERE "projectID" = ' + mainResult.rows[i].id + ';';
			const downloadsSideResult = await conn.query(downloadsSideQuery);
			for (let j = 0; j < downloadsSideResult.rows.length; j++) {
				delete downloadsSideResult.rows[j].projectID;
				mainResult.rows[i].downloads.push(downloadsSideResult.rows[j]);
			}

			// Platforms
			const platformsSideQuery = 'SELECT * FROM "project_platforms" WHERE "projectID" = ' + mainResult.rows[i].id + ';';
			const platformsSideResult = await conn.query(platformsSideQuery);
			for (let j = 0; j < platformsSideResult.rows.length; j++) {
				mainResult.rows[i].platforms.push(platformsSideResult.rows[j].platform);
			}

			// Awards
			const awardsSideQuery = 'SELECT * FROM "project_awards" WHERE "projectID" = ' + mainResult.rows[i].id + ';';
			const awardsSideResult = await conn.query(awardsSideQuery);
			for (let j = 0; j < awardsSideResult.rows.length; j++) {
				mainResult.rows[i].awards.push(awardsSideResult.rows[j].awardName);
			}

			// Roles
			const rolesSideQuery = 'SELECT * FROM "project_roles" WHERE "projectID" = ' + mainResult.rows[i].id + ';';
			const rolesSideResult = await conn.query(rolesSideQuery);
			for (let j = 0; j < rolesSideResult.rows.length; j++) {
				mainResult.rows[i].roles.push(rolesSideResult.rows[j].role);
			}

			// Screenshots
			const screenshotsSideQuery = 'SELECT * FROM "project_screenshots" WHERE "projectID" = ' + mainResult.rows[i].id + ';';
			const screenshotsSideResult = await conn.query(screenshotsSideQuery);
			for (let j = 0; j < screenshotsSideResult.rows.length; j++) {
				const screenshotSideQuery = 'SELECT * FROM images WHERE "id" = ' + screenshotsSideResult.rows[j].imageID + ';';
				const screenshotSideResult = await conn.query(screenshotSideQuery);

				const screenshot = screenshotSideResult.rows[0];
				delete screenshot.id;

				screenshot.url = server + "/" + screenshot.path;
				delete screenshot.path;

				mainResult.rows[i].screenshots.push(screenshot);
			}

			// Skills
			const skillsSideQuery = 'SELECT * FROM "project_skills" WHERE "projectID" = ' + mainResult.rows[i].id + ';';
			const skillsSideResult = await conn.query(skillsSideQuery);
			for (let j = 0; j < skillsSideResult.rows.length; j++) {
				mainResult.rows[i].skills.push(skillsSideResult.rows[j].skill);
			}

			// Tools
			const toolsSideQuery = 'SELECT * FROM "project_tools" WHERE "projectID" = ' + mainResult.rows[i].id + ';';
			const toolsSideResult = await conn.query(toolsSideQuery);
			for (let j = 0; j < toolsSideResult.rows.length; j++) {
				// Tool
				const toolSideQuery = 'SELECT * FROM "tools" WHERE "id" = ' + toolsSideResult.rows[j].toolID + ';';
				const toolSideResult = await conn.query(toolSideQuery);

				const tool = toolSideResult.rows[0];
				delete tool.id;

				// Logo
				const logoSideQuery = 'SELECT * FROM "images" WHERE "id" = ' + tool.logoID + ';';
				const logoSideResult = await conn.query(logoSideQuery);

				const logo = logoSideResult.rows[0];
				delete logo.id;

				logo.url = server + "/" + logo.path;
				delete logo.path;

				tool.logo = logo;
				delete tool.logoID;


				mainResult.rows[i].tools.push(tool);
			}

			// Logo
			const logoSideQuery = 'SELECT * FROM "images" WHERE "id" = ' + mainResult.rows[i].logoID + ';';
			const logoSideResult = await conn.query(logoSideQuery);

			const logo = logoSideResult.rows[0];
			delete logo.id;

			logo.url = server + "/" + logo.path;
			delete logo.path;

			mainResult.rows[i].logo = logo;
			delete mainResult.rows[i].logoID;

			// Date added
			mainResult.rows[i].dateAdded = new Date(mainResult.rows[i].dateAdded).toString();

			if (i === mainResult.rows.length - 1) {
				return mainResult.rows;
			}
		}
		return "No results found";

	//} catch ( error ) {
	//	console.log( error );
	//}
}

export default getProjects;