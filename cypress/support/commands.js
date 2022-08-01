// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


// Checking titles
Cypress.Commands.add("checkTitles", (title, subtitle) => {
    cy.get("h1").contains(title);
    cy.title().should("eq", title);

    if (subtitle) {
      cy.contains(subtitle);
    }
});

// Checking image alt props
Cypress.Commands.add("checkImageAltProps", () => {
  cy.get("img").should("have.attr", "alt");
});