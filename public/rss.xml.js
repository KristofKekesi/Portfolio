import { api, server } from "../config.js";

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


export default function RSS({ response }) {
	return( response );
}

export const getStaticProps = async () => {
	const now = new Date();
	const date = now.getFullYear() + "-" + ('0' + now.getMonth()).slice(-2) + "-" + ('0' + now.getDate()).slice(-2);
	
	// List with all static pages
	const pages = [
		{"title": "Timeline", "description": "Important dates and events in my career.", "link": server + "/timeline", "guid": server + "/timeline", "pubDate": "2022-06-28T00:00:00+00:00"},
	]

	// Articles
	const articlesResponse = await fetch("/api/articles?isVisible=true");
	const articles = await articlesResponse.json();
	articles.forEach(article => {
		pages.push({"title": article.name, "description": article.description, "link": server + "/" + article.redirect, "guid": server + "/" + article.redirect, "pubDate": article.releaseDate},);
	});

	// Projects
	const projectsResponse = await fetch("/api/projects");
	const projects = await projectsResponse.json();
	projects.forEach(project => {
		pages.push({"title": project.name, "description": project.description, "link": server + "/projects/" + encodeURIComponent(project.name), "guid": server + "/projects/" + encodeURIComponent(project.name), "pubDate": project.dateAdded},);
	});

	let string = '';
	string += '<?xml version="1.0" encoding="utf-8"?>';
	string += '<rss version="2.0">';
		string += '<channel>';
			string += '<title>Kristóf Kékesi</title>';
			string += '<description>Articles and Projects from my portfolio.</description>';
			string += '<lastBuildDate>' + date + '</lastBuildDate>';
			string += '<lastPubDate>' + date + '</lastPubDate>';
			string += '<ttl>1800</ttl>';
			string += '<link>' + server + '</link>';
			string += '<language>en</language>';
			string += '<image>';
				string += '<url>' + server + '/favicon.png</url>';
				string += '<title>Kristóf Kékesi</title>';
				string += '<link>' + server + '</link>';
			string += '</image>';
			pages.forEach(page => {
				string += OBJtoXML({
					"item": page
			});
			});
		string += '</channel>';
	string += '</rss>';

	return {
		props: {
			response: string,
		},
	};
}