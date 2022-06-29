const fetch = require('node-fetch');


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


function getURLs(type) {
    // API location
    const API_URL = "https://www.kekesi.dev/api/";

    // URL class
    class URL {
        constructor(id, type, URL) {
            this.id = id;
            this.type = type;
            this.URL = URL;
        }
    }

    // map with location and matching type
    const types = new Map([
     // [ "/proj-bundle", "project-bundle" ],
        [ "/proj",        "project"        ],
     // [ "/article",     "article"        ],
        [ "/img",         "image"          ],
        [ "/skill",       "skill"          ],
     // [ "/video",       "video"          ]
    ]);

    const invertedTypes = new Map(Array.from(types, a => a.reverse()));


    // function for serialize data from url to URL classes
    function serializeURL(url, type, list) {
        let settings = { method: "Get" };

        fetch(url, settings)
        .then(res => res.json())
        .then((json) => {
            for (let i = 0; i < json.length; i++) {
                list.push(new URL(json[i]["id"], type, json[i]["location"]));
            }
        });
    }


    var final = []
    // if no specific type
    if (type == null) {
        for (let i = 0; i < Array.from(types.keys()).length; i++) {
            serializeURL(API_URL + Array.from(types.keys())[i] + "/INDEX.json", Array.from(types.values())[i], final);
        }
    }
    // if there is a specific type
    else if (Array.from(types.values()).includes(type)) {
        serializeURL(API_URL + invertedTypes.get(type) + "/INDEX.json", type, final);
    }
    return final;
}


export default getURLs;