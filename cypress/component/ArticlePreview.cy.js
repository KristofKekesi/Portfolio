/// <reference types="cypress" />

import { ArticlePreviewSmoll, ArticlePreviewBig } from "../../components/ArticlePreview/index";

import article from "../fixtures/example-article.json";


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


describe('ArticlePreview.cy.js', () => {
  it('ArticlePreviewSmoll - check content', () => {
    cy.mount(<ArticlePreviewSmoll article={article}></ArticlePreviewSmoll>);

    cy.checkImageAltProps();

    cy.get("a").should("have.attr", "href").and('include', article.redirect);

    cy.contains(article.name);
  });

  it('ArticlePreviewSmoll - fallback', () => {
    cy.mount(<ArticlePreviewSmoll />);
  });

  it('ArticlePreviewBig - check content', () => {
    cy.mount(<ArticlePreviewBig article={article}></ArticlePreviewBig>);

    cy.checkImageAltProps();

    cy.get("a").should("have.attr", "href").and('include', article.redirect);

    cy.contains(article.name);
    cy.contains(article.description);
  });

  it('ArticlePreviewBig - fallback', () => {
    cy.mount(<ArticlePreviewBig />);
  });

  it('ArticlePreviewsSmoll - fallback', () => {
    cy.mount(<ArticlePreviewsSmoll />);
  });

  it('ArticlePreviewsBig - fallback', () => {
    cy.mount(<ArticlePreviewsBig />);
  });

  after(() => {
    cy.mount(<ArticlePreviewBig article={article}></ArticlePreviewBig>);
  });
})