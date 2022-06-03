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
	try {
		const mainQuery = 'SELECT * FROM articles';
		const mainResult = await conn.query(mainQuery);

		for (let i = 0; i < mainResult.rows.length; i++) {
			mainResult.rows[i].skillIDs = [];

			// Skills
			const skillsSideQuery = "SELECT * FROM article_skills WHERE \"articleID\" = " + mainResult.rows[i].id;
			const skillsSideResult = await conn.query(skillsSideQuery);
			for (let j = 0; j < skillsSideResult.rows.length; j++) {
				mainResult.rows[i].skillIDs.push(skillsSideResult.rows[j].skillID);
			}
			
			if (i === mainResult.rows.length - 1) {
				return res.status(200).json(mainResult.rows);
			}
		}

	} catch ( error ) {
		console.log( error );
	}
};