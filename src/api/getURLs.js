const fetch = require('node-fetch');

const API_URL = "http://www.kekesi.dev/api/";
const API_ENDPOINTS = ["/proj", "/img"];

let settings = { method: "Get" };

function getURLs() {
    var final = []

    fetch(API_URL + API_ENDPOINTS[1] + "/INDEX.json", settings)
        .then(res => res.json())
        .then((json) => {
            for (let i = 0; i < json.length; i++) {
                final.push(new URL(json[i]["id"], "project", json[i]["location"]));
            }
        });
        console.log(final);
    return final;
}

module.exports = getURLs;

class URL {
    constructor(id, type, URL) {
        this.id = id;
        this.type = type;
        this.URL = URL;
    }
}