/// <reference types="cypress" />

import MoreTooltip from "../../components/MoreTooltip/MoreTooltip";

import navbarItems from "../fixtures/navbar-elements.json";


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


describe('MoreTooltip.cy.js', () => {
  beforeEach(() => {
    cy.mount(<MoreTooltip />);
  });

  it("check content", () => {
    cy.get("#more-tooltip")
    navbarItems.forEach((item) => {
      if (item.place == "#more-tooltip") {
        cy.contains(item.text);
      }
    });
  });
})