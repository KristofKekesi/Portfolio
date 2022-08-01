/// <reference types="cypress" />

import Hamburger from "../../components/Hamburger/Hamburger";


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


describe("hamburger.cy.js", () => {
  beforeEach(() => {
    cy.mount(<Hamburger />);
  });

  it("check content", () => {
    cy.get("#hamburger").should("be.visible");
  });

  it("image alt", () => {
    cy.checkImageAltProps();
  });
})