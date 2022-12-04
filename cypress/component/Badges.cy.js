/// <reference types="cypress" />

import Badges from "../../components/Badges/Badges";


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)

describe('Badges.cy.js', () => {
  it("check content - store badges", () => {
    const stores = ["appleTvAppStore", "appStore", "macAppStore", "playStore", "microsoftStore"];

    stores.forEach((store) => {
      cy.mount(<Badges downloads={[{"type": store, "value": "https://dummy.data"}]}></Badges>);
      cy.get("img");

      cy.checkImageAltProps();
    });
  });

  it("check content - websites", () => {
    cy.mount(<Badges downloads={[{"type": "website", "value": "https://dummy.data"}]}></Badges>);
    cy.contains("Visit their");
    cy.contains("Website");
  });

  it("check fallback", () => {
    cy.mount(<Badges></Badges>);
  });
  
  after(() => {
    cy.mount(<Badges downloads={[
      {"type": "appStore", "value": "https://dummy.data"},
      {"type": "macAppStore", "value": "https://dummy.data"},
      {"type": "appleTvAppStore", "value": "https://dummy.data"},
      {"type": "playStore", "value": "https://dummy.data"},
      {"type": "microsoftStore", "value": "https://dummy.data"},
    ]}></Badges>);
  })
})