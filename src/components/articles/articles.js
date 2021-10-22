import React, { useState, useEffect } from "react";

import { getArticles } from "../../api/getArticle";


import "./articles.css";

import { ArticlePreviewBig } from "../article-preview/index";
import cursorSetup from "../../functions/cursor";


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


function Articles(props) {
    const [content, setContent] = useState(undefined);

    useEffect(() => {
        getArticles().then(
            articles => {
                let final = content ? content : [];
                for (let i = 0; i < articles.length; i++) {
                    final.push(<ArticlePreviewBig style={{margin: "3rem"}} key={i} id={articles[i]["id"]}></ArticlePreviewBig>);
                }
                setContent(final);
                cursorSetup();
            }
        );
    }, []);

    if (content !== undefined) {
        return (<article className="articles">{content}</article>);
    }
    return (
        <article className="articles"><div style={{background: "#ECECEC", marginTop: "3rem", marginBottom: "3rem", width: "960px", paddingTop: "3rem", paddingBottom: "3rem"}} className="text-title">Loading articles...</div></article>
    );
}


export default Articles;