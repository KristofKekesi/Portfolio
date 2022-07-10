/// <reference types="cypress" />

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
    // Dock has elements
    cy.get("#dock").should('be.visible');
  });
})