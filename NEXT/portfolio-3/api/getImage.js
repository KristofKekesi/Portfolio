import setCopyright from "../functions/copyright";


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


function getImage(url) {

    // Image class
    class Image {
        constructor(id, name, url, description, width, height, copyright, copyrightLink) {
            
            this.id = id;
            this.name = name;
            this.url = url;
            this.description = description;
            this.width = width;
            this.height = height;
            this.copyright = copyright;
            this.copyrightLink = copyrightLink;
        }
    }

    // function for serialize data from url to Image class
    async function serializeImage(url) {
        let settings = { method: "Get" };

        const response = await fetch(url, settings)
        const json = await response.json();

        if (json["copyright"] !== null) {
            setCopyright(json["name"], json["copyright"], json["copyright-link"]);
        }

        return new Image(
            json["id"],
            json["name"],
            json["url"],
            json["description"],
            json["width"],
            json["height"],
            json["copyright"],
            json["copyright-link"]
        );
    }

    return serializeImage(url).then((final) => final);

}


export default getImage;