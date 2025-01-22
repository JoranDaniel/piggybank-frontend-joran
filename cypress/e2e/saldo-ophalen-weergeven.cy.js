describe('Testscenario 3: Saldo ophalen en weergeven', () => {
  before(() => {

  });

  it('Moet het juiste saldo weergeven voor gebruiker Melvin', () => {
    const expectedSaldo = '€ 1168.64Rekening van Melvin';
    cy.visit('http://localhost:3000/login');
    cy.contains('Melvin').click();
    cy.url().should('include', '/');
    cy.get('.accounts__account')
        .should('be.visible')
        .and('have.text', expectedSaldo);
  });
});