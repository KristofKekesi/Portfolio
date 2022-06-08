//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


// Article class
class Article {
    constructor(content) {
        this.content = content;
    }
}


function getArticle(url) {
    // function for serialize data from url to Article class
    async function serializeArticle(url) {
        let settings = { method: "Get" };

        const response = await fetch(url, settings);
        const json = await response.json();

        return new Article(
            json
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