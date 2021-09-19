//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


function getProject(url) {

    // Project class
    class Project {
        constructor(id, role, name, logo, discord_icon, version, skills, madeWith, description,
        download_link, website, promo_video, featured_article, articles, style) {
            
            this.id = id;
            this.role = role;
            this.name = name;
            this.logo = logo;
            this.discord_icon = discord_icon;
            this.version = version;
            this.skills = skills;
            this.madeWith = madeWith;
            this.description = description;
            this.download_link = download_link;
            this.website = website;
            this.promo_video = promo_video;
            this.featured_article = featured_article;
            this.articles = articles;
            this.style = style;
        }
    }

    // function for serialize data from url to Project class
    async function serializeProject(url) {
        let settings = { method: "Get" };

        const response = await fetch(url, settings)
        const json = await response.json();
        
        return new Project(
            json["id"],
            json["role"],
            json["name"],
            json["logo"],
            json["discord-icon"],
            json["version"],
            json["skill"],
            json["madeWith"],
            json["description"],
            json["download-link"],
            json["website"],
            json["promo-video"],
            json["featured-article"],
            json["articles"],
            json["style"]
            );
    }

    return serializeProject(url).then((final) => final);

}


export default getProject;