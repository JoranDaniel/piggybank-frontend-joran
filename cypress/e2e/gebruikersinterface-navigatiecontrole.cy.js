describe('Testscenario 2: Gebruikersinterface en navigatiecontrole', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.get(".login__account").first().click();
    cy.visit('http://localhost:3000/transactions')
    cy.visit('http://localhost:3000/transfer')
    cy.visit('http://localhost:3000/settings')
  })
})