describe('Testscenario 9: Uitloggen als gebruiker', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.get(".login__account").first().click();
    cy.get(".app__logout").click();
    cy.get(".login__account").first().click();
    cy.visit('http://localhost:3000/transactions')
    cy.get(".app__logout").click();
    cy.get(".login__account").first().click();
    cy.visit('http://localhost:3000/transfer')
    cy.get(".app__logout").click();
    cy.get(".login__account").first().click();
    cy.visit('http://localhost:3000/settings')
    cy.get(".app__logout").click();
  })
}) ;