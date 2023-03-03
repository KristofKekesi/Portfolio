import { server } from "../../config";


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


function Award(props) {
    // PROPS
    // awardName

    // todo refactor laurel.svg
    return(
        <div className="flex content-center gap-3 items-center">
            <img className="h-11" src={server + "/laurel.svg"}></img>
            <span className="text-subsubtitle null-padding text-center break-normal whitespace-nowrap selectable" dangerouslySetInnerHTML={{ __html: props.awardName }}></span>
            <img className="award-right h-11" src={ server + "/laurel.svg" } />
        </div>
    )
}

export default Award;