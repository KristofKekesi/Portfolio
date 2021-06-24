import React, { Component } from "react";
import DockElement from "../dock-element/dock-element";

import './dock.css';

class Dock extends Component {
    render() {
        return <div id="dock" className="blur-dark">
            <center>
            <DockElement name="Elements"    icon="https://www.kekesi.dev/api/src/IMG-0.svg"/>
            <DockElement name="NASA Mira"   icon="https://www.kekesi.dev/api/src/IMG-1.png"/>
            <DockElement name="USSR Mira"   icon="https://www.kekesi.dev/api/src/IMG-2.png"/>
            <DockElement name="ESA Mira"    icon="https://www.kekesi.dev/api/src/IMG-3.png"/>
            <DockElement name="Preacher"    icon="https://www.kekesi.dev/api/src/IMG-4.svg"/>
            <DockElement name="Clean Earth" icon="https://www.kekesi.dev/api/src/IMG-12.png"/>
            <DockElement name="Firecast"    icon="https://www.kekesi.dev/api/src/IMG-23.png"/>
            <DockElement name="Files"       icon="https://www.kekesi.dev/api/src/IMG-5.png"/>
            <DockElement name="KitKit"      icon="https://www.kekesi.dev/api/src/IMG-16.png"/>
            </center>
        </div>;
    };
};

export default Dock;