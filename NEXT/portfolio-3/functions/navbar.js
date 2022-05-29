//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


function navbarToggle() {
  console.log("aaaaa");
  // navbar
  document.getElementById("navbar-links").classList.toggle("navbar-links-active");
  // dock
  if (document.getElementById("navbar-links").classList.value.includes("navbar-links-active")) {
    document.getElementById("dock").classList.add("inactive");

    document.getElementsByTagName("body")[0].style.height = "100%";
    document.getElementsByTagName("body")[0].style.overflowY = "visible";
  }

  if (!document.getElementById("navbar-links").classList.value.includes("navbar-links-active")) {
    document.getElementById("dock").classList.remove("inactive");

    document.getElementsByTagName("body")[0].style.height = "";
    document.getElementsByTagName("body")[0].style.overflowY = "auto";
  }
}

function main() {
  document.getElementById("hamburger").removeEventListener("click", navbarToggle);
  document.getElementById("hamburger").addEventListener("click", navbarToggle);
}

module.exports = main;