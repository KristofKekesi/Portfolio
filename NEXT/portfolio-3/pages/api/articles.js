import { Pool } from "pg";

import { server } from "../../config";


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
        query: { id, name, redirect, isVisible, content, skill, tool },
        method,
    } = req;
    //console.log("ID: " + id + " Name: " + name + " Redirect: " + redirect + " IsVisible: " + isVisible + " Content: " + content + " Skill: " + skill + " Tool: " + tool);

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
		selectorQueries.push('("article_skills"."skills" = ' + skill + ' AND "articles"."id" = "article_skills"."articleID")');
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
		const mainQuery = 'SELECT "articles".* ' + imports + ' ' + selectorQueries + ' ORDER BY "articles"."id";';
		//console.log(mainQuery);

		const mainResult = await conn.query(mainQuery);

		for (let i = 0; i < mainResult.rows.length; i++) {
			mainResult.rows[i].skills = [];
			mainResult.rows[i].tools  = [];

			// Skills
			const skillsSideQuery = 'SELECT * FROM article_skills WHERE "articleID" = ' + mainResult.rows[i].id + ' ORDER BY "skill";';
			const skillsSideResult = await conn.query(skillsSideQuery);
			for (let j = 0; j < skillsSideResult.rows.length; j++) {
				mainResult.rows[i].skills.push(skillsSideResult.rows[j].skill);
			}

			// Tools
			const toolsSideQuery = "SELECT * FROM article_tools WHERE \"articleID\" = " + mainResult.rows[i].id + " ORDER BY \"toolID\";";
			const toolsSideResult = await conn.query(toolsSideQuery);
			for (let j = 0; j < toolsSideResult.rows.length; j++) {
				const toolSideQuery = "SELECT * FROM tools WHERE \"id\" = " + toolsSideResult.rows[j].toolID + ";";
				const toolSideResult = await conn.query(toolSideQuery);

				const tool = toolSideResult.rows[0]
				delete tool.id;

				mainResult.rows[i].tools.push(tool);
			}

			// Cover
			const coverQuery = "SELECT * FROM images WHERE \"id\" = " + mainResult.rows[i].coverID + ";";

			const coverResult = await conn.query(coverQuery);

			const cover = coverResult.rows[0]
			delete cover.id;
			mainResult.rows[i].cover = cover;

			delete mainResult.rows[i].coverID;

			// Content
			const contentResponse = await fetch(server + "/" + mainResult.rows[i].content);
			const content = await contentResponse.json();

			async function setArticlePreviewSmoll(articlePreviewSmoll) {
				console.log("ArticlePreviewSmoll: " + JSON.stringify(articlePreviewSmoll));

				for (let j = 0; j < articlePreviewSmoll.IDs.length; j++) {
					const articleQuery = 'SELECT * FROM "articles" WHERE "id" = ' + articlePreviewSmoll.IDs[j] + ';';
					const articleResult = await conn.query(articleQuery);
					console.log(articleResult.rows[0]);
				}

				//TODO
				return articlePreviewSmoll;
			}
			function setArticlePreviewBig(articlePreviewBig) {
				console.log("ArticlePreviewBig: " + JSON.stringify(articlePreviewBig));

				//TODO
				return articlePreviewBig;
			}
			function setGallery(gallery) {
				console.log("Gallery: " + JSON.stringify(gallery));

				//TODO
				return gallery;
			}

			for (let j = 0; j < content.length; j++) {
				if (content[j].type == "article-preview-smoll") {
					content[j] = setArticlePreviewSmoll(content[j]);
				} else if (content[j].type == "article-preview-big") {
					content[j] = setArticlePreviewBig(content[j]);
				} else if (content[j].type == "gallery") {
					content[j] = setGallery(content[j]);
				} else if (content[j].type == "section") {
					for (let k = 0; k < content[j].content.length; k++) {
						if (content[j].content[k].type == "article-preview-smoll") {
							content[j].content[k] = setArticlePreviewSmoll(content[j].content[k]);
						} else if (content[j].content[k].type == "article-preview-big") {
							content[j].content[k] = setArticlePreviewBig(content[j].content[k]);
						} else if (content[j].content[k].type == "gallery") {
							content[j].content[k] = setGallery(content[j].content[k]);
						}
					}
				}
			}

			mainResult.rows[i].content = content;

			if (i === mainResult.rows.length - 1) {
				return res.status(200).json(mainResult.rows);
			}
		}
		return res.status(404).json("No results found");


	} catch ( error ) {
		console.log( error );
	}
};