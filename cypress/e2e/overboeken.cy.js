describe('Testscenario 4: Overboeken van geld naar andere rekening', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
    cy.get(".login__account").first().click();
  })
  it('Geld overmaken met rekening waar geld op staat', () => {
    cy.visit('http://localhost:3000/transfer');
    cy.get("textarea").type("Dit is een test transactie");
    cy.get('.toaccount').select("Cem Fuijk");
    cy.get('.amount-input').type(100);
    cy.get("[data-test-id='overboeken-button']").click();
    cy.get('.alert').should("be.visible");
  });
})