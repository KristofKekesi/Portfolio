import React, { useEffect, useState } from "react";

import background from "../bg.jpg";

import Navbar from "../components/navbar/navbar";
import Dock from "../components/dock/dock";
import Footer from "../components/footer/footer";
import Cursor from "../components/cursor/cursor";
import Article from "../components/article/article";

import navbarToggle from "../functions/navbar";
import cursorSetup from "../functions/cursor";

import { getArticle } from "../api/getArticle";


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


function ArticlePage() {
    const [article, setArticle] = useState(undefined);

    useEffect(() => {
        // navbar
        navbarToggle();

        // cursor
        cursorSetup();

        // title
        document.title = "Articles";

        getArticle("https://www.kekesi.dev/api/article/ARTICLE-" + window.location.href.split("-")[0].split("?")[1] + ".json").then(article => {
            document.title = article.name.replace(/<\/?[^>]+(>|$)/g, "");

            document.getElementById("title").innerText = article.name.replace(/<\/?[^>]+(>|$)/g, "");
            document.getElementById("subtitle").innerHTML = "";

            setArticle(article);

            // check if url is valid or redirect is needed
            if (article.redirect && (article.redirect !== window.location.href.replace(window.location.origin + "#", ""))) {
              window.location.href = window.location.origin + "#" + article.redirect;
            } else {
              window.history.replaceState(null, article.name.replace(/<\/?[^>]+(>|$)/g, ""), window.location.protocol + "//" + window.location.host + "#/article?" + article.id.replace("ARTICLE-", "") + "-" + article.name.replace(/<\/?[^>]+(>|$)/g, "").replace(/\s/g, ""));
            }

        }).catch(e => {
            document.title = "Kristóf Kékesi - 404";

            document.getElementById("title").innerHTML = "404";
            document.getElementById("subtitle").innerHTML = "Not Found";

            console.warn(e);
        });
      }, []);

      if (article !== undefined) {
        return (
          <>
            <Navbar />
            <div style={{width: "100%", paddingTop: "150px", paddingBottom: "75px", backgroundImage: `url(${background})`, backgroundSize: "cover"}}>
              <center>
                    <h1 className="white selectable" style={{textShadow: "6px 6px 12px rgba(0, 0, 0, .75)", textAlign: "center"}}>
                        <div id="title">Loading</div>
                        <span id="subtitle" className="nowrap"></span>
                    </h1>
              </center>
            </div>
            <Article id={article.id.replace("ARTICLE-", "")}></Article>
            <Dock />
            <Footer />
            <Cursor />
          </>
        );
      } else {
        return (
          <>
            <Navbar />
            <div style={{width: "100%", paddingTop: "150px", paddingBottom: "75px", backgroundImage: `url(${background})`, backgroundSize: "cover"}}>
              <center>
                    <h1 className="white selectable" style={{textShadow: "6px 6px 12px rgba(0, 0, 0, .75)", textAlign: "center"}}>
                        <div id="title">Loading</div>
                        <span id="subtitle" className="nowrap"></span>
                    </h1>
              </center>
            </div>
            <article>
				      <div style={{marginTop: "3rem", marginBottom: "3rem", width: "960px", paddingTop: "3rem", paddingBottom: "3rem"}} className="bg-secondaryLight-500 text-title article-content">
                	Loading article...
				      </div>
			      </article>
            <Dock />
            <Footer />
            <Cursor />
          </>
        );
      }
  }
  
  export default ArticlePage;