//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)

import { server } from "../../config";


function Quote(props) {
    // PROPS
    // quote, name, image

    if (props.quote == undefined || props.name == undefined) {
        return null;
    }

    return (
        <div className="section">
            <div className="mb-10 h-px"></div>
            <span className="text-9xl italic text-gray-500 absolute opacity-20 ml-4">&quot;</span>
            <blockquote className="text-subtitle pt-8 font-interBold indent-1 text-justify" dangerouslySetInnerHTML={{ __html: props.quote }} />
            <div className="flex flex-row justify-end">
                <cite className="text-subsubtitle flex content-center gap-4">
                    { props.name }
                    { props.image ? <img alt={ props.name } className="h-8 w-8" src={ props.image.includes("://") ? props.image : server + "/" + props.image }></img> : null }
                </cite>
            </div>
            <div className="mt-8 h-px"></div>
        </div>
    );
}

export default Quote;