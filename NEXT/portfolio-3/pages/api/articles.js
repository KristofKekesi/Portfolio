import conn from "../../db";
import { server } from "../../config";


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


export default async (req, res) => {
    const {
        query: { id, name, redirect, isVisible, content, skill, tool, sitemapChangeFrequency, sitemapPriority },
        method,
    } = req;
    //console.log("ID: " + id + " Name: " + name + " Redirect: " + redirect + " IsVisible: " + isVisible + " Content: " + content + " Skill: " + skill + " Tool: " + tool, "SitemapChangeFrequency: " + sitemapChangeFrequency + " SitemapPriority: " + sitemapPriority);

	let imports = ['"articles"'];
	let selectorQueries = [];

	if (id != undefined) {
		selectorQueries.push('"articles"."id" = ' + id);
	}
	if (name != undefined) {
		selectorQueries.push('LOWER("articles"."name") = LOWER(\'' + name + '\')');
	}
	if (redirect != undefined) {
		selectorQueries.push('LOWER("articles"."redirect") = LOWER(\'' + redirect + '\')');
	}
	if (isVisible != undefined) {
		selectorQueries.push('"articles"."isVisible" = ' + isVisible);
	}
	if (content != undefined) {
		selectorQueries.push('LOWER("articles"."content") = LOWER(\'' + content + '\')');
	}
	if (skill != undefined) {
		imports.push('"article_skills"');
		selectorQueries.push('(LOWER("article_skills"."skill") = LOWER(\'' + skill + '\') AND "articles"."id" = "article_skills"."articleID")');
	}
	if (tool != undefined) {
		imports.push('"article_tools"');
		selectorQueries.push('("article_tools"."toolID" = ' + tool + ' AND "articles"."id" = "article_tools"."articleID")');
	}
	if (sitemapChangeFrequency != undefined) {
		selectorQueries.push('LOWER("articles"."sitemapChangeFrequency") = LOWER(\'' + sitemapChangeFrequency + '\')');
	}
	if (sitemapPriority != undefined) {
		selectorQueries.push('"articles"."sitemapPriority" = ' + sitemapPriority);
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
			mainResult.rows[i].dockElements = [];
			mainResult.rows[i].skills = [];
			mainResult.rows[i].tools  = [];

			// Dock elements
			const dockElementsSideQuery = 'SELECT * FROM "article_dockElements" WHERE "articleID" = ' + mainResult.rows[i].id + ';';
			const dockElementsSideResult = await conn.query(dockElementsSideQuery);
			for (let j = 0; j < dockElementsSideResult.rows.length; j++) {
				mainResult.rows[i].dockElements.push(dockElementsSideResult.rows[j].projectID);
			}

			// Skills
			const skillsSideQuery = 'SELECT * FROM "article_skills" WHERE "articleID" = ' + mainResult.rows[i].id + ' ORDER BY "skill";';
			const skillsSideResult = await conn.query(skillsSideQuery);
			for (let j = 0; j < skillsSideResult.rows.length; j++) {
				mainResult.rows[i].skills.push(skillsSideResult.rows[j].skill);
			}

			// Tools
			// If About article add all tools
			if (id == 14) {
				let toolsSideQuery = 'SELECT * FROM "tools" ORDER BY "name";';
				const toolsSideResult = await conn.query(toolsSideQuery);

				for (let j = 0; j < toolsSideResult.rows.length; j++) {
					const tool = toolsSideResult.rows[j];
					delete tool.id;

					// Logo
					const logoSideQuery = 'SELECT * FROM "images" WHERE "id" = ' + tool.imageID + ';';
					const logoSideResult = await conn.query(logoSideQuery);

					const logo = logoSideResult.rows[0];
					delete logo.id;
	
					tool.logo = logo;
					delete tool.imageID;
	
					mainResult.rows[i].tools.push(tool);
				}
			} else {
				let toolsSideQuery = 'SELECT * FROM "article_tools" WHERE "articleID" = ' + mainResult.rows[i].id + ' ORDER BY "toolID";';
				const toolsSideResult = await conn.query(toolsSideQuery);

				for (let j = 0; j < toolsSideResult.rows.length; j++) {
					// Tool
					const toolSideQuery = 'SELECT * FROM "tools" WHERE "id" = ' + toolsSideResult.rows[j].toolID + 'ORDER BY "name";';
					const toolSideResult = await conn.query(toolSideQuery);
	
					const tool = toolSideResult.rows[0];
					delete tool.id;
	
					// Logo
					const logoSideQuery = 'SELECT * FROM "images" WHERE "id" = ' + tool.imageID + ';';
					const logoSideResult = await conn.query(logoSideQuery);
					
					const logo = logoSideResult.rows[0];
					delete logo.id;
	
					tool.logo = logo;
					delete tool.imageID;
	
	
					mainResult.rows[i].tools.push(tool);
				}
			}

			// Cover
			const coverQuery = 'SELECT * FROM "images" WHERE "id" = ' + mainResult.rows[i].coverID + ';';

			const coverResult = await conn.query(coverQuery);

			const cover = coverResult.rows[0]
			delete cover.id;
			mainResult.rows[i].cover = cover;

			delete mainResult.rows[i].coverID;

			// Content
			const contentResponse = await fetch(server + "/" + encodeURIComponent(mainResult.rows[i].content));
			const content = await contentResponse.json();

			async function setArticlePreviewSmoll(articlePreviewSmoll) {
				articlePreviewSmoll.articles = [];

				for (let j = 0; j < articlePreviewSmoll.articleIDs.length; j++) {
					const articleQuery = 'SELECT * FROM "articles" WHERE "id" = ' + articlePreviewSmoll.articleIDs[j] + ';';
					const articleResult = await conn.query(articleQuery);

					const article = articleResult.rows[0];
					delete article.content;

					// Cover
					const coverQuery = 'SELECT * FROM "images" WHERE "id" = ' + article.coverID + ';';
					const coverResult = await conn.query(coverQuery);

					article.cover = coverResult.rows[0];

					articlePreviewSmoll.articles.push(article);
				}

				delete articlePreviewSmoll.articleIDs;
				return articlePreviewSmoll;
			}

			async function setArticlePreviewBig(articlePreviewBig) {
				articlePreviewBig.articles = [];

				for (let j = 0; j < articlePreviewBig.articleIDs.length; j++) {
					const articleQuery = 'SELECT * FROM "articles" WHERE "id" = ' + articlePreviewBig.articleIDs[j] + ';';
					const articleResult = await conn.query(articleQuery);

					const article = articleResult.rows[0];
					delete article.content;

					// Cover
					const coverQuery = 'SELECT * FROM "images" WHERE "id" = ' + article.coverID + ';';
					const coverResult = await conn.query(coverQuery);
					
					article.cover = coverResult.rows[0];
					
					articlePreviewBig.articles.push(article);
				}

				delete articlePreviewBig.articleIDs;
				return articlePreviewBig;
			}

			async function setGallery(gallery) {
				gallery.images = [];
				for (let j = 0; j < gallery.imageIDs.length; j++) {
					const imageQuery = 'SELECT * FROM "images" WHERE "id" = ' + gallery.imageIDs[j] + ';';
					const imageResult = await conn.query(imageQuery);

					const image = imageResult.rows[0];
					delete image.id;

					gallery.images.push(image);
				}

				delete gallery.imageIDs;
				return gallery;
			}

			async function setProjectBundle(projectBundle) {
				const projectBundleResponse = await fetch(server + "/api/bundles?id=" + encodeURIComponent(projectBundle.id));
				const projectBundleResult = await projectBundleResponse.json();

				projectBundle.projectBundle = projectBundleResult[0];
				return projectBundle;
			}

			for (let j = 0; j < content.length; j++) {
				if (content[j].type == "article-preview-smoll") {
					content[j] = await setArticlePreviewSmoll(content[j]);
				} else if (content[j].type == "article-preview-big") {
					content[j] = await setArticlePreviewBig(content[j]);
				} else if (content[j].type == "gallery") {
					content[j] = await setGallery(content[j]);
				} else if (content[j].type == "project-bundle") {
					content[j] = await setProjectBundle(content[j]);
				} else if (content[j].type == "section") {
					for (let k = 0; k < content[j].content.length; k++) {
						if (content[j].content[k].type == "article-preview-smoll") {
							content[j].content[k] = await setArticlePreviewSmoll(content[j].content[k]);
						} else if (content[j].content[k].type == "article-preview-big") {
							content[j].content[k] = await setArticlePreviewBig(content[j].content[k]);
						} else if (content[j].content[k].type == "gallery") {
							content[j].content[k] = await setGallery(content[j].content[k]);
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