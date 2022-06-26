import conn from "../../db";


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


export default async (req, res) => {
	const {
        query: { id, type, copyright },
        method,
    } = req;
	//console.log("ID: " + id + " TYPE: " + type + " COPYRIGHT: " + copyright);

	let selectorQueries = [];

	if (id != undefined) {
		selectorQueries.push('"images"."id" = ' + id);
	}
    if (type != undefined) {
        selectorQueries.push('LOWER("images"."type") = LOWER(\'' + type + '\')');
    }
    if (copyright != undefined) {
        selectorQueries.push('(LOWER("images"."copyrightHolder") = LOWER(\'' + copyright + '\') OR LOWER("images"."copyrightURL") = LOWER(\'' + copyright + '\'))');
    }

	if (selectorQueries.length > 0) {
		selectorQueries = 'WHERE ' + selectorQueries.join(' AND ');
	} else {
		return res.status(500).json("No query parameters provided");
	}

	try {
        const mainQuery = 'SELECT * FROM "images" ' + selectorQueries + ';';
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