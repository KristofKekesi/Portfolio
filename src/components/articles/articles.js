import React, { useState, useEffect } from "react";

import { getArticles } from "../../api/getArticle";

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
                    final.push(<ArticlePreviewBig key={i} id={articles[i]["id"]} className="m-12"></ArticlePreviewBig>);
                }
                setContent(final);
                cursorSetup();
            }
        );
    }, [content]);

    if (content !== undefined) {
        return (
            <article className="flex-wrap items-start bg-white justify-center gap-4 flex mx-20">
                { content }
            </article>);
    }
    return (
        <article className="flex-wrap items-start bg-white justify-center">
            <div
                className="bg-secondaryLight my-12 py-12 text-title"
                style={{ width: "960px" }}
            >
                Loading articles...
            </div>
        </article>
    );
}


export default Articles;