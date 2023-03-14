//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


function ArticlePreviewSmoll(props) {
    // PROPS
    // className (String), article (Object)

    const name = props.article ? (props.article.name ?? "").replace( /(<([^>]+)>)/ig, '') : "";

    return(
        <article className={props.className + " article-preview-smoll target font-bold"}>
            <a href={ props.article.url }>
                <div className="article-preview-link-smoll flex w-full h-full bg-secondaryLight">
                    <img
                        className="w-28 h-28 bg-cover"
                        src={ props.article.cover.url }
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