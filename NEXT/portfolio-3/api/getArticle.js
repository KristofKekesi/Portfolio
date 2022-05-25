//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


// Article class
class Article {
    constructor(id, name, description, cover, redirect,  isVisible, skills, madeWith, content, style) {
        
        this.id = id;
        this.name = name;
        this.description = description;
        this.cover = cover;
        this.redirect = redirect;
        this.isVisible = isVisible;
        this.skills = skills;
        this.madeWith = madeWith;
        this.content = content;
        this.style = style;
    }
}


function getArticle(url) {
    // function for serialize data from url to Article class
    async function serializeArticle(url) {
        let settings = { method: "Get" };

        const response = await fetch(url, settings);
        const json = await response.json();

        return new Article(
            json["id"],
            json["name"],
            json["description"],
            json["cover"],
            json["redirect"],
            json["isVisible"],
            json["skills"],
            json["tools"],
            json["content"],
            json["style"]
        );
    }

    return serializeArticle(url).then((final) => final);

}


function getArticles() {
    // function for serialize data from url to Article class
    async function serializeArticles() {
        let settings = { method: "Get" };

        const response = await fetch("https://www.kekesi.dev/api/article/INDEX.json", settings)
        const json = await response.json();

        return json;
    }

        return serializeArticles().then((final) => final);

}

export { getArticle, getArticles };