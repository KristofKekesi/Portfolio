import React, { Component } from 'react';

import './Cursor.module.css';


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


export default class Cursor extends Component {
    render() {
        return(
            <div className="z-50 fixed rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none top-1/2 -left-full opacity-100 h-8 w-8" id="cursor"></div>
        );
    }
}