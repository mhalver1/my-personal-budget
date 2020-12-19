/// <reference types="cypress" />

describe('Home', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001')
  })
//E2E Testing
  it('should have Personal Budget in the h1', () => {
    cy.get('h1').contains('Personal Budget')
  })

  it('should have A personal-budget management app in the h2', () => {
    cy.get('h2').contains('A personal-budget management app')
  })
//Visual Regression Testing
  it('should look the same', () => {
    cy.eyesOpen({
      appName: 'My App',
      testName: 'Homepage Check'
    });
    cy.eyesCheckWindow();
    cy.eyesClose();
  })
})