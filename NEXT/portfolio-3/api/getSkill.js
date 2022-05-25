//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


function getSkill(url) {

    // Skill class
    class Skill {
        constructor(id, name, madeWith, projects, featured_article, articles, style) {
            
            this.id = id;
            this.name = name;
            this.madeWith = madeWith;
            this.projects = projects;
            this.featured_article = featured_article;
            this.articles = articles;
            this.style = style;
        }
    }

    // function for serialize data from url to Skill class
    async function serializeSkill(url) {
        let settings = { method: "Get" };

        const response = await fetch(url, settings)
        const json = await response.json();

        return new Skill(
            json["id"],
            json["name"],
            json["tools"],
            json["projects"],
            json["featured-article"],
            json["articles"],
            json["style"]
        );
    }

    return serializeSkill(url).then((final) => final);

}


export default getSkill;