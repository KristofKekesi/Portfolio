import Bookmark from "../Bookmark/Bookmark";


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


function Bundle(props) {
    // PROPS:
    // name, children, background, theme, selectable
    console.log("name: " + props.name + ", children: " + props.children + ", background: " + props.background + ", theme: " + props.theme)

    if (props.children == undefined) {
        return null;
    }

    return(
        <div id={ props.name.toLowerCase().replaceAll(" ", "-")} className={"bundle " + (props.theme == "dark" ? "text-black" : "text-white") + " my-10 " + (props.selectable ? "selectable" : "")} style={{background: props.background}}>
            <div className="mb-10 h-px"></div>
            { props.name ? <h1 className="selectable text-title nosection group flex items-center gap-2" key={ props.name }><span>{ props.name }</span><Bookmark color="white" weight="bold" id={ props.name.toLowerCase().replaceAll(" ", "-") } /></h1> : null }
            <div className="bundle-content w-full flex flex-wrap max-h-28 h-28 overflow-hidden justify-between px-12 mb-10 gap-x-12 gap-y-96">
                { props.children }
            </div>
            <div className="mt-10 h-px"></div>
        </div>
    );
}

export default Bundle;