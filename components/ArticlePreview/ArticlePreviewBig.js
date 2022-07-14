import { server } from "../../config.js";


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


function ArticlePreviewBig(props) {
    return(
        <article style={ props.style } className="article-preview-big target w-96 flex flex-col bg-secondaryLight font-bold"> 
            <a href={ server + "/" + props.article.redirect }>
                <div className="w-full h-full bg-secondaryLight">
                    <img
                        layout="fill"
                        className="max-w-full max-h-96"
                        src={ server + "/" + props.article.cover.path }
                        alt="Article cover"
                    />
                    <h1
                        className="text-title"
                        dangerouslySetInnerHTML={{ __html: props.article.name.replace( /(<([^>]+)>)/ig, '') }}
                    />
                    <h2
                        className="text-smallsubtitle" 
                        dangerouslySetInnerHTML={{ __html: props.article.description.replace( /(<([^>]+)>)/ig, '') }}
                    />
                </div>
            </a>
        </article>
    );
}

export default ArticlePreviewBig;