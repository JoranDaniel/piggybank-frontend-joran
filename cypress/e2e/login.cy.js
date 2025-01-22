describe('Testscenario 1: Inloggen door een gebruiker te selecteren', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.get(".login__account").first().click();
  })
})