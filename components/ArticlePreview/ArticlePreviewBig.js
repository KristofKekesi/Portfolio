//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


function ArticlePreviewBig(props) {
    // PROPS
    // className (String), article (Object)

    return(
        <article className={props.className + " article-preview-big target w-96 flex flex-col bg-secondaryLight font-bold"}> 
            <a href={ props.article.url }>
                <div className="w-full h-full bg-secondaryLight">
                    <img
                        layout="fill"
                        className="max-w-full max-h-96"
                        src={ props.article.cover.url }
                        alt="Article cover"
                    />
                    <h1 className="text-title">{ props.article.name.replace( /(<([^>]+)>)/ig, '') }</h1>
                    <h2 className="text-smallsubtitle">{ props.article.description.replace( /(<([^>]+)>)/ig, '') }</h2>
                </div>
            </a>
        </article>
    );
}

export default ArticlePreviewBig;