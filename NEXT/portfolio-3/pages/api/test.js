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
        const mainQuery = 'SELECT "articles".* FROM "articles", "article_skills" WHERE "article_skills"."skillID" = 2 AND "articles"."id" = "article_skills"."articleID"';
		//const mainQuery = 'SELECT * FROM "article_skills" WHERE "articleID" = 14';
		const mainResult = await conn.query(mainQuery);

		for (let i = 0; i < mainResult.rows.length; i++) {
			if (i === mainResult.rows.length - 1) {
				return res.status(200).json(mainResult.rows);
			}
		}

	} catch ( error ) {
		console.log( error );
	}
};