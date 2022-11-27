import conn from "../../db";


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


async function getTimeline(id) {
	console.log("ID: " + id);

	let selectorQueries = [];

	if (id != undefined) {
		selectorQueries.push('"timestamps"."id" = ' + id);
	}

	if (selectorQueries.length > 0) {
		selectorQueries = 'WHERE ' + selectorQueries.join(' AND ');
	} else {
		selectorQueries = '';
	}

	try {
        const mainQuery = 'SELECT * FROM "timestamps"' + selectorQueries + ' ORDER BY "date";';
		//console.log(mainQuery);

		const mainResult = await conn.query(mainQuery);

		for (let i = 0; i < mainResult.rows.length; i++) {
			// Date
			mainResult.rows[i].date = new Date(mainResult.rows[i].date).toString();

			if (i === mainResult.rows.length - 1) {
				return mainResult.rows;
			}
		}
		return "No results found";

	} catch ( error ) {
		console.log( error );
	}
}

export default getTimeline;