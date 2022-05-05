import React, { useState, useEffect } from "react";

import './article.css';

import cursorSetup from "../../functions/cursor";

import Terminal from "../terminal/terminal";
import ImageGallery from "../image-gallery/image-gallery";

import API from '../../api/index';

import ProjectBundle from "../project-bundle/project-bundle";
import setImageGalleries from "../../functions/image-gallery";
import { ArticlePreviewsBig, ArticlePreviewsSmoll } from "../article-preview/index";
import { MadeWith } from "../technologies/made-with";


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


function Article(props) {
    const [article, setArticle] = useState( undefined );
    
    let galleries = [];

    useEffect(() => {
        API.getArticle("https://www.kekesi.dev/api/article/ARTICLE-" + props.id + ".json").then(
          article => {
            setArticle ( article );
            cursorSetup();
            setImageGalleries();
          }
        );
    }, [props.id]);

    if(article === null) {
        return (
			<article>
				<div style={{marginTop: "3rem", marginBottom: "3rem", width: "960px", paddingTop: "3rem", paddingBottom: "3rem"}} className="bg-secondaryLight-500 text-title article-content">
					Error loading article.
				</div>
			</article>
		);
    }
    else if(article !== undefined) {
        let terminalId = 0;

        let articleContent = [];
        for (let i = 0; i < article.content.length; i++) {
            let tag = "";
            if ((i === 0 || article.content[i - 1].type === "section") && article.content[i].type !== "section") {
                tag += " first";
            }
            if (((i === article.content.length - 1 || article.content[i + 1].type === "section") && article.content[i].type !== "selection") || (article.content[i].type === "selection" && i === article.content.length)) {
                tag += " last";
            }

            switch(article.content[i].type) {
                case "text-title":
                    articleContent.push(
                        <h1 id={article.content[i]["value"].toLowerCase().replace(" ", "-")} className={"selectable text-title nosection" + tag} dangerouslySetInnerHTML={{ __html: article.content[i]["value"] }} key={i}/>
                    );
                    break
                case "text-subtitle":
                    articleContent.push(
                        <h2 className={"selectable text-subtitle nosection" + tag} dangerouslySetInnerHTML={{ __html: article.content[i]["value"] }} key={i}/>
                    );
                    break
                case "text-subsubtitle":
                    articleContent.push(
                        <h3 className={"selectable text-subtitle nosection" + tag} dangerouslySetInnerHTML={{ __html: article.content[i]["value"] }} key={i}/>
                    );
                    break
                case "text":
                    articleContent.push(
                        <div className={"selectable text nosection" + tag} dangerouslySetInnerHTML={{ __html: article.content[i]["value"] }} key={i}/>
                    );
                    break
                case "terminal":
                    articleContent.push(
                        <Terminal id={terminalId} className={"terminal nosection" + tag} language={article.content[i]["language"]} code={article.content[i]["code"]} key={i}/>
                    );
                    terminalId++;
                    break
                case "gallery":
                    articleContent.push(
                        <ImageGallery className={"nosection" + tag} IDs={article.content[i]["value"]} dataKey={i} key={i}/>
                    );
                    galleries.push(article.content[i]["value"]);

                    break
                case "proj-bundle":
                    articleContent.push(
                        <ProjectBundle id={article.content[i]["id"]} key={i} />
                    );
                    break
                case "article-preview-big":
                    articleContent.push(
                        <ArticlePreviewsBig IDs={article.content[i]["IDs"]} key={i} />
                    );
                    break
                case "article-preview-smoll":
                    articleContent.push(
                        <ArticlePreviewsSmoll IDs={article.content[i]["IDs"]} key={i} />
                    );
                    break
                case "made-with":
                    articleContent.push(
                        <MadeWith madeWith={article.content[i]["value"]} title={article.content[i]["title"]}/>
                    );
                    break
                case "section":
                    let sectionContent = [];                    
                    for (let k = 0; k < article.content[i]["content"].length; k++) {
                        let sectionTag = "";
                        if (k === article.content[i]["content"].length - 1) {
                            sectionTag = " last";
                        }

                        let galleryTag = "";
                        if (k === article.content[i]["content"].length - 1 || article.content[i]["content"][k + 1]["type"] !== "gallery") {
                            galleryTag = " last";
                        }

                        switch(article.content[i]["content"][k].type) {
                            case "text-title":
                                sectionContent.push(
                                    <h1 id={article.content[i]["content"][k]["value"].toLowerCase().replace(" ", "-")} className={"selectable text-title" + sectionTag} dangerouslySetInnerHTML={{ __html: article.content[i]["content"][k]["value"] }}  key={i + "-" + k}/>
                                );
                                break
                            case "text-subtitle":
                                sectionContent.push(
                                    <h2 className={"selectable text-subtitle" + sectionTag} dangerouslySetInnerHTML={{ __html: article.content[i]["content"][k]["value"] }}  key={i + "-" + k}/>
                                );
                                break
                            case "text-subsubtitle":
                                sectionContent.push(
                                    <h3 className={"selectable text-subsubtitle" + sectionTag} dangerouslySetInnerHTML={{ __html: article.content[i]["content"][k]["value"] }}  key={i + "-" + k}/>
                                );
                                break
                            case "text":
                                sectionContent.push(
                                    <div className={"selectable text" + sectionTag} dangerouslySetInnerHTML={{ __html: article.content[i]["content"][k]["value"] }}  key={i + "-" + k}/>
                                );
                                break
                            case "terminal":
                                sectionContent.push(
                                    <Terminal id={terminalId} className={"terminal" + sectionTag} language={article.content[i]["content"][k]["language"]} code={article.content[i]["content"][k]["code"]}  key={i + "-" + k}/>
                                );
                                terminalId++;
                                break
                            case "gallery":
                                sectionContent.push(
                                    <ImageGallery galleryTag={galleryTag} IDs={article.content[i]["content"][k]["value"]} dataKey={i + "-" + k} key={i + "-" + k}/>
                                );
                                galleries.push(article.content[i]["content"][k]["value"]);

                                break
                            default:
                                console.warn(article.content[i]["content"][k])
                                break
                        }
                    }
                    articleContent.push(<div className={"section" + tag} key={i}>{ sectionContent }</div>);
                    break
                default:
                    console.warn(article.content[i])
                    break
            }
        }

        if (article.madeWith !== null && article.madeWith !== undefined && article.madeWith.length > 0) {
            articleContent.push(<MadeWith madeWith={article.madeWith} title={"Tools I used"} key={"made-with"}/>);
        }

        return(
            <article>
                <div className="article-content">
                    { articleContent }
                </div>
            </article>
        );
    } else {
        return (
			<article>
				<div style={{marginTop: "3rem", marginBottom: "3rem", width: "960px", paddingTop: "3rem", paddingBottom: "3rem"}} className="bg-secondaryLight-500 text-title article-content">
                    Loading article...
				</div>
			</article>
        );
    }
}


export default Article;