describe('EN Home Page Content', () => {
  it('should load the home page', () => {
    // Start from the home page
    cy.visit('http://localhost:3000/en')
 
    // Find a link with an href attribute containing "contact" and click it
    cy.get('h1').contains("Felix Andrade May")
    cy.get('h3').contains("A Computer Science Graduate of Aberystwyth University")
  })

  it('should render header buttons', () => {
    cy.visit('http://localhost:3000/en')

    cy.get('a').contains("Contact")
  })
})