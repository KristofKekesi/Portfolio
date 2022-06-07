import React, { useState, useEffect } from "react";

import setImageGalleries from "../../functions/image-gallery";
import cursorSetup from "../../functions/cursor";

import Terminal from "../Terminal/Terminal";
import ImageGallery from "../ImageGallery/ImageGallery";

import API from '../../api/index';

import ProjectBundle from "../ProjectBundle/ProjectBundle";
import { ArticlePreviewsBig, ArticlePreviewsSmoll } from "../ArticlePreview/index";
import { MadeWith } from "../MadeWith/MadeWith";


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


function Article(props) {
    const [article, setArticle] = useState( undefined );
    
    let galleries = [];

    useEffect(() => {
        API.getArticle(props.url).then(
          article => {
            setArticle ( article );
            //cursorSetup();
            setImageGalleries();
          }
        );
    }, [props.id]);

    if(article === null) {
        return (
			<article>
				<div style={{width: "960px"}} className="bg-secondaryLight text-title article-content my-12 py-12">
					Error loading article.
				</div>
			</article>
		);
    }
    else if(article !== undefined) {
        let terminalId = 0;

        let articleContent = [];
        for (let i = 0; i < article.length; i++) {
            if ((i === 0 || article[i - 1].type === "section") && article[i].type !== "section") {
            }
            if (((i === article.length - 1 || article[i + 1].type === "section") && article[i].type !== "selection") || (article[i].type === "selection" && i === article.length)) {
            }

            switch(article[i].type) {
                case "text-title":
                    articleContent.push(
                        <h1 id={article[i]["value"].toLowerCase().replace(" ", "-")} className={"selectable text-title nosection"} dangerouslySetInnerHTML={{ __html: article[i]["value"] }} key={i}/>
                    );
                    break
                case "text-subtitle":
                    articleContent.push(
                        <h2 className={"selectable text-subtitle nosection"} dangerouslySetInnerHTML={{ __html: article[i]["value"] }} key={i}/>
                    );
                    break
                case "text-subsubtitle":
                    articleContent.push(
                        <h3 className={"selectable text-subtitle nosection"} dangerouslySetInnerHTML={{ __html: article[i]["value"] }} key={i}/>
                    );
                    break
                case "text":
                    articleContent.push(
                        <div className={"selectable text nosection"} dangerouslySetInnerHTML={{ __html: article[i]["value"] }} key={i}/>
                    );
                    break
                case "terminal":
                    articleContent.push(
                        <Terminal id={terminalId} className={"terminal nosection"} language={article[i]["language"]} code={article[i]["code"]} key={i}/>
                    );
                    terminalId++;
                    break
                case "gallery":
                    articleContent.push(
                        <ImageGallery className={"nosection"} IDs={article[i]["value"]} dataKey={i} key={i}/>
                    );
                    galleries.push(article[i]["value"]);

                    break
                case "proj-bundle":
                    articleContent.push(
                        <ProjectBundle id={article[i]["id"]} key={i} />
                    );
                    break
                case "article-preview-big":
                    articleContent.push(
                        <ArticlePreviewsBig IDs={article[i]["IDs"]} key={i} />
                    );
                    break
                case "article-preview-smoll":
                    articleContent.push(
                        <ArticlePreviewsSmoll IDs={article[i]["IDs"]} key={i} />
                    );
                    break
                case "made-with":
                    articleContent.push(
                        <MadeWith madeWith={article[i]["value"]} title={article[i]["title"]} key={i}/>
                    );
                    break
                case "section":
                    let sectionContent = [];
                    sectionContent.push(<div className="mb-10 h-px"></div>)

                    for (let k = 0; k < article[i].length; k++) {
                        if (k === article[i]["content"].length - 1) {
                        }

                        if (k === article[i]["content"].length - 1 || article[i]["content"][k + 1]["type"] !== "gallery") {
                        }

                        switch(article[i]["content"][k].type) {
                            case "text-title":
                                sectionContent.push(
                                    <h1
                                        id={article[i]["content"][k]["value"].toLowerCase().replace(" ", "-")}
                                        className={"selectable text-title"}
                                        dangerouslySetInnerHTML={{ __html: article[i]["content"][k]["value"] }}
                                        key={i + "-" + k}
                                    />
                                );
                                break
                            case "text-subtitle":
                                sectionContent.push(
                                    <h2 className={"selectable text-subtitle"} dangerouslySetInnerHTML={{ __html: article[i]["content"][k]["value"] }}  key={i + "-" + k}/>
                                );
                                break
                            case "text-subsubtitle":
                                sectionContent.push(
                                    <h3 className={"selectable text-subsubtitle"} dangerouslySetInnerHTML={{ __html: article[i]["content"][k]["value"] }}  key={i + "-" + k}/>
                                );
                                break
                            case "text":
                                sectionContent.push(
                                    <div className={"selectable text"} dangerouslySetInnerHTML={{ __html: article[i]["content"][k]["value"] }}  key={i + "-" + k}/>
                                );
                                break
                            case "terminal":
                                sectionContent.push(
                                    <Terminal
                                        id={terminalId}
                                        className={"terminal"}
                                        language={article[i]["content"][k]["language"]}
                                        code={article[i]["content"][k]["code"]}
                                        key={i + "-" + k}
                                    />
                                );
                                terminalId++;
                                break
                            case "gallery":
                                sectionContent.push(
                                    <ImageGallery
                                        IDs={article[i]["content"][k]["value"]}
                                        dataKey={i + "-" + k}
                                        key={i + "-" + k}
                                    />
                                );
                                galleries.push(article[i]["content"][k]["value"]);

                                break
                            default:
                                console.warn(article[i]["content"][k])
                                break
                        }
                    }
                    sectionContent.push(<div className="mt-10 h-px"></div>)
                    articleContent.push(<div className={"section"}>{ sectionContent }</div>);
                    break
                default:
                    console.warn(article[i])
                    break
            }
        }

        if (article.madeWith !== null && article.madeWith !== undefined && article.madeWith.length > 0) {
            articleContent.push(<MadeWith madeWith={article.madeWith} title={"Tools I used"} key={"made-with"}/>);
        }

        articleContent.push(<div className="mt-10 h-px" key={"last"}></div>)

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
				<div className="bg-secondaryLight text-title article-content my-12 py-12">
                    Loading article...
				</div>
			</article>
        );
    }
}


export default Article;