/// <reference types="cypress" />

import Article from "../../components/Article/Article";

import article from "../fixtures/example-article.json";


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


describe('Article.cy.js', () => {
  it('Article - check text-title', () => {
    const testJSON = [{"type": "text-title", "value": "test"}];

    cy.mount(<Article content={ testJSON }/>);

    cy.get("article h1").contains("test").and("be.visible");
  });

  it('Article - check text-subtitle', () => {
    const testJSON = [{"type": "text-subtitle", "value": "test"}];

    cy.mount(<Article content={ testJSON }/>);

    cy.get("article h2").contains("test").and("be.visible");
  });

  it('Article - check text-subsubtitle', () => {
    const testJSON = [{"type": "text-subsubtitle" ,"value": "test"}];

    cy.mount(<Article content={ testJSON }/>);

    cy.get("article h3").contains("test").and("be.visible");
  });

  it('Article - check text', () => {
    const testJSON = [{"type": "text", "value": "test"}];

    cy.mount(<Article content={ testJSON }/>);

    cy.get("article p").contains("test").and("be.visible");
  });

  it('Article - check terminal', () => {
    const testJSON = [{"type": "terminal", "language": "js", "code": "const test = true;"}];

    cy.mount(<Article content={ testJSON }/>);

    cy.get(".terminal");
  });

  it('Article - check gallery', () => {
    const testJSON = [{"type": "gallery", "images":[{"type":"photo","name":"A photo I made","path":"photo_56.jpg","alt":"Frederik's church in Denmark, Copenhagen.","width":2896,"height":2896,"copyrightHolder":null,"copyrightURL":null},{"type":"photo","name":"A photo I made","path":"photo_48.jpg","alt":"A statue of a Hungarian king on a horse with clouds in the background.","width":1713,"height":1713,"copyrightHolder":null,"copyrightURL":null}]}];

    cy.mount(<Article content={ testJSON }/>);

    cy.get(".gallery");
  });

  it('Article - check project-bundle', () => {
    const testJSON = [{"type":"project-bundle","id":"2","projectBundle":{"id":2,"name":"UWP Apps Translated","alt":"UWP Apps I have translated.","background":"#2B32B2;#1488CC;90deg;","projects":[{"id":6,"name":"Files","version":null,"description":"Meet Files, an enthusiast take on what a modern file explorer should be.","dateAdded":"Tue Jun 28 2022 00:00:00 GMT+0200 (Central European Summer Time)","logo":{"type":"logo","name":"Files V2 logo","path":"files2_logo.png","alt":"The logo of Files V2.","width":234,"height":234,"copyrightHolder":"Files Community","copyrightURL":"https://files.community"}},{"id":10,"name":"Ambie","version":null,"description":"Play ambient sounds and create mixes to help you focus, sleep, or meditate.","dateAdded":"Tue Jun 28 2022 00:00:00 GMT+0200 (Central European Summer Time)","logo":{"type":"logo","name":"Ambie logo","path":"ambie_logo.png","alt":"The logo of Ambie.","width":1024,"height":1024,"copyrightHolder":"Jenius Apps","copyrightURL":"https://ambieapp.com"}},{"id":12,"name":"Notepads","version":null,"description":"A modern, lightweight text editor with a minimalist design.","dateAdded":"Tue Jun 28 2022 00:00:00 GMT+0200 (Central European Summer Time)","logo":{"type":"logo","name":"Notepads logo","path":"notepads_logo.gif","alt":"The logo of Notepads.","width":512,"height":512,"copyrightHolder":"Jiaqi Liu","copyrightURL":"https://www.notepadsapp.com"}}]}}];

    cy.mount(<Article content={ testJSON }/>);

    cy.get("div.bundle");
  });

  it('Article - check article-preview-smoll', () => {
    const testJSON = [{"type": "article-preview-smoll", "articles": [article]}];

    cy.mount(<Article content={ testJSON }/>);

    cy.get("article.article-preview-smoll");
  });

  it('Article - check article-preview-big', () => {
    const testJSON = [{"type": "article-preview-big", "articles": [article]}];

    cy.mount(<Article content={ testJSON }/>);

    cy.get("article.article-preview-big");
  });

  it('Article - check made-with', () => {
    const testJSON = [{"type": "made-with", "title": "test", "value": [
      {"id":1,"name":"Dart","type":"Programming Languages","logo":{"type":"logo","name":"Dart logo","path":"dart_logo.png","alt":"The logo of Dart.","width":1080,"height":1080,"copyrightHolder":"Google","copyrightURL":"https://www.google.com"}},
      {"id":2,"name":"JavaScript","type":"Programming Languages","logo":{"type":"logo","name":"JavaScript logo","path":"javascript_logo.png","alt":"The logo of JavaScript.","width":288,"height":288,"copyrightHolder":"Oracle","copyrightURL":"https://www.oracle.com"}}
    ]}];

    cy.mount(<Article content={ testJSON }/>);

    cy.get("div.section");
  });

  it('Article - check section', () => {
    const testJSON = [{"type": "section", "content": [{"type": "text", "value": "test"}]}];

    cy.mount(<Article content={ testJSON }/>);

    cy.get("div.section");
    cy.contains("test");
  });

  it('Article - fallback', () => {
    cy.mount(<Article />);
  });

  after(() => {
    cy.mount(<Article content={ article.content }></Article>);
  });
})