import conn from "../../db";


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


export default async (req, res) => {
	const {
        query: { id },
        method,
    } = req;
	//console.log("ID: " + id);

	let selectorQueries = [];

	if (id != undefined) {
		selectorQueries.push('"tools"."id" = ' + id);
	}

	if (selectorQueries.length > 0) {
		selectorQueries = 'WHERE ' + selectorQueries.join(' AND ');
	} else {
		return res.status(500).json("No query parameters provided");
	}

	try {
        const mainQuery = 'SELECT * FROM "tools"' + selectorQueries + ';';
		//console.log(mainQuery);
		
		const mainResult = await conn.query(mainQuery);

		for (let i = 0; i < mainResult.rows.length; i++) {
			// Logo
			const logoSideQuery = 'SELECT * FROM "images" WHERE "id" = ' + mainResult.rows[i].imageID + ';';
			const logoSideResult = await conn.query(logoSideQuery);
			
			const logo = logoSideResult.rows[0];
			delete logo.id;

			mainResult.rows[i].logo = logo;
			delete mainResult.rows[i].imageID;

			return res.status(200).json(mainResult.rows[0]);
		}
		return res.status(404).json("No results found");

	} catch ( error ) {
		//console.log( error );
	}
};