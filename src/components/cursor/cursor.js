import React, { Component } from 'react';

import './cursor.css';


class Cursor extends Component {
    render() {
        return(
            <div>
                <div className="cursor1" id="cursor1"></div>
                <div className="cursor2" id="cursor2"></div>
            </div>
        );
    }
}

export default Cursor;