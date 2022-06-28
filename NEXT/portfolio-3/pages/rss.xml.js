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


export default class RSS {
	static async getInitialProps({ res }) {
		const now = new Date();
		const date = now.getFullYear() + "-" + ('0' + now.getMonth()).slice(-2) + "-" + ('0' + now.getDay()).slice(-2);
		
		// List with all static pages
		const pages = [
			{"title": "Timeline", "description": "Important dates and events in my career.", "link": server + "/timeline", "guid": server + "/timeline", "pubDate": "2022-06-28T00:00:00+00:00"},
		]

		// Articles
		const articlesResponse = await fetch(server + "/api/articles?isVisible=true");
		const articles = await articlesResponse.json();
		articles.forEach(article => {
			pages.push({"title": article.name, "description": article.description, "link": server + "/" + article.redirect, "guid": server + "/" + article.redirect, "pubDate": article.releaseDate},);
		});

		// Projects
		const projectsResponse = await fetch(server + "/api/projects");
		const projects = await projectsResponse.json();
		projects.forEach(project => {
			pages.push({"title": project.name, "description": project.description, "link": server + "/projects/" + encodeURIComponent(project.name), "guid": server + "/projects/" + encodeURIComponent(project.name), "pubDate": project.dateAdded},);
		});

		res.setHeader('Content-Type', 'text/xml');
        res.write('<?xml version="1.0" encoding="utf-8"?>');
		res.write('<rss version="2.0">');
            res.write('<channel>');
                res.write('<title>Kristóf Kékesi</title>');
                res.write('<description>Articles and Projects from my portfolio.</description>');
                res.write('<lastBuildDate>' + date + '</lastBuildDate>');
                res.write('<lastPubDate>' + date + '</lastPubDate>');
                res.write('<ttl>1800</ttl>');
                res.write('<link>' + server + '</link>');
                res.write('<language>en</language>');
                res.write('<image>')
                    res.write('<url>' + server + '/favicon.png</url>')
                    res.write('<title>Kristóf Kékesi</title>')
                    res.write('<link>' + server + '</link>')
                res.write('</image>')
                pages.forEach(page => {
                    res.write(OBJtoXML({
                        "item": page
                }));
                });
            res.write('</channel>');
		res.write('</rss>');
		res.end();
	}
}