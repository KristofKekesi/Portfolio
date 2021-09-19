//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


function projectTooltipPosition() {
    let dockTop = window.scrollX + document.getElementById("dock").getBoundingClientRect().top; // upper position of the dock element

    for (var i = 0; i < document.querySelectorAll(".project-tooltip").length; i++) {
        document.querySelectorAll(".project-tooltip")[i].style.bottom = (window.innerHeight - dockTop  + 10) + "px";

        let dockElementLeft = document.querySelectorAll(".dock-element")[i].getBoundingClientRect().left;
        let dockElementWidth = window.scrollX + document.querySelectorAll(".dock-element")[i].offsetWidth;

        let projectTooltipLeft = dockElementLeft + (dockElementWidth / 2);


        if (projectTooltipLeft < 10 + document.querySelectorAll(".project-tooltip")[i].offsetWidth / 2) {
            projectTooltipLeft = 10 + document.querySelectorAll(".project-tooltip")[i].offsetWidth / 2;
        }


        if (projectTooltipLeft >= window.innerWidth - document.querySelectorAll(".project-tooltip")[i].offsetWidth / 2 - 10) {
            const scrollbarVisible = (element) => {
                return element.scrollHeight > element.clientHeight;
            }

            if (scrollbarVisible(document.querySelectorAll("html")[0])) {
                projectTooltipLeft = window.innerWidth - document.querySelectorAll(".project-tooltip")[i].offsetWidth / 2 - 20;
            } else {
                projectTooltipLeft = window.innerWidth - document.querySelectorAll(".project-tooltip")[i].offsetWidth / 2 - 10;
            }
        }
    

        document.querySelectorAll(".project-tooltip")[i].style.left = projectTooltipLeft + "px";
    }
}

window.addEventListener('resize', projectTooltipPosition);

module.exports = projectTooltipPosition;