/// <reference types="cypress" />


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


describe("About tests", () => {
  beforeEach(() => {
    cy.visit("/about");
  });

  it('navbar', () => {
    cy.get("nav");
  });

  it('titles', () => {
    cy.checkTitles("About");
  });

  it('made-with', () => {
    cy.get("div.section");
  });

  it('dock', () => {
    cy.get("#dock");
  });

  it('footer', () => {
    cy.get("footer");
  });
})