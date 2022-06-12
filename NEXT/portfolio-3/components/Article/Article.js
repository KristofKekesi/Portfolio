import setImageGalleries from "../../functions/image-gallery";

import Terminal from "../Terminal/Terminal";
import ImageGallery from "../ImageGallery/ImageGallery";

import ProjectBundle from "../ProjectBundle/ProjectBundle";
import { ArticlePreviewsBig, ArticlePreviewsSmoll } from "../ArticlePreview/index";
import { MadeWith } from "../MadeWith/MadeWith";


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


function Article(props) {
    let terminalId = 0;

    let articleContent = [];
    for (let i = 0; i < props.content.length; i++) {
        if ((i === 0 || props.content[i - 1].type === "section") && props.content[i].type !== "section") {
        }
        if (((i === props.content.length - 1 || props.content[i + 1].type === "section") && props.content[i].type !== "selection") || (props.content[i].type === "selection" && i === props.content.length)) {
        }

        switch(props.content[i].type) {
            case "text-title":
                articleContent.push(
                    <h1 id={props.content[i]["value"].toLowerCase().replace(" ", "-")} className={"selectable text-title nosection"} dangerouslySetInnerHTML={{ __html: props.content[i]["value"] }} key={i}/>
                );
                break
            case "text-subtitle":
                articleContent.push(
                    <h2 className={"selectable text-subtitle nosection"} dangerouslySetInnerHTML={{ __html: props.content[i]["value"] }} key={i}/>
                );
                break
            case "text-subsubtitle":
                articleContent.push(
                    <h3 className={"selectable text-subtitle nosection"} dangerouslySetInnerHTML={{ __html: props.content[i]["value"] }} key={i}/>
                );
                break
            case "text":
                articleContent.push(
                    <div className={"selectable text nosection"} dangerouslySetInnerHTML={{ __html: props.content[i]["value"] }} key={i}/>
                );
                break
            case "terminal":
                articleContent.push(
                    <Terminal id={terminalId} className={"terminal nosection"} language={props.content[i]["language"]} code={article.content[i]["code"]} key={i}/>
                );
                terminalId++;
                break
            case "gallery":
                articleContent.push(
                    <ImageGallery className={"nosection"} images={props.content[i]["images"]} dataKey={i} key={i}/>
                );

                break
            case "proj-bundle":
                articleContent.push(
                    <ProjectBundle id={props.content[i]["id"]} key={i} />
                );
                break
            case "article-preview-big":
                articleContent.push(
                    <ArticlePreviewsBig IDs={props.content[i]["IDs"]} key={i} />
                );
                break
            case "article-preview-smoll":
                articleContent.push(
                    <ArticlePreviewsSmoll IDs={props.content[i]["IDs"]} key={i} />
                );
                break
            case "made-with":
                articleContent.push(
                    <MadeWith madeWith={props.content[i]["value"]} title={props.content[i]["title"]} key={i}/>
                );
                break
            case "section":
                let sectionContent = [];
                sectionContent.push(<div className="mb-10 h-px"></div>)

                for (let k = 0; k < props.content[i]["content"].length; k++) {
                    switch(props.content[i]["content"][k].type) {
                        case "text-title":
                            sectionContent.push(
                                <h1
                                    id={props.content[i]["content"][k]["value"].toLowerCase().replace(" ", "-")}
                                    className={"selectable text-title"}
                                    dangerouslySetInnerHTML={{ __html: props.content[i]["content"][k]["value"] }}
                                    key={i + "-" + k}
                                />
                            );
                            break
                        case "text-subtitle":
                            sectionContent.push(
                                <h2 className={"selectable text-subtitle"} dangerouslySetInnerHTML={{ __html: props.content[i]["content"][k]["value"] }}  key={i + "-" + k}/>
                            );
                            break
                        case "text-subsubtitle":
                            sectionContent.push(
                                <h3 className={"selectable text-subsubtitle"} dangerouslySetInnerHTML={{ __html: props.content[i]["content"][k]["value"] }}  key={i + "-" + k}/>
                            );
                            break
                        case "text":
                            sectionContent.push(
                                <div className={"selectable text"} dangerouslySetInnerHTML={{ __html: props.content[i]["content"][k]["value"] }}  key={i + "-" + k}/>
                            );
                            break
                        case "terminal":
                            sectionContent.push(
                                <Terminal
                                    id={terminalId}
                                    className={"terminal"}
                                    language={props.content[i]["content"][k]["language"]}
                                    code={props.content[i]["content"][k]["code"]}
                                    key={i + "-" + k}
                                />
                            );
                            terminalId++;
                            break
                        case "gallery":
                            sectionContent.push(
                                <ImageGallery
                                    images={props.content[i]["content"][k]["images"]}
                                    dataKey={i + "-" + k}
                                    key={i + "-" + k}
                                />
                            );

                            break
                        default:
                            console.warn(props.content[i]["content"][k])
                            break
                    }
                }
                sectionContent.push(<div className="mt-10 h-px"></div>)
                articleContent.push(<div className={"section"}>{ sectionContent }</div>);
                break
            default:
                console.warn(props.content[i])
                break
        }
    }

    if (props.madeWith !== null && props.madeWith !== undefined && props.madeWith.length > 0) {
        articleContent.push(<MadeWith madeWith={props.madeWith} title={"Tools I used"} key={"made-with"}/>);
    }

    articleContent.push(<div className="mt-10 h-px" key={"last"}></div>)

    return(
        <article>
            <div className="article-content">
                { articleContent }
            </div>
        </article>
    );
}


export default Article;