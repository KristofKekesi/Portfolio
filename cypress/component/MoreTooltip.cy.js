/// <reference types="cypress" />

import MoreTooltip from "../../components/MoreTooltip/MoreTooltip";


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
    const navbarItems = cy.fixture("navbar-elements");
    console.log(navbarItems);

    navbarItems.forEach(item => {
      if (item.place == "#more-tooltip") {
        cy.get("#more-tooltip").contains(item.text);
      }
    });
  });
})