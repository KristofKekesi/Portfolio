import React, { useState, useEffect } from "react";

import './image-gallery.css';

import setImageGallery from "../../functions/image-gallery";

import API from '../../api/index';


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


export default function ImageGallery(props) {
    const [finalContent, setContent] = useState( undefined );

    useEffect(() => {
        let content = new Array(props.IDs.length);
        for (let index = 0; index < props.IDs.length; index++) {
            API.getImage("https://www.kekesi.dev/api/img/" + props.IDs[index] + ".json").then(
                image => {
                    content[index] = <div style={{flex: image.width / image.height}} key={index}><img src={image.url} alt={image.name} /></div>;

                    setContent(<>{content}</>);
                }
            );
        }
    }, [props.IDs]);
    
    if(finalContent !== undefined) {
        return(
            <center onLoad={setImageGallery("gallery-" + props.dataKey)} id={"gallery-" + props.dataKey} className={"gallery flex mb-3 " + props.galleryTag}>{ finalContent }</center>
        );
    } else if (finalContent === null) {
        return(<div className={"gallery text flex mb-3" + props.galleryTag}>Error loading images</div>);
    } else {
        return(<div className={"gallery text flex mb-3 " + props.galleryTag}>Loading...</div>)
    }
};