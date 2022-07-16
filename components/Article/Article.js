import Terminal from "../Terminal/Terminal";
import ImageGallery from "../ImageGallery/ImageGallery";

import ProjectBundle from "../ProjectBundle/ProjectBundle";
import { ArticlePreviewsBig, ArticlePreviewsSmoll } from "../ArticlePreview/index";
import MadeWith from "../MadeWith/MadeWith";

import { months } from "../../config.js";


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


function Article(props) {
    // PROPS
    // content, madeWith, published, edited

    let terminalId = 0;

    const content = props.content ?? []

    let articleContent = [];
    for (let i = 0; i < content.length; i++) {
        if ((i === 0 || content[i - 1].type === "section") && content[i].type !== "section") {
        }
        if (((i === content.length - 1 || content[i + 1].type === "section") && content[i].type !== "selection") || (content[i].type === "selection" && i === content.length)) {
        }

        switch(content[i].type) {
            case "text-title":
                articleContent.push(
                    <h1 id={content[i]["value"].toLowerCase().replace(" ", "-")} className={"selectable text-title nosection"} dangerouslySetInnerHTML={{ __html: content[i]["value"] }} key={i}/>
                );
                break
            case "text-subtitle":
                articleContent.push(
                    <h2 className={"selectable text-subtitle nosection"} dangerouslySetInnerHTML={{ __html: content[i]["value"] }} key={i}/>
                );
                break
            case "text-subsubtitle":
                articleContent.push(
                    <h3 className={"selectable text-subtitle nosection"} dangerouslySetInnerHTML={{ __html: content[i]["value"] }} key={i}/>
                );
                break
            case "text":
                articleContent.push(
                    <p className={"selectable text nosection"} dangerouslySetInnerHTML={{ __html: content[i]["value"] }} key={i}/>
                );
                break
            case "terminal":
                articleContent.push(
                    <Terminal id={terminalId} className={"terminal nosection"} language={content[i]["language"]} code={content[i]["code"]} key={i}/>
                );
                terminalId++;
                break
            case "gallery":
                articleContent.push(
                    <ImageGallery className={"nosection"} images={content[i]["images"]} dataKey={i} key={i}/>
                );

                break
            case "project-bundle":
                articleContent.push(
                    <ProjectBundle projectBundle={content[i]["projectBundle"]} key={i} />
                );
                break
            case "article-preview-big":
                articleContent.push(
                    <ArticlePreviewsBig articles={content[i]["articles"]} key={i} />
                );
                break
            case "article-preview-smoll":
                articleContent.push(
                    <ArticlePreviewsSmoll articles={content[i]["articles"]} key={i} />
                );
                break
            case "made-with":
                articleContent.push(
                    <MadeWith madeWith={content[i]["value"]} title={content[i]["title"]} key={i}/>
                );
                break
            case "section":
                let sectionContent = [];
                sectionContent.push(<div className="mb-10 h-px" key={i + "first"}></div>)

                for (let k = 0; k < content[i]["content"].length; k++) {
                    switch(content[i]["content"][k].type) {
                        case "text-title":
                            sectionContent.push(
                                <h1
                                    id={content[i]["content"][k]["value"].toLowerCase().replace(" ", "-")}
                                    className={"selectable text-title"}
                                    dangerouslySetInnerHTML={{ __html: content[i]["content"][k]["value"] }}
                                    key={k}
                                />
                            );
                            break
                        case "text-subtitle":
                            sectionContent.push(
                                <h2 className={"selectable text-subtitle"} dangerouslySetInnerHTML={{ __html: content[i]["content"][k]["value"] }}  key={k}/>
                            );
                            break
                        case "text-subsubtitle":
                            sectionContent.push(
                                <h3 className={"selectable text-subsubtitle"} dangerouslySetInnerHTML={{ __html: content[i]["content"][k]["value"] }}  key={k}/>
                            );
                            break
                        case "text":
                            sectionContent.push(
                                <div className={"selectable text"} dangerouslySetInnerHTML={{ __html: content[i]["content"][k]["value"] }}  key={k}/>
                            );
                            break
                        case "terminal":
                            sectionContent.push(
                                <Terminal
                                    id={terminalId}
                                    className={"terminal"}
                                    language={content[i]["content"][k]["language"]}
                                    code={content[i]["content"][k]["code"]}
                                    key={k}
                                />
                            );
                            terminalId++;
                            break
                        case "gallery":
                            sectionContent.push(
                                <ImageGallery
                                    images={content[i]["content"][k]["images"]}
                                    dataKey={k}
                                    key={k}
                                />
                            );

                            break
                        default:
                            console.warn(content[i]["content"][k])
                            break
                    }
                }
                sectionContent.push(<div className="mt-10 h-px" key={i + "a"}></div>)
                articleContent.push(<div className={"section"} key={i + "b"}>{ sectionContent }</div>);
                break
            default:
                console.warn(content[i])
                break
        }
    }

    if (props.madeWith !== null && props.madeWith !== undefined && props.madeWith.length > 0) {
        articleContent.push(<MadeWith tools={props.madeWith} title={"Tools I used"} key={"made-with"}/>);
    }

    let published = new Date(props.published);
    published = new Date(published.getFullYear(), published.getMonth(), published.getDate());

    let edited = new Date(props.edited);
    edited = new Date(edited.getFullYear(), edited.getMonth(), edited.getDate());

    let publishedString = "";
    if (props.published != undefined) {
        publishedString += "Published " + published.getFullYear() + " " + months[published.getMonth()] + " " + published.getDate();
    }
    if (props.edited != undefined && edited.getTime() > published.getTime()) {
        publishedString += ", edited " + edited.getFullYear() + " " + months[edited.getMonth()] + " " + edited.getDate();
    }

    return(
        <article>
            <p className="article-content pt-6 px-12">{ publishedString }</p>
            <div className="article-content">
                { articleContent }
                { props.children }
                <div className="mt-10 h-px" key={"last"}></div>
            </div>
        </article>
    );
}


export default Article;