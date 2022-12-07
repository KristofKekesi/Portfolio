import Link from "next/link";


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


function Bookmark(props) {
    // PROPS
    // color, weight, id

    let src = "icon_add_link_" + (props.color ? props.color : "black") + "_" + (props.weight ? props.weight : "bold") + ".svg";

    switch(props.weight) {
        case "bold":
            return(
                <Link href={"#" + props.id} className="target" style={{height: "1em", width: "1em"}}><img className="group-hover:inline hidden" style={{height: "1em", width: "1em"}} src={ src } alt="bookmark" /></Link>
            );
        case "medium":
            return(
                <Link href={"#" + props.id} className="target" style={{height: "1em", width: "1em"}}><img className="group-hover:inline hidden" style={{height: "1em", width: "1em"}} src={ src } alt="bookmark" /></Link>
            );
        default: return(
            <Link href={"#" + props.id} className="target" style={{height: "1em", width: "1em"}}><img className="group-hover:inline hidden" style={{height: "1em", width: "1em"}} src={ src } alt="bookmark" /></Link>
        );;
    }
}

export default Bookmark;