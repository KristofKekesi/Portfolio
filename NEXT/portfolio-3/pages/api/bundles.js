import conn from "../../db";


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


export default async (req, res) => {
	const {
        query: { id, name, app },
        method,
    } = req;
	//console.log("ID: " + id + " Name: " + name + " App: " + app);

    let imports = ['"bundles"'];
	let selectorQueries = [];

	if (id != undefined) {
		selectorQueries.push('"bundles"."id" = ' + id);
	}
    if (name != undefined) {
        selectorQueries.push('"bundles"."name" = \'' + name + '\'');
    }
    if (app != undefined) {
        imports.push('"project_bundles"');
        selectorQueries.push('("project_bundles"."projectID" = ' + app + ' AND "bundles"."id" = "project_bundles"."bundleID")');
    }

	if (selectorQueries.length > 0) {
		selectorQueries = 'WHERE ' + selectorQueries.join(' AND ');
	} else {
		selectorQueries = '';
	}

	try {
        const mainQuery = 'SELECT "bundles".* FROM ' + imports + ' ' + selectorQueries + ' ORDER BY "bundles"."id";';
		//console.log(mainQuery);

		const mainResult = await conn.query(mainQuery);

		for (let i = 0; i < mainResult.rows.length; i++) {
			mainResult.rows[i].projects = [];

			// Projects
			const projectsSideQuery = 'SELECT * FROM "project_bundles" WHERE "bundleID" = ' + mainResult.rows[i].id + ';';
			const projectsSideResult = await conn.query(projectsSideQuery);
			for (let j = 0; j < projectsSideResult.rows.length; j++) {
				// Project
				const projectSideQuery = 'SELECT * FROM "projects" WHERE "id" = ' + projectsSideResult.rows[j].projectID + ';';
				const projectSideResult = await conn.query(projectSideQuery);

				const project = projectSideResult.rows[0];

				
				// Logo
				const logoSideQuery = 'SELECT * FROM "images" WHERE "id" = ' + projectSideResult.rows[0].logoID + ';';
				const logoSideResult = await conn.query(logoSideQuery);

				const logo = logoSideResult.rows[0];
				delete logo.id;

				project.logo = logo;
				delete project.logoID;

				mainResult.rows[i].projects.push(project);
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