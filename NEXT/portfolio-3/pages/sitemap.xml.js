import { server } from "../config.js";

//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)

function OBJtoXML(obj) {
	var xml = '';
	for (var prop in obj) {
		xml += obj[prop] instanceof Array ? '' : "<" + prop + ">";
		if (obj[prop] instanceof Array) {
			for (var array in obj[prop]) {
				xml += "<" + prop + ">";
				xml += OBJtoXML(new Object(obj[prop][array]));
				xml += "</" + prop + ">";
			}
		} else if (typeof obj[prop] == "object") {
			xml += OBJtoXML(new Object(obj[prop]));
		} else {
			xml += obj[prop];
		}
		xml += obj[prop] instanceof Array ? '' : "</" + prop + ">";
	}
	var xml = xml.replace(/<\/?[0-9]{1,}>/g, '');
	return xml
}


export default class Sitemap {
	static async getInitialProps({ res }) {
		const now = new Date();
		const date = now.getFullYear() + "-" + ('0' + now.getMonth()).slice(-2) + "-" + ('0' + now.getDate()).slice(-2);
		
		// List with all static pages
		const pages = [
			{"loc": server, "lastmod": date, "changefreq": "monthly", "priority": "1.0"},
			{"loc": server + "/about", "lastmod": date, "changefreq": "monthly", "priority": "0.9"},
			{"loc": server + "/timeline", "lastmod": date, "changefreq": "monthly", "priority": "0.9"},
		]

		// Articles
		const articlesResponse = await fetch(server + "/api/articles?isVisible=true");
		const articles = await articlesResponse.json();
		articles.forEach(article => {
			pages.push({"loc": server + "/" + article.redirect, "lastmod": date, "changefreq": article.sitemapChangeFrequency, "priority": article.sitemapPriority});
		});

		// Projects
		const projectsResponse = await fetch(server + "/api/projects");
		const projects = await projectsResponse.json();
		projects.forEach(project => {
			pages.push({"loc": server + "/projects/" + encodeURIComponent(project.name), "lastmod": date, "changefreq": "yearly", "priority": 0.5});
		});

		res.setHeader('Content-Type', 'text/xml');
		res.write('<?xml version="1.0" encoding="UTF-8"?>');
		res.write('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');
		res.write(OBJtoXML({
			"url": pages
		}));
		res.write('</urlset>');
		res.end();
	}
}