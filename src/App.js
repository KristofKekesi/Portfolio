import { HashRouter, Route, Switch } from "react-router-dom";
import { useEffect } from "react";

import Home from "./pages/Home";
import Mobile from "./pages/Mobile";
import Web from "./pages/Web";
import Articles from "./pages/Articles";
import ArticlePage from "./pages/Article";
import Translation from './pages/Translation';
import Photography from "./pages/Photography";
import About from "./pages/About";
import Timeline from "./pages/Timeline";
import ProjectPage from "./pages/Project";
import NotFound from "./pages/404";

import './App.css';
import './components/locale/quote.css';

import localization from "./functions/localization";
import PrivacyPolicy from "./pages/PrivacyPolicy";


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


function scrollToElement(element) {
  try {document.getElementById(element).scrollIntoView();
  } catch (e) {
      console.log("error while scrolling to " + element);
      console.error(e);
  }
}

function App() {
  useEffect(() => {
    localization();

    if (!window.location.href.replace("/#/", "").includes("#")) {
      window.scrollTo(0, 0);
    } else {
      scrollToElement(window.location.href.replace("/#/").split("#")[1]);
    }
 }, []);

  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/mobile" component={ Mobile } />
        <Route exact path="/web" component={ Web } />
        <Route exact path="/articles" component={ Articles } />
        <Route exact path="/article" component={ ArticlePage } />
        <Route exact path="/translations" component={ Translation } />
        <Route exact path="/photography" component={ Photography } />
        <Route exact path="/about" component={ About } />
        <Route exact path="/timeline" component={ Timeline } />
        <Route exact path="/project" component={ ProjectPage } />
        <Route exact path="/generalprivacypolicy" component={ PrivacyPolicy } />
        <Route component={ NotFound } />
      </Switch>
    </HashRouter>
  );
}

export default App;