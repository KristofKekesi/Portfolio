/// <reference types="cypress" />


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


describe("About tests", () => {
  beforeEach(() => {
    cy.visit("/projects/Navi");
  });

  it('navbar', () => {
    cy.get("nav");
  });

  it('titles', () => {
    cy.checkTitles("Navi");
  });

  it('check content', () => {
    cy.get("h1").contains("Navi");
    cy.contains("Navi adds subtitles and Live Translations to your FaceTime calls.");

    cy.get("h1").contains("Worked on as");
    cy.contains("a Translator");

    cy.get("h1").contains("Available for");
    cy.contains("iOS and macOS");
  });

  it('check alt', () => {
    cy.checkImageAltProps();
  });

  it('made-with', () => {
    cy.get("div.section").contains("Tools that I used while working on Navi");
  });

  it('dock', () => {
    cy.get("#dock");
  });

  it('footer', () => {
    cy.get("footer");
  });
})