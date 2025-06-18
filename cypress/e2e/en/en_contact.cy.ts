describe('EN Contact Page Content', () => {
  it('should load the contact page', () => {
    cy.visit('http://localhost:3000/en/contact')
 
    cy.get('h1').contains("Contact").should('be.visible')
    cy.get('h2').contains("E-Mail").should('be.visible')
    cy.get('a').contains("f.andrademay@gmail.com").should('be.visible')
    cy.get('a').contains("f.andrademay@gmail.com").should('have.attr', 'href', "mailto:f.andrademay@gmail.com")
  })
})
