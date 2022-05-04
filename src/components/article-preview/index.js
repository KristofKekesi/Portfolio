import React from 'react';
import ArticlePreviewBig from "./article-preview-big";
import ArticlePreviewSmoll from "./article-preview-smoll";

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
        <div className="article-preview-smoll-container">
            {final}
        </div>
    );
}
function ArticlePreviewsSmoll(props) {
    let final = [];
    for (let i = 0; i < props.IDs.length; i++) {
        final.push(<ArticlePreviewSmoll id={props.IDs[i]} doesCareAboutVisibility={false} key={i}/>);
    }

    return (
        <div className="article-preview-smoll-container">
            {final}
        </div>
    );
}

export {
    ArticlePreviewBig, ArticlePreviewsBig,
    ArticlePreviewSmoll, ArticlePreviewsSmoll
};