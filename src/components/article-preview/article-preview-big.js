import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

import API from "../../api/";

import cursorSetup from "../../functions/cursor";

import "./article-preview-big.css";


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
    }, []);

    if (article === undefined || image === undefined) {
        return(
            <article style={props.style} className="article-preview-big">
                <div style={{width: "100%", height: "25rem"}} />
                <h1 className="text-title">Loading article...</h1>
            </article>
        );
    } else if (article === null || image === null) {
        return(
            <article style={props.style} className="article-preview-big">
                <div style={{width: "100%", height: "25rem"}} />
                <h1 className="text-title">Error loading article.</h1>
            </article>
        );
    } else if (props.doesCareAboutVisibility === false || article.isVisible) {
        return(
            <article style={props.style} className="article-preview-big target">
                <Link className="article-preview-link" to={"article?" + article.id.replace("ARTICLE-", "") + "-" + article.name.replace(/<\/?[^>]+(>|$)/g, "").replace(/\s/g, "")}>
                    <img className="index-picture" src={image.url} alt="Article cover" />
                    <h1 className="text-title" dangerouslySetInnerHTML={{ __html: article.name }} />
                    <h2 className="text-subtitle" dangerouslySetInnerHTML={{ __html: article.description }} />
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