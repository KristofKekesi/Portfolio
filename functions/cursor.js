//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)

let isMobile = false;

function cursorSetup() {
  window.addEventListener("touchstart",  function() {isMobile = true;});

  var cursor = document.getElementById("cursor");

  function n(t) {
    if (!cursor.classList.contains("click")) {
      cursor.classList.add("hover");
    }
  }

  function s(t) {
    cursor.classList.remove("hover");
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
      cursor.style.top = n.clientY + "px";
      cursor.style.left = n.clientX + "px";
    }
  });

  // cursor on click
  document.body.onmousedown = function() {
    cursor.classList.add("click");

  }

  document.body.onmouseup = function() {
    cursor.classList.remove("click");
  } 
}

module.exports = cursorSetup;