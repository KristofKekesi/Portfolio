/// <reference types="cypress" />

import Terminal from "../../components/Terminal/Terminal";


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


describe('Terminal.cy.js', () => {
  it('check content', () => {
    cy.mount(<Terminal language="js" code="const test = true;" />);
    
    cy.get("div.terminal");
    cy.contains("const test = true;");
    cy.contains("JavaScript");
  });

  it('fallback', () => {
    cy.mount(<Terminal />);
  });

  after(() => {
    cy.mount(<Terminal language="js" code="const test = true;" />);
  });
})