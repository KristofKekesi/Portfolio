import { server, imageFallback } from "../../config.js";


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


function ArticlePreviewSmoll(props) {
    const redirect = props.article.redirect ? props.article.redirect ?? "#" : "#";
    const coverPath = props.article ? props.article.cover.path ?? imageFallback : imageFallback;
    const name = props.article ? (props.article.name ?? "").replace( /(<([^>]+)>)/ig, '') : "";

    return(
        <article style={props.style} className="article-preview-smoll target font-bold">
            <a href={ server + "/" + redirect }>
                <div className="article-preview-link-smoll flex w-full h-full bg-secondaryLight">
                    <img
                        className="w-28 h-28 bg-cover"
                        src={ server + "/" + coverPath }
                        alt="Article cover"
                    />
                    <div className="justify-center pb-2">
                        <h1
                            className="text-title nowrap" 
                            dangerouslySetInnerHTML={{ __html: name}}
                        />
                    </div>
                </div>
            </a>
        </article>
    );
}

export default ArticlePreviewSmoll;