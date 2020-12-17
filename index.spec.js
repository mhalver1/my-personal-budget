/// <reference types="cypress" />

context('Home', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should have Welcome in the h1', () => {
    cy.get('h1').contains('Welcome')
  })

  it('should look the same', () => {
    cy.eyesOpen({
      appName: 'My App',
      testName: 'Homepage Check'
    });
    cy.eyesCheckWindow();
    cy.eyesClose();
  })
})