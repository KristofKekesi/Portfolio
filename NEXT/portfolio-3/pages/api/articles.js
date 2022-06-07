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
        query: { id, name, redirect, isVisible, content, skill, tool },
        method,
    } = req;
    console.log("ID: " + id + " Name: " + name + " Redirect: " + redirect + " IsVisible: " + isVisible + " Content: " + content + " Skill: " + skill + " Tool: " + tool);

	let imports = ['"articles"'];
	let selectorQueries = [];

	if (id != undefined) {
		selectorQueries.push('"articles"."id" = ' + id);
	}
	if (name != undefined) {
		selectorQueries.push('"articles"."name" = ' + '\'' + name + '\'');
	}
	if (redirect != undefined) {
		selectorQueries.push('"articles"."redirect" = ' + '\'' + redirect + '\'');
	}
	if (isVisible != undefined) {
		selectorQueries.push('"articles"."isVisible" = ' + isVisible);
	}
	if (content != undefined) {
		selectorQueries.push('"articles"."content" = ' + '\'' + content + '\'');
	}
	if (skill != undefined) {
		imports.push('"article_skills"');
		selectorQueries.push('("article_skills"."skillID" = ' + skill + ' AND "articles"."id" = "article_skills"."articleID")');
	}
	if (tool != undefined) {
		imports.push('"article_tools"');
		selectorQueries.push('("article_tools"."toolID" = ' + tool + ' AND "articles"."id" = "article_tools"."articleID")');
	}

	imports = 'FROM ' + imports.join(", ");
	if (selectorQueries.length > 0) {
		selectorQueries = 'WHERE ' + selectorQueries.join(' AND ');
	} else {
		selectorQueries = '';
	}

	try {
		const mainQuery = 'SELECT "articles".* ' + imports + ' ' + selectorQueries + ';';
		console.log(mainQuery);
		const mainResult = await conn.query(mainQuery);

		for (let i = 0; i < mainResult.rows.length; i++) {
			mainResult.rows[i].skillIDs = [];
			mainResult.rows[i].toolIDs  = [];

			// Skills
			const skillsSideQuery = "SELECT * FROM article_skills WHERE \"articleID\" = " + mainResult.rows[i].id + ";";
			const skillsSideResult = await conn.query(skillsSideQuery);
			for (let j = 0; j < skillsSideResult.rows.length; j++) {
				mainResult.rows[i].skillIDs.push(skillsSideResult.rows[j].skillID);
			}

			// Tools
			const toolsSideQuery = "SELECT * FROM article_tools WHERE \"articleID\" = " + mainResult.rows[i].id + ";";
			const toolsSideResult = await conn.query(toolsSideQuery);
			for (let j = 0; j < toolsSideResult.rows.length; j++) {
				mainResult.rows[i].toolIDs.push(toolsSideResult.rows[j].toolID);
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