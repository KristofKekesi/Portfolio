/// <reference types="cypress" />


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


describe("Timeline tests", () => {
  beforeEach(() => {
    cy.visit("/timeline");
  });

  it('navbar', () => {
    cy.get("nav");
  });

  it('titles', () => {
    cy.checkTitles("Timeline");
  });

  it('check content', () => {
    cy.get("a").contains("2004");
    cy.get("a").contains("2015");
    cy.get("a").contains("2018");
    cy.get("a").contains("2019");
    cy.get("a").contains("2020");
    cy.get("a").contains("2021");
    cy.get("a").contains("2022");

    cy.get("#2004");
    cy.get("#2015");
    cy.get("#2018");
    cy.get("#2019");
    cy.get("#2020");
    cy.get("#2021");
    cy.get("#2022");
  });

  it('dock', () => {
    cy.get("#dock");
  });

  it('footer', () => {
    cy.get("footer");
  });
})