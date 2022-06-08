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
        for (let i = 0; i < article.content.length; i++) {
            if ((i === 0 || article.content[i - 1].type === "section") && article.content[i].type !== "section") {
            }
            if (((i === article.content.length - 1 || article.content[i + 1].type === "section") && article.content[i].type !== "selection") || (article.content[i].type === "selection" && i === article.content.length)) {
            }

            switch(article.content[i].type) {
                case "text-title":
                    articleContent.push(
                        <h1 id={article.content[i]["value"].toLowerCase().replace(" ", "-")} className={"selectable text-title nosection"} dangerouslySetInnerHTML={{ __html: article.content[i]["value"] }} key={i}/>
                    );
                    break
                case "text-subtitle":
                    articleContent.push(
                        <h2 className={"selectable text-subtitle nosection"} dangerouslySetInnerHTML={{ __html: article.content[i]["value"] }} key={i}/>
                    );
                    break
                case "text-subsubtitle":
                    articleContent.push(
                        <h3 className={"selectable text-subtitle nosection"} dangerouslySetInnerHTML={{ __html: article.content[i]["value"] }} key={i}/>
                    );
                    break
                case "text":
                    articleContent.push(
                        <div className={"selectable text nosection"} dangerouslySetInnerHTML={{ __html: article.content[i]["value"] }} key={i}/>
                    );
                    break
                case "terminal":
                    articleContent.push(
                        <Terminal id={terminalId} className={"terminal nosection"} language={article.content[i]["language"]} code={article.content[i]["code"]} key={i}/>
                    );
                    terminalId++;
                    break
                case "gallery":
                    articleContent.push(
                        <ImageGallery className={"nosection"} IDs={article.content[i]["value"]} dataKey={i} key={i}/>
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
                        <MadeWith madeWith={article.content[i]["value"]} title={article.content[i]["title"]} key={i}/>
                    );
                    break
                case "section":
                    let sectionContent = [];
                    sectionContent.push(<div className="mb-10 h-px"></div>)

                    for (let k = 0; k < article.content[i]["content"].length; k++) {
                        switch(article.content[i]["content"][k].type) {
                            case "text-title":
                                sectionContent.push(
                                    <h1
                                        id={article.content[i]["content"][k]["value"].toLowerCase().replace(" ", "-")}
                                        className={"selectable text-title"}
                                        dangerouslySetInnerHTML={{ __html: article.content[i]["content"][k]["value"] }}
                                        key={i + "-" + k}
                                    />
                                );
                                break
                            case "text-subtitle":
                                sectionContent.push(
                                    <h2 className={"selectable text-subtitle"} dangerouslySetInnerHTML={{ __html: article.content[i]["content"][k]["value"] }}  key={i + "-" + k}/>
                                );
                                break
                            case "text-subsubtitle":
                                sectionContent.push(
                                    <h3 className={"selectable text-subsubtitle"} dangerouslySetInnerHTML={{ __html: article.content[i]["content"][k]["value"] }}  key={i + "-" + k}/>
                                );
                                break
                            case "text":
                                sectionContent.push(
                                    <div className={"selectable text"} dangerouslySetInnerHTML={{ __html: article.content[i]["content"][k]["value"] }}  key={i + "-" + k}/>
                                );
                                break
                            case "terminal":
                                sectionContent.push(
                                    <Terminal
                                        id={terminalId}
                                        className={"terminal"}
                                        language={article.content[i]["content"][k]["language"]}
                                        code={article.content[i]["content"][k]["code"]}
                                        key={i + "-" + k}
                                    />
                                );
                                terminalId++;
                                break
                            case "gallery":
                                sectionContent.push(
                                    <ImageGallery
                                        IDs={article.content[i]["content"][k]["value"]}
                                        dataKey={i + "-" + k}
                                        key={i + "-" + k}
                                    />
                                );
                                galleries.push(article.content[i]["content"][k]["value"]);

                                break
                            default:
                                console.warn(article.content[i]["content"][k])
                                break
                        }
                    }
                    sectionContent.push(<div className="mt-10 h-px"></div>)
                    articleContent.push(<div className={"section"}>{ sectionContent }</div>);
                    break
                default:
                    console.warn(article.content[i])
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