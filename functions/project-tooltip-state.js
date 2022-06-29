//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


export default function setProjectTooltipState(projectID) {
	document.getElementById("dock-element-id-" + projectID).addEventListener('mouseenter', function () {
		var projectTooltip = document.getElementById("project-tooltip-id-" + projectID);

		document.getElementById("project-tooltip-id-" + projectID).style.display = "inline";
		projectTooltip.style.opacity = "0";
		setTimeout(() => {
			projectTooltip.style.opacity = "1";
		}, 0);
	});
	document.getElementById("dock-element-id-" + projectID).addEventListener('mouseleave', function () {
		var projectTooltip = document.getElementById("project-tooltip-id-" + projectID);

		setTimeout(() => {
			projectTooltip.style.display = "none";
		}, 150);
		projectTooltip.style.opacity = "0";
	});
}