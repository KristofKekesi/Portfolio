import React, { Component } from 'react';

import './cursor.css';


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


class Cursor extends Component {
    render() {
        return(
            <>
                <div className="cursor1" id="cursor1"></div>
                <div className="cursor2" id="cursor2"></div>
            </>
        );
    }
}

export default Cursor;