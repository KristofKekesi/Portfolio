/// <reference types="cypress" />

import Navbar from "../../components/Navbar/Navbar";

import navbarItems from "../fixtures/navbar-elements.json";


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


describe("Navbar.cy.js", () => {
  beforeEach(() => {
    cy.mount(<Navbar />);
  });

  it("check content", () => {
    cy.get("nav");
    navbarItems.forEach((item) => {
      if (item.place == "nav") {
        cy.contains(item.text);
      }
    });
  });

  it("more tooltip", () => {
    cy.get("#more-tooltip").should("not.be.visible")
    // to show #more-tooltip
    cy.get("#more-button").click();
    cy.get("#more-tooltip").should("be.visible")
    // to hide #more-tooltip
    cy.get("#more-button").click();
    cy.get("#more-tooltip").should("not.be.visible");
  });
})