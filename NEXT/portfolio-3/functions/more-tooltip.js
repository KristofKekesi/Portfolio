//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


function moreTooltipToggle() {
    const moreButton = document.getElementById("more-button");
    const moreTooltip = document.getElementById("more-tooltip");
    
    if (moreTooltip.classList.contains("hidden")) {
        moreTooltip.classList.toggle("hidden");
        moreTooltip.style.opacity = "0";
        setTimeout(() => {
            moreTooltip.style.opacity = "1";
        }, 0);
        
        moreButton.style.fontWeight = "bold";
    } else {
        // wait for animation to complete
        setTimeout(() => {
            moreTooltip.classList.toggle("hidden");
        }, 150);
        moreTooltip.style.opacity = "0";

        moreButton.style.fontWeight = "normal";
    }
}


module.exports = moreTooltipToggle;