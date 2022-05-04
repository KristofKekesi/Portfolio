import cursorSetup from "../functions/cursor";


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


function setCopyright(product, name, link) {
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
        copyright.style.display = "inline";

        for (let i = 0; i < content.children.length; i++) {
            if (content.children[i].children[0].innerHTML === finalString) {
                return;
            }
        }

        content.insertAdjacentHTML("beforeend", "<li><a className='target' href='" + link + "'>" + finalString +"</a></li>")
        cursorSetup();
    } catch (e) {
        console.log(e);
    }
}


export default setCopyright;