import React, {useState, useEffect} from "react";
import Link from 'next/link';

import API from "../../api";

import cursorSetup from "../../functions/cursor";


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


function ArticlePreviewBig(props) {
    const [article, setArticle] = useState( undefined );
    const [image, setImage] = useState( undefined );

    useEffect(() => {
        API.getArticle("https://www.kekesi.dev/api/article/" + props.id + ".json").then(
          article => {
                API.getImage("https://www.kekesi.dev/api/img/" + article.cover + ".json").then(
                    image => {
                        setArticle(article);
                        setImage(image);
                        cursorSetup();
                    }
                );
        }).catch((e) => {setArticle ( null )});
    }, [props.id]);

    if (article === undefined || image === undefined) {
        return(
            <article
                style={props.style}
                className="article-preview-big"
            >
                <div className="w-fill" />
                <h1 className="text-title">Loading article...</h1>
            </article>
        );
    } else if (article === null || image === null) {
        return(
            <article style={props.style} className="article-preview-big">
                <div className="w-fill" />
                <h1 className="text-title">Error loading article.</h1>
            </article>
        );
    } else if (props.doesCareAboutVisibility === false || article.isVisible) {

        let linkURL;
        if (article.redirect !== null) {
            linkURL = article.redirect;
        } else {
            linkURL = "article?" + article.id.replace("ARTICLE-", "") + "-" + article.name.replace(/<\/?[^>]+(>|$)/g, "").replace(/\s/g, "");
        }

        return(
            <article style={props.style} className="article-preview-big target w-96 flex flex-col bg-secondaryLight font-bold"> 
                <Link href={ linkURL }>
                    <div className="w-full h-full bg-secondaryLight">
                        <img
                            className="max-w-full max-h-96"
                            src={image.url}
                            alt="Article cover"
                        />
                        <h1
                            className="text-title"
                            dangerouslySetInnerHTML={{ __html: article.name }}
                        />
                        <h2
                            className="text-smallsubtitle" 
                            dangerouslySetInnerHTML={{ __html: article.description }}
                        />
                    </div>
                </Link>
            </article>
        );
    } else {
        return(
            <></>
        );
    }
}

export default ArticlePreviewBig;