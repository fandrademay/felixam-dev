describe('CY Home Page Content', () => {
  it('should load the home page', () => {
    // Start from the home page
    cy.visit('http://localhost:3000/cy')
 
    // Find a link with an href attribute containing "contact" and click it
    cy.get('h1').contains("Felix Andrade May")
    cy.get('h3').contains("Graddedig o Cyfrifadureg o Brifysgol Aberystwyth")
  })
})