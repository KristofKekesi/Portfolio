import React from 'react';
import loaderWhite from "./white.svg";
import loaderBlack from "./black.svg";

function Loader(props) {
    if (props.color === "white") {
        return(
            <img className="loader" src={loaderWhite} alt="Spinning loading indicator"></img>
        );
    } else {
        return(
            <img className="loader" src={loaderBlack} alt="Spinning loading indicator"></img>
        )
    }
}

export default Loader;