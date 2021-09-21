import React, { useEffect, useState } from "react";

import background from "../bg.jpg";

import Navbar from "../components/navbar/navbar";
import Dock from "../components/dock/dock";
import Footer from "../components/footer/footer";
import Cursor from "../components/cursor/cursor";
import ImageGallery from "../components/image-gallery/image-gallery";
import { MadeWith } from "../components/technologies/made-with";

import navbarToggle from "../functions/navbar";
import cursorSetup from "../functions/cursor";
import { getPlatforms } from "../functions/platforms";

import API from "../api/index";
import Badges from "../components/badges/badges";


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


function ProjectPage() {

    const [project, setProject] = useState( undefined );
    const [image, setImage] = useState( undefined );
    
    useEffect(() => {
        // navbar
        navbarToggle();

        // cursor
        cursorSetup();

        // title
        document.title = "Projects";

        API.getProject("https://www.kekesi.dev/api/proj/PROJ-" + window.location.hash.split("-")[0].split("?")[1] + ".json").then(project => {
            document.title = project.name;

            document.getElementById("title").innerText = project.name;
            document.getElementById("subtitle").innerHTML = "";

            // check if url is valid
            window.history.replaceState(null, project.name.replace(/<\/?[^>]+(>|$)/g, ""), window.location.protocol + '//' + window.location.host + "/#" + window.location.pathname + "project?" + project.id.replace("PROJ-", "") + "-" + project.name.replace(/<\/?[^>]+(>|$)/g, "").replace(/\s/g, ""));
            
            API.getImage("https://www.kekesi.dev/api/img/" + project.logo + ".json").then(image => {
                setProject(project);
                setImage(image);
            });
        }).catch(e => {
            document.title = "Kristóf Kékesi - 404";

            document.getElementById("title").innerHTML = "404";
            document.getElementById("subtitle").innerHTML = "Not Found";

            console.warn(e);
        });
    }, []);

    if (project === undefined || image === undefined) {
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
                    <div className="article-content">
                        <h1 className={"text-title nosection"}>Loading project...</h1>
                    </div>
                </article>
                <Dock />
                <Footer />
                <Cursor />
            </>
        );
    } else if (project === null || image === null) {
        return(
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
                    <div className="article-content">
                        <h1 className={"text-title nosection"}>Error loading project...</h1>
                    </div>
                </article>
                <Dock />
                <Footer />
                <Cursor />
            </>
        );
    } else {
        // version
        let versionDiv = null;
        if (project.version !== undefined) {
            versionDiv = <>
                <h1 className={"text-subtitle"} style={{paddingBottom: "0"}}>Latest version</h1>
                <div className={"text"}>{project.version}</div>
            </>;
        }

        // platforms
        let platformDiv = null;
        if (project.download_link !== undefined && project.download_link !== null) {
            platformDiv = <>
                <h1 className={"text-subtitle"} style={{paddingBottom: "0"}}>Available for</h1>
                <div className={"text"}>{getPlatforms(project.download_link, ", ", project.name).replace(/,([^,]*)$/, ' and $1')}</div>
            </>;
        }

        // badges
        let badgesDiv = null;
        if (project.download_link !== undefined && project.download_link !== null) {
            badgesDiv = <Badges style={{marginLeft: "min(5rem, 5vw)", marginRight: "min(5rem, 5vw)", marginBottom: "min(5rem, 5vw)"}} downloadLinks={project.download_link} projectName={project.name} />;
        }

        // screenshots
        let screenshotsDiv = [];
        console.log(project.screenshots);
        console.log(project);
        if (project.screenshots !== undefined && project.screenshots !== null && project.screenshots.length > 0) {

            screenshotsDiv = []
            for (let i = 0; i < project.screenshots.length; i++) {
                screenshotsDiv.push(
                    <ImageGallery galleryTag={" last max"} className={"nosection last"} IDs={project.screenshots[i]} dataKey={i} key={i}/>
                );
            }
        }

        // made with
        let madeWithDiv = null;
        if (project.madeWith.toString() !== "") {
            madeWithDiv = <MadeWith madeWith={project.madeWith} title={"Things that I used while working on " + project.name} />;
        }

        // main content
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
                <article onLoad={cursorSetup}>
                    <div className="article-content">
                        <h1 className={"text-title nosection"}>{project.name}</h1>
                        <div className={"text nosection last"}>{project.description}</div>
                        <div className={"section"} style={{display: "flex"}}>
                            <img src={image.url} alt={image.description} style={{maxWidth: "7.5rem", maxHeight: "7.5rem", width: "auto", height: "auto", marginLeft: "min(5rem, 5vw)", boxSizing: "content-box", paddingTop: "2.5rem", paddingBottom: "2.5rem", marginRight: "0"}}></img>
                            <div>
                                <div style={{paddingTop: "2.5rem"}} />
                                {versionDiv}
                                <h1 className={"text-subtitle"} style={{paddingBottom: "0"}}>Worked on as</h1>
                                <div className={"text"}>{project.role.join(", ").replace(/,([^,]*)$/, ' and $1')}</div>
                                {platformDiv}
                                <div style={{paddingBottom: "1.75rem"}} />
                                {badgesDiv}
                            </div>
                        </div>
                        <div style={{paddingBottom: "3rem"}} />
                        {screenshotsDiv}
                        {madeWithDiv}
                    </div>
                </article>
                <Dock />
                <Footer />
                <Cursor />
            </>
        );
    }
}

export default ProjectPage;