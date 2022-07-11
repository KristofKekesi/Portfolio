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


// Checking navbar
Cypress.Commands.add("checkNavbar", () => {
    const visibleNavbarItems = ["Home", "Mobile Development", "Web Development", "More"];
    const insibibleNavbarItems = ["Translations", "Photography", "Timeline", "About"];

    // Navbar items
    visibleNavbarItems.forEach(item => {
      cy.contains(item);
    });

    insibibleNavbarItems.forEach(item => {
      cy.contains(item).should('not.be.visible');
    });

    // More tooltip
    cy.get("#more-button").click();

    insibibleNavbarItems.forEach(item => {
      cy.get("#more-tooltip").contains(item).should('be.visible');
    });

    // Links
    cy.contains("Home").click();
    cy.url().should('include', '/');

    cy.contains("Mobile Development").click();
    cy.url().should('include', '/mobile');
});


// Checking titles
Cypress.Commands.add("checkTitles", (title, subtitle) => {
    cy.get("h1").contains(title);
    cy.title().should("eq", title);

    if (subtitle) {
      cy.contains(subtitle);
    }
});


// Checking dock
Cypress.Commands.add("checkDock", () => {
    cy.get("#dock");
});

// Checking image alt props
Cypress.Commands.add("checkImageAltProps", () => {
  cy.get('img').should('have.attr', 'alt')
});