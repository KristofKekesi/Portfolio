//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


let isMobile = false;
window.addEventListener("touchstart",  function() {isMobile = true;});
module.exports = isMobile;

function cursorSetup() {
  var t = document.getElementById("cursor1"),
      e = document.getElementById("cursor2");

  function n(t) {
    if (!e.classList.contains("click")) {
      e.classList.add("hover");
    }
  }

  function s(t) {
    e.classList.remove("hover");
  }

  s();

  for (var r = document.querySelectorAll(".target"), a = r.length - 1; a >= 0; a--) {
      o(r[a]);
  }

  function o(t) {
      t.removeEventListener("mouseover", n);
      t.removeEventListener("mouseout", s);

      t.addEventListener("mouseover", n);
      t.addEventListener("mouseout", s);
  }

  document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
    if (!isMobile) {
      t.style.top = n.clientX + "px";
      t.style.left = n.clientY + "px";
      e.style.top = n.clientY + "px";
      e.style.left = n.clientX + "px";
    }
  });

  // cursor on click
  document.body.onmousedown = function() {
    e.classList.add("click");

  }

  document.body.onmouseup = function() {
    e.classList.remove("click");
  } 
}

module.exports = cursorSetup;