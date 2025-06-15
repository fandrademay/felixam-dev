describe('CY Home Page Content', () => {
  it('should load the home page', () => {
    // Start from the home page
    cy.visit('http://localhost:3000/cy')
 
    // Find a link with an href attribute containing "contact" and click it
    cy.get('h1').contains("Felix Andrade May")
    cy.get('h3').contains("Graddedig o Cyfrifadureg o Brifysgol Aberystwyth")
  })

  it('should render header buttons', () => {
    cy.visit('http://localhost:3000/cy')

    // test major/minor buttons
    cy.get('a').contains("Cysylltu").find("img").should('be.visible')
    cy.get('a').contains("Dogfennau").find("img").should('be.visible')
    cy.get('a').contains("Postiadau").find("img").should('be.visible')

    // test other buttons
    // cy.get('a').should('have.attr', 'alt', 'LinkedIn')
    // cy.get('a').should('have.attr', 'href', 'https://github.com/fandrademay')
    // cy.get('a').should('have.attr', 'href', '/')


  })
})