import ArticlePreviewBig from "./ArticlePreviewBig";
import ArticlePreviewSmoll from "./ArticlePreviewSmoll";


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


function ArticlePreviewsBig(props) {
    const previews = [];
    const articles = props.articles ?? [];

    articles.forEach((article, index) => {
        previews.push(
            <ArticlePreviewBig article={ article } key={ index }/>
        );
    });

    return (
        <div className="article-preview-smoll-container flex flex-wrap justify-start gap-10 px-12 my-12">
            { previews }
        </div>
    );
}


function ArticlePreviewsSmoll(props) {
    const previews = [];
    const articles = props.articles ?? [];

    articles.forEach((article, index) => {
        previews.push(
            <ArticlePreviewSmoll article={ article } key={ index }/>
        );
    });

    return (
        <div className="article-preview-smoll-container flex flex-wrap justify-start gap-10 px-12 my-2">
            { previews }
        </div>
    );
}


export {
    ArticlePreviewBig, ArticlePreviewsBig,
    ArticlePreviewSmoll, ArticlePreviewsSmoll
};