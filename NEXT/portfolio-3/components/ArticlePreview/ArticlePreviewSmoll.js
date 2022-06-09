import React, {useState, useEffect} from "react";
import Link from 'next/link';

import API from "../../api";

import cursorSetup from "../../functions/cursor";


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


function ArticlePreviewSmoll(props) {
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
                className="article-preview-smoll w-96 h-28 flex flex-col bg-secondaryLight"
            >
                <div className="w-full h-96" />
                <h1 className="text-title">Loading article...</h1>
            </article>
        );
    } else if (article === null || image === null) {
        return(
            <article style={props.style} className="article-preview-smoll">
                <div style={{width: "100%", height: "25rem"}} />
                <h1 className="text-title nowrap">Error loading article.</h1>
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
            <article
                style={props.style}
                className="article-preview-smoll target font-bold"
            >
                <a href={ linkURL }>
                    <div className="article-preview-link-smoll flex w-full h-full bg-secondaryLight">
                        <img
                            className="w-28 h-28 bg-cover"
                            src={ image.url }
                            alt="Article cover"
                        />
                        <div className="justify-center pb-2">
                            <h1
                                className="text-title nowrap" 
                                dangerouslySetInnerHTML={{ __html: article.name}}
                            />
                        </div>
                    </div>
                </a>
            </article>
        );
    } else {
        return(
            <></>
        );
    }
}

export default ArticlePreviewSmoll;