import { Pool } from "pg";


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


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
        query: { id },
        method,
    } = req;
	//console.log("ID: " + id);

	let selectorQueries = [];

	if (id != undefined) {
		selectorQueries.push('"timeline"."id" = ' + id);
	}

	if (selectorQueries.length > 0) {
		selectorQueries = 'WHERE ' + selectorQueries.join(' AND ');
	} else {
		selectorQueries = '';
	}

	try {
        const mainQuery = 'SELECT * FROM "timeline"' + selectorQueries + ';';
		//console.log(mainQuery);

		const mainResult = await conn.query(mainQuery);

		for (let i = 0; i < mainResult.rows.length; i++) {
			if (i === mainResult.rows.length - 1) {
				return res.status(200).json(mainResult.rows);
			}
		}
		return res.status(404).json("No results found");

	} catch ( error ) {
		console.log( error );
	}
};