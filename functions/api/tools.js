import conn from "../../db";


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


async function getTools(id) {
	//console.log("ID: " + id);

	let selectorQueries = [];

	if (id != undefined) {
		selectorQueries.push('"tools"."id" = ' + id);
	}

	if (selectorQueries.length > 0) {
		selectorQueries = 'WHERE ' + selectorQueries.join(' AND ');
	} else {
		selectorQueries = '';
	}

	//try {
        const mainQuery = 'SELECT * FROM "tools"' + selectorQueries + ' ORDER BY "tools"."id";';
		//console.log(mainQuery);
		
		const mainResult = await conn.query(mainQuery);
		//console.log(mainResult.rows);

		for (let i = 0; i < mainResult.rows.length; i++) {
			// Logo
			const logoSideQuery = 'SELECT * FROM "images" WHERE "id" = ' + mainResult.rows[i].logoID + ';';
			const logoSideResult = await conn.query(logoSideQuery);
			
			const logo = logoSideResult.rows[0];
			delete logo.id;

			delete mainResult.rows[i].logoID;

			mainResult.rows[i].logo = logo;
			delete mainResult.rows[i].imageID;
		}

		if (mainResult.rows.length != 0) {
			return mainResult.rows;
		} else {
			return "No results found";
		}

	//} catch ( error ) {
	//	console.log( error );
	//}
};

export default getTools;