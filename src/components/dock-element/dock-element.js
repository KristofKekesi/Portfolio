import React, { Component } from "react";

import './dock-element.css';


class DockElement extends Component {
    // name

    render() {
        return <div id={this.props.name} className="radius24 dock-element target">
            <center>
                    <img src={this.props.icon} alt="DESCRIPTION FROM THE IMG API ENDPPINT"/>
                    <p style={{flexBasis: "100%", height: "0"}}>{this.props.name}</p>
            </center>
        </div>;
    };
};

export default DockElement;