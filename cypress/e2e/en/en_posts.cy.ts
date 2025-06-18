describe('EN Posts Page', () => {
  it('should load posts page', () => {
    cy.visit('http://localhost:3000/en/posts')

    cy.get('h1').contains("Posts").should('be.visible')
    cy.get('ul').should('be.visible');
  })
})