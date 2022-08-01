/// <reference types="cypress" />


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


describe("Article tests", () => {
  beforeEach(() => {
    cy.visit("/flutter-bluetooth");
  });

  it('navbar', () => {
    cy.get("nav");
  });

  it('titles', () => {
    cy.checkTitles("Hardware for Flutter");
  });

  it('dock', () => {
    cy.get("#dock");
  });

  it('footer', () => {
    cy.get("footer");
  });
})