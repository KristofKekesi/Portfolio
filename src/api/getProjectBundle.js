//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


function getProjectBundle(url) {

    // ProjectBundle class
    class ProjectBundle {
        constructor(id, name, projects, style) {
            
            this.id = id;
            this.name = name;
            this.projects = projects;
            this.style = style;
        }
    }

    // function for serialize data from url to ProjectBundle class
    async function serializeProjectBundle(url) {
        let settings = { method: "Get" };

        const response = await fetch(url, settings)
        const json = await response.json();
        
        return new ProjectBundle(
            json["id"],
            json["name"],
            json["projects"],
            json["style"]
        );
    }

    return serializeProjectBundle(url).then((final) => final);

}


export default getProjectBundle;