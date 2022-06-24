import cursorSetup from "./cursor";


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


function setCopyright(json) {
    function checkBranch(json) {
        function checkContent(json, key) {
            if (typeof json[key] === "object") {
                checkBranch(json[key]);
            } else {
                if (json.copyrightHolder !== undefined && json.copyrightHolder !== null) {
                    addCopyright(json.name, json.copyrightHolder, json.copyrightURL || "");
                }
            }
        }

        for (let key in json) {
            if (typeof json === "object") {
                checkContent(json, key);
            }
        }
    }

    checkBranch(json);

    function addCopyright(product, name, link) {
        let copyright = document.getElementById("copyright");
        let content = document.getElementById("copyright-content")
        
        if (link == null || link === "undefined") {
            link = "";
        }

        let finalString;
        if (product == null || product === "undefined") {
            finalString = name;
        } else {
            finalString = product + " - " + name;
        }

        try {
            copyright.classList.toggle = "hidden";

            for (let i = 0; i < content.children.length; i++) {
                if (content.children[i].children[0].innerHTML === finalString) {
                    return;
                }
            }

            content.insertAdjacentHTML("beforeend", "<li><a class='target nowrap' href='" + link + "'>" + finalString +"</a></li>")
        } catch (error) {
            console.log(error);
        }
    }
}


export default setCopyright;