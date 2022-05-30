function footerDockSpacer() {
    if (document.getElementById("footer-dock-spacer")) {
        let dockTop = window.scrollX + document.getElementById("dock").getBoundingClientRect().top; // upper position of the dock element
        document.getElementById("footer-dock-spacer").style.height = window.innerHeight - dockTop + 10 + "px";
    }
}

module.exports = footerDockSpacer;