import { server } from "../../config.js";


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


function ArticlePreviewSmoll(props) {
    return(
        <article
            style={props.style}
            className="article-preview-smoll target font-bold"
        >
            <a href={ server + "/" + props.article.redirect }>
                <div className="article-preview-link-smoll flex w-full h-full bg-secondaryLight">
                    <img
                        className="w-28 h-28 bg-cover"
                        src={ server + "/" + props.article.cover.path }
                        alt="Article cover"
                    />
                    <div className="justify-center pb-2">
                        <h1
                            className="text-title nowrap" 
                            dangerouslySetInnerHTML={{ __html: props.article.name.replace( /(<([^>]+)>)/ig, '')}}
                        />
                    </div>
                </div>
            </a>
        </article>
    );
}

export default ArticlePreviewSmoll;