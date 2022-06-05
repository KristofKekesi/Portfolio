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
    const {
        query: { id, name, redirect, isVisible, content },
        method,
    } = req;
    console.log(id);

	let selectorQueries = [];
	if (id != undefined) {
		selectorQueries.push("id = " + id);
	}
	if (name != undefined) {
		selectorQueries.push("name = '" + name + "'");
	}
	if (redirect != undefined) {
		selectorQueries.push("redirect = '" + redirect + "'");
	}
	if (isVisible != undefined) {
		selectorQueries.push("isVisible = " + isVisible);
	}
	if (content != undefined) {
		selectorQueries.push("content = '" + content + "'");
	}
	selectorQueries = "WHERE " + selectorQueries.join(" AND ");


    if (id == undefined && name == undefined && redirect == undefined && isVisible == undefined && content == undefined) {
        return res.status(400).json("No query parameters provided");
    }

	try {
		const mainQuery = 'SELECT * FROM articles ' + selectorQueries;
		const mainResult = await conn.query(mainQuery);

		for (let i = 0; i < mainResult.rows.length; i++) {
			mainResult.rows[i].skillIDs = [];
			mainResult.rows[i].toolIDs  = [];

			// Skills
			const skillsSideQuery = "SELECT * FROM article_skills WHERE \"articleID\" = " + mainResult.rows[i].id;
			const skillsSideResult = await conn.query(skillsSideQuery);
			for (let j = 0; j < skillsSideResult.rows.length; j++) {
				mainResult.rows[i].skillIDs.push(skillsSideResult.rows[j].skillID);
			}

			// Tools
			const toolsSideQuery = "SELECT * FROM article_tools WHERE \"articleID\" = " + mainResult.rows[i].id;
			const toolsSideResult = await conn.query(toolsSideQuery);
			for (let j = 0; j < toolsSideResult.rows.length; j++) {
				mainResult.rows[i].toolIDs.push(toolsSideResult.rows[j].toolID);
			}

			if (i === mainResult.rows.length - 1) {
				return res.status(200).json(mainResult.rows[0]);
			}
		}
		return res.status(400).json("No results found");

	} catch ( error ) {
		console.log( error );
	}
};