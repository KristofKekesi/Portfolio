/// <reference types="cypress" />


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


describe("Homepage tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it('navbar', () => {
    cy.checkNavbar();
  });

  it('titles', () => {
    cy.checkTitles("Kristóf Kékesi", "Mobile Developer");
  });

  it('dock', () => {
    cy.checkDock();
  });
})