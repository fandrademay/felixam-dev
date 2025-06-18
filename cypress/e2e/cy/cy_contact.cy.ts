describe('CY Contact Page Content', () => {
  it('should load the contact page', () => {
    cy.visit('http://localhost:3000/cy/contact')
 
    cy.get('h1').contains("Cysylltu").should('be.visible')
    cy.get('h2').contains("E-Bost").should('be.visible')
    cy.get('a').contains("f.andrademay@gmail.com").should('be.visible')
    cy.get('a').contains("f.andrademay@gmail.com").should('have.attr', 'href', "mailto:f.andrademay@gmail.com")
  })
})