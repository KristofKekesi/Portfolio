/// <reference types="cypress" />

import ImageGallery from "../../components/ImageGallery/ImageGallery";


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


describe('Gallery.cy.js', () => {
  const testJSON = [{"type":"photo","name":"A photo I made","path":"photo_56.jpg","alt":"Frederik's church in Denmark, Copenhagen.","width":2896,"height":2896,"copyrightHolder":null,"copyrightURL":null},{"type":"photo","name":"A photo I made","path":"photo_48.jpg","alt":"A statue of a Hungarian king on a horse with clouds in the background.","width":1713,"height":1713,"copyrightHolder":null,"copyrightURL":null}];

  it('check content', () => {
    cy.mount(<ImageGallery images={ testJSON }/>);

    cy.get(".gallery img").and("be.visible");
    cy.checkImageAltProps();
  });

  it('fallback', () => {
    cy.mount(<ImageGallery />);
  });

  after(() => {
    cy.mount(<ImageGallery images={ testJSON }/>);
  });
})