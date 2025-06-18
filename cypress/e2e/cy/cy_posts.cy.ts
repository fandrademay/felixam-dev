describe('CY Posts Page', () => {
  it('should load posts page', () => {
    cy.visit('http://localhost:3000/cy/posts')

    cy.get('h1').contains("Postiadau").should('be.visible')
    cy.get('ul').should('be.visible');
  })
})