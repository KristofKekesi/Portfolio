/// <reference types="cypress" />

import ExBundle from "../../components/ExBundle/ExBundle";


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


describe('ExBundle.cy.js', () => {
  const testJSON = [
    {"id":1,"name":"Dart","type":"Programming Languages","logo":{"type":"logo","name":"Dart logo","path":"dart_logo.png","alt":"The logo of Dart.","width":1080,"height":1080,"copyrightHolder":"Google","copyrightURL":"https://www.google.com"}},
    {"id":2,"name":"JavaScript","type":"Programming Languages","logo":{"type":"logo","name":"JavaScript logo","path":"javascript_logo.png","alt":"The logo of JavaScript.","width":288,"height":288,"copyrightHolder":"Oracle","copyrightURL":"https://www.oracle.com"}}
  ];

  it('check content', () => {
    cy.mount(<ExBundle tools={ testJSON }/>);

    cy.get("div.section").and("be.visible");
    cy.checkImageAltProps();
  });

  it('fallback', () => {
    cy.mount(<ExBundle />);
  });

  after(() => {
    cy.mount(<ExBundle tools={ testJSON }/>);
  });
})