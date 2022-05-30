import React from 'react';
import highlight from 'highlight.js';
import 'highlight.js/styles/github-dark.css';

const languageMap = {
    "html": "HTML",
    "js": "JavaScript",
    "json": "JSON",
    "shell": "Shell"
}

function Terminal(props) {
    let html = highlight.highlight(props.code, {language: props.language}).value;

    if (languageMap[props.language] == null) {
        console.warn("Unknown language: " + props.language);
    }

    return (
        <div id={"terminal-" + props.id} className="terminal">
            <pre className="terminal-inner text-white p-4 rounded-2xl"><code dangerouslySetInnerHTML={{ __html: html }}/></pre>
            <center className="font-bold m-0 pb-6">{languageMap[props.language] ?? props.language}</center>
        </div>
    )
}

export default Terminal;