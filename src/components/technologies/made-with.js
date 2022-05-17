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

    "Firebase": {"type": "Database", "logo": "IMG-22"},

    "Flutter":  {"type": "Frameworks", "logo": "IMG-17"},

    "React":    {"type": "JavaScript Libraries", "logo": "IMG-105"},

    "GitHub":   {"type": "Development Tools", "logo": "IMG-15"},
    "Node":     {"type": "Development Tools", "logo": ""},

    "macOS":    {"type": "Operating Systems", "logo": ""},
    "Windows":  {"type": "Operating Systems", "logo": ""},

    "Google Analytics": {"type": "Analytics", "logo": ""},

    "Google Play": {"type": "Distribution platforms", "logo": ""},

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
        }, [props.image]);
        
        if (image === undefined) {
            return(
                <div className="technologies-content" key={props.name}>
                    <Loader color="black" />
                    <h3 className="text null-padding text-center">Loading...</h3>
                </div> 
            )
        }
        return (
            <div className="technologies-content" key={props.name}>
                <img src={image.url} alt={image.name} />
                <h3 className="text selectable null-padding text-center">{props.name}</h3>
            </div>  
        );
    }


    let technologyTypes = {};
    for(let i in props.madeWith) {
        let technology = props.madeWith[i];
        if (technologies[technology] === undefined) {
            console.warn("No technology such as " + technology);
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
        content.push(<h1 className="text-subtitle selectable pt-4 pb-2" key={technologyType + "-title"}>{technologyType}</h1>);
        let typeContent = [];
        for (let technology in technologyTypes[technologyType]["type"]) {
            typeContent.push(<TechnologyElement name={technologyTypes[technologyType]["type"][technology]} image={technologyTypes[technologyType]["logo"][technology]} key={technology}/>);
        }
        content.push(<div className="w-full flex flex-wrap flex-row gap-8 px-12" key={technologyType + "-content"}>{typeContent}</div>);
    }

    return(
        <div className="section">
            <div className="mh-10 h-px"></div>
            <h1 className="text-title">{props.title}</h1>
            { content }
            <div className="technologies-dummydiv pb-10 mt-10 w-full bg-white h-10"/>
        </div>
    );
}

export {technologies, MadeWith}; 