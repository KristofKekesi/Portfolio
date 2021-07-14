import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const API = require('./api/index');
API.getURLs();


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// navbar
function centerNavbar() {
  window.addEventListener("resize", () => {
    if (window.innerWidth <= 1000) {
      console.log(document.getElementById("navbar-links").clientHeight);
    }
  });
}
centerNavbar();

function toggleNavbar() {
  document.getElementById("hamburger").addEventListener("click", () => {
    // navbar
    document.getElementById("navbar-links").classList.toggle("navbar-links-active");
    // dock
    if (document.getElementById("navbar-links").classList.value.includes("navbar-links-active")) {
      document.getElementById("dock").classList.add("inactive");
    }

    if (!document.getElementById("navbar-links").classList.value.includes("navbar-links-active")) {
      document.getElementById("dock").classList.remove("inactive");
    }
  });
}
toggleNavbar();


// cursor
function setupCursor() {
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
      t.addEventListener("mouseover", n);
      t.addEventListener("mouseout", s);
  }

  document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
      t.style.top = n.clientX + "px";
      t.style.left = n.clientY + "px";
      e.style.top = n.clientY + "px";
      e.style.left = n.clientX + "px";
  });

  // cursor on click
  document.body.onmousedown = function() {
    e.classList.add("click");

  }

  document.body.onmouseup = function() {
    e.classList.remove("click");
  } 
}
setupCursor();


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
