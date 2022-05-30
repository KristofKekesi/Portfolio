import ArticlePreviewBig from "./ArticlePreviewBig";
import ArticlePreviewSmoll from "./ArticlePreviewSmoll";

//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)

function ArticlePreviewsBig(props) {
    let final = [];
    for (let i = 0; i < props.IDs.length; i++) {
        final.push(<ArticlePreviewBig id={props.IDs[i]} doesCareAboutVisibility={false} key={i}/>);
    }

    return (
        {final}
    );
}
function ArticlePreviewsSmoll(props) {
    let final = [];
    for (let i = 0; i < props.IDs.length; i++) {
        final.push(<ArticlePreviewSmoll id={props.IDs[i]} doesCareAboutVisibility={false} key={i}/>);
    }

    return (
        <div className="article-preview-smoll-container flex flex-wrap justify-start gap-10 px-12 my-2">
            {final}
        </div>
    );
}

export {
    ArticlePreviewBig, ArticlePreviewsBig,
    ArticlePreviewSmoll, ArticlePreviewsSmoll
};