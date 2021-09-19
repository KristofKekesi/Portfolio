import React, {useState, useEffect} from "react";

import "./technologies.css";

import Loader from "../loader/loader";

import API from "../../api/index";


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


const technologies = {
    "Dart":         {"type": "Programming Languages", "logo": "IMG-16"},
    "JavaScript":   {"type": "Programming Languages", "logo": "IMG-18"},
    "Python":       {"type": "Programming Languages", "logo": "IMG-21"},

    "CSS":      {"type": "Computer Languages", "logo": "IMG-20"},
    "HTML":     {"type": "Computer Languages", "logo": "IMG-19"},

    "Firebase":     {"type": "Cloud Computing", "logo": "IMG-22"},

    "Flutter":  {"type": "Frameworks", "logo": "IMG-17"},

    "React":    {"type": "JavaScript Libraries", "logo": "IMG-105"},

    "GitHub":   {"type": "Development Tools", "logo": "IMG-15"},

    "Android Studio":       {"type": "IDEs", "logo": "IMG-109"},
    "PyCharm":              {"type": "IDEs", "logo": "IMG-106"},
    "Visual Studio Code":   {"type": "IDEs", "logo": "IMG-108"},
    "WebStorm":             {"type": "IDEs", "logo": "IMG-107"}
}


function MadeWith(props) {

    function TechnologyElement(props) {
        const [image, setImage] = useState( undefined );
        useEffect(() => {
            API.getImage("https://www.kekesi.dev/api/img/" + props.image + ".json").then(image => {
                setImage(image);
            }).catch((e) => {console.error(e)})
        }, []);
        
        if (image === undefined) {
            return(
                <div className="technologies-content" key={props.name}>
                    <Loader color="black" />
                    <h3 className="text" style={{padding: "0", textAlign: "center"}}>Loading...</h3>
                </div> 
            )
        }
        return (
            <div className="technologies-content" key={props.name}>
                <img src={image.url} alt={image.name} />
                <h3 className="text" style={{padding: "0", textAlign: "center"}}>{props.name}</h3>
            </div>  
        );
    }


    let technologyTypes = new Object();
    for(let i in props.madeWith) {
        let technology = props.madeWith[i];
        if (technologies[technology] === undefined) {
            console.warn("No technology such " + technology);
        } else {
            if(!(technologyTypes[technologies[technology]["type"]] ?? []).includes(technology)) {
                if (technologyTypes[technologies[technology]["type"]] === undefined) {
                    technologyTypes[technologies[technology]["type"]] = [];
                    technologyTypes[technologies[technology]["type"]]["type"] = [];
                    technologyTypes[technologies[technology]["type"]]["logo"] = [];

                    technologyTypes[technologies[technology]["type"]]["type"].push(technology);
                    technologyTypes[technologies[technology]["type"]]["logo"].push(technologies[technology]["logo"]);
                } else {
                    technologyTypes[technologies[technology]["type"]]["type"].push(technology);
                    technologyTypes[technologies[technology]["type"]]["logo"].push(technologies[technology]["logo"]);
                }
            }
        }
    }


    let content = [];
    for (let technologyType in technologyTypes) {
        content.push(<h1 className="text-subtitle" style={{paddingTop: "min(1rem, 1vw)", paddingBottom: "min(.5rem, .5vw)"}} key={technologyType + "-title"}>{technologyType}</h1>);
        let typeContent = [];
        for (let technology in technologyTypes[technologyType]["type"]) {
            typeContent.push(<TechnologyElement name={technologyTypes[technologyType]["type"][technology]} image={technologyTypes[technologyType]["logo"][technology]} key={technology}/>);
        }
        content.push(<div className="technologies" style={{display: "flex", flexWrap: "wrap"}} key={technologyType + "-content"}>{typeContent}</div>);
    }

    return(
        <div className="section">
            <h1 className="text-title">{props.title}</h1>
            { content }
            <div className="technologies-dummydiv"/>
        </div>
    );
}

export {technologies, MadeWith}; 