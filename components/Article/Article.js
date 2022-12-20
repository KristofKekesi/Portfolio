import Terminal from "../Terminal/Terminal";
import ImageGallery from "../ImageGallery/ImageGallery";
import Bundle from "../Bundle/Bundle";
import { ArticlePreviewsBig, ArticlePreviewsSmoll } from "../ArticlePreview/index";
import ExBundle from "../ExBundle/ExBundle";
import Quote from "../Quote/Quote";
import Bookmark from "../Bookmark/Bookmark";

import { months, server } from "../../config.js";
import Label from "../Label/Label";


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


function Article(props) {
    // PROPS
    // content, madeWith, published, edited

    let terminalId = 0;

    const content = props.content ?? [];
    const skills = props.skills ?? [];

    let articleContent = [];
    for (let i = 0; i < content.length; i++) {
        if ((i === 0 || content[i - 1].type === "section") && content[i].type !== "section") {
        }
        if (((i === content.length - 1 || content[i + 1].type === "section") && content[i].type !== "selection") || (content[i].type === "selection" && i === content.length)) {
        }

        switch(content[i].type) {
            case "text-title":
                articleContent.push(
                    <h1 id={content[i]["value"].toLowerCase().replaceAll(" ", "-").replace( /(<([^>]+)>)/ig, '')} className="selectable text-title nosection group flex items-center gap-2" key={i}><span dangerouslySetInnerHTML={{ __html: content[i]["value"] }} /><Bookmark color="black" weight="bold" id={content[i]["value"].toLowerCase().replaceAll(" ", "-")} /></h1>
                );
                break;
            case "text-subtitle":
                articleContent.push(
                    <h2 id={content[i]["value"].toLowerCase().replaceAll(" ", "-").replace( /(<([^>]+)>)/ig, '')} className="selectable text-subtitle nosection group flex items-center gap-2" key={i}><span dangerouslySetInnerHTML={{ __html: content[i]["value"] }} /><Bookmark color="black" weight="medium" id={content[i]["value"].toLowerCase().replaceAll(" ", "-")}/></h2>
                );
                break;
            case "text-subsubtitle":
                articleContent.push(
                    <h3 className={"selectable text-subtitle nosection"} dangerouslySetInnerHTML={{ __html: content[i]["value"] }} key={i}/>
                );
                break;
            case "text":
                articleContent.push(
                    <p className={"selectable text nosection"} dangerouslySetInnerHTML={{ __html: content[i]["value"] }} key={i}/>
                );
                break;
            case "terminal":
                articleContent.push(
                    <Terminal id={terminalId} className="terminal nosection" language={content[i]["language"]} code={content[i]["code"]} key={i}/>
                );
                terminalId++;
                break;
            case "gallery":
                articleContent.push(
                    <ImageGallery className="nosection" dataClass="max" images={content[i]["images"]} dataKey={i} key={i}/>
                );
                break;
            case "project-bundle":
                let bundleContent = [];
                content[i]["bundle"].projects.forEach(project => {
                    bundleContent.push(<Label size="xl" theme="light" name={project.name} image={project.logo} href={ server + "/projects/" + project.name} key={ project.name } />);
                })

                console.log(content[i]["bundle"]["projects"][0])
                articleContent.push(
                    <Bundle name={ content[i]["bundle"].name } 
                        children={ bundleContent }
                        background={ content[i]["bundle"].background } key={i} 
                    />
                );
                break;
            case "article-preview-big":
                articleContent.push(
                    <ArticlePreviewsBig articles={content[i]["articles"]} key={i} />
                );
                break;
            case "article-preview-smoll":
                articleContent.push(
                    <ArticlePreviewsSmoll articles={content[i]["articles"]} key={i} />
                );
                break;
            case "made-with":
                articleContent.push(
                    <ExBundle tools={content[i]["value"]} title={content[i]["title"]} key={i}/>
                );
                break;
            case "quote":
                articleContent.push(
                    <Quote quote={content[i]["quote"]} name={content[i]["name"]} image={content[i]["image"] } key={i}/>
                );
                break;
            case "section":
                let sectionContent = [];
                sectionContent.push(<div className="mb-10 h-px" key={i + "-first"}></div>)

                for (let k = 0; k < content[i]["content"].length; k++) {
                    switch(content[i]["content"][k].type) {
                        case "text-title":
                            sectionContent.push(
                                <h1 id={content[i]["content"][k]["value"].toLowerCase().replaceAll(" ", "-").replace( /(<([^>]+)>)/ig, '')} className="selectable text-title nosection group flex items-center gap-2" key={k}><span dangerouslySetInnerHTML={{ __html: content[i]["content"][k]["value"] }} /><Bookmark color="black" weight="bold" id={content[i]["content"][k]["value"].toLowerCase().replaceAll(" ", "-")} /></h1>
                            );
                            break;
                        case "text-subtitle":
                            sectionContent.push(
                                <h2 id={content[i]["content"][k]["value"].toLowerCase().replaceAll(" ", "-").replace( /(<([^>]+)>)/ig, '')} className="selectable text-subtitle nosection group flex items-center gap-2" key={k}><span dangerouslySetInnerHTML={{ __html: content[i]["content"][k]["value"] }} /><Bookmark color="black" weight="medium" id={content[i]["content"][k]["value"].toLowerCase().replaceAll(" ", "-")}/></h2>
                            );
                            break;
                        case "text-subsubtitle":
                            sectionContent.push(
                                <h3 className={"selectable text-subsubtitle"} dangerouslySetInnerHTML={{ __html: content[i]["content"][k]["value"] }}  key={k}/>
                            );
                            break;
                        case "text":
                            sectionContent.push(
                                <div className={"selectable text"} dangerouslySetInnerHTML={{ __html: content[i]["content"][k]["value"] }}  key={k}/>
                            );
                            break;
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

                            break;
                        case "gallery":
                            sectionContent.push(
                                <ImageGallery
                                    images={content[i]["content"][k]["images"]}
                                    dataKey={k}
                                    key={k}
                                />
                            );

                            break;
                        default:
                            console.warn(content[i]["content"][k])
                            break;
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
        articleContent.push(<ExBundle tools={props.madeWith} title={"Tools I used"} key={i}/>);
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
    publishedString += "<span class=\"md:inline hidden\">,</span>";

    const skillTags = []
    skills.forEach((skill) => {
        skillTags.push(
            <div className="mx-2" key={skill}><div className="rounded-full text-base font-inter bg-secondaryLight px-3 line-clamp-1">{ skill }</div></div>
        );
    })

    return(
        <article>
            <div className="article-content pt-6 px-12" dangerouslySetInnerHTML={{ __html: publishedString }} />
            { skills.length != 0 ? <div className="article-content flex flex-wrap gap-y-2 md:px-12 px-7 pt-2 items-center">
                    <div className="md:inline hidden">Contains</div> { skillTags }
                </div> : null }
            <div className="article-content">
                { articleContent }
                { props.children }
                <div className="mt-10 h-px"></div>
            </div>
        </article>
    );
}


export default Article;