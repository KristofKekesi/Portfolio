import conn from "../../config";


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
        const mainQuery = 'SELECT * FROM ' + imports + ' ' + selectorQueries + ';';
		//console.log(mainQuery);

		const mainResult = await conn.query(mainQuery);

		for (let i = 0; i < mainResult.rows.length; i++) {
			mainResult.rows[i].projects = [];

			// Projects
			const projectsSideQuery = "SELECT * FROM project_bundles WHERE \"bundleID\" = " + mainResult.rows[i].id + ";";
			const projectsSideResult = await conn.query(projectsSideQuery);
			for (let j = 0; j < projectsSideResult.rows.length; j++) {
				mainResult.rows[i].projects.push(projectsSideResult.rows[j].projectID);
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