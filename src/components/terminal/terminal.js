import React from 'react';
import highlight from 'highlight.js';
import 'highlight.js/styles/github-dark.css';

import "./terminal.css";

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
            <pre className="terminal-inner"><code dangerouslySetInnerHTML={{ __html: html }}/></pre>
            <center className="terminal-label">{languageMap[props.language] ?? props.language}</center>
        </div>
    )
}

export default Terminal;