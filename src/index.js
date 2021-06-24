import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


function toggleNavbar() {
  document.getElementById("hamburger").addEventListener("click", () => {
    document.getElementById("navbar-links").classList.toggle("navbar-links-active");
    document.getElementById("dock").classList.toggle("inactive");
  });
}
toggleNavbar();


function resize() {
  //console.log(window.innerWidth);
  //console.log(document.getElementById("dock").clientWidth);

  if (window.innerWidth === document.getElementById("dock").clientWidth) {
    document.getElementById("dock").classList = "dock-mobile blur-dark";
  } else {
    document.getElementById("dock").classList = "dock-desktop blur-dark";
  }
}

window.addEventListener('resize', resize);
resize();
resize();


// cursor
function setupCursor() {
  var t = document.getElementById("cursor1"),
      e = document.getElementById("cursor2");

  function n(t) {
      e.classList.add("hover");
  }

  function s(t) {
      e.classList.remove("hover");
  }

  s();

  for (var r = document.querySelectorAll(".target"), a = r.length - 1; a >= 0; a--) {
      o(r[a]);
  }

  function o(t) {
      t.addEventListener("mouseover", n);
      t.addEventListener("mouseout", s);
  }

  document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
      t.style.top = n.clientX + "px";
      t.style.left = n.clientY + "px";
      e.style.top = n.clientY + "px";
      e.style.left = n.clientX + "px";
  });
}

setupCursor();


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
