/// <reference types="cypress" />

import ProjectBundle from "../../components/ProjectBundle/ProjectBundle";


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


describe('ProjectBundle.cy.js', () => {
  const testJSON = {"id":2,"name":"UWP Apps Translated","alt":"UWP Apps I have translated.","background":"#2B32B2;#1488CC;90deg;","projects":[{"id":6,"name":"Files","version":null,"description":"Meet Files, an enthusiast take on what a modern file explorer should be.","dateAdded":"Tue Jun 28 2022 00:00:00 GMT+0200 (Central European Summer Time)","logo":{"type":"logo","name":"Files V2 logo","path":"files2_logo.png","alt":"The logo of Files V2.","width":234,"height":234,"copyrightHolder":"Files Community","copyrightURL":"https://files.community"}},{"id":10,"name":"Ambie","version":null,"description":"Play ambient sounds and create mixes to help you focus, sleep, or meditate.","dateAdded":"Tue Jun 28 2022 00:00:00 GMT+0200 (Central European Summer Time)","logo":{"type":"logo","name":"Ambie logo","path":"ambie_logo.png","alt":"The logo of Ambie.","width":1024,"height":1024,"copyrightHolder":"Jenius Apps","copyrightURL":"https://ambieapp.com"}},{"id":12,"name":"Notepads","version":null,"description":"A modern, lightweight text editor with a minimalist design.","dateAdded":"Tue Jun 28 2022 00:00:00 GMT+0200 (Central European Summer Time)","logo":{"type":"logo","name":"Notepads logo","path":"notepads_logo.gif","alt":"The logo of Notepads.","width":512,"height":512,"copyrightHolder":"Jiaqi Liu","copyrightURL":"https://www.notepadsapp.com"}}]};

  it('check content', () => {
    cy.mount(<ProjectBundle projectBundle={ testJSON } />);

    cy.get("div.project-bundle").and("be.visible");
    cy.checkImageAltProps();

    testJSON.projects.forEach(project => {
      cy.contains(project.name);
    });

    cy.checkImageAltProps();
  });

  it('fallback', () => {
    cy.mount(<ProjectBundle />);
    cy.mount(<ProjectBundle projectBundle/>)
  });

  after(() => {
    cy.mount(<ProjectBundle images={ testJSON }/>);
  });
})