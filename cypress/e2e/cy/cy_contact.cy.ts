describe('CY Contact Page Content', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/cy/contact')
  })

  it('should load the contact page', () => {
    cy.get('h1').contains("Cysylltu").should('be.visible')
    cy.get('h2').contains("E-Bost").should('be.visible')
    cy.get('h2').contains("Cyfryngau Cymdeithasol").should("be.visible")
  })

  it('should load the email button', () => {
    cy.get('a').contains("f.andrademay@gmail.com").should('be.visible')
    cy.get('a').contains("f.andrademay@gmail.com").find('img').should('be.visible')
    cy.get('a').contains("f.andrademay@gmail.com").should('have.attr', 'href', "mailto:f.andrademay@gmail.com")
  })

  it('should load the social media buttons', () => {
    cy.get(':nth-child(5) > [href="https://www.linkedin.com/in/felixAmay"]').find('img').should('be.visible');
    cy.get(':nth-child(5) > [href="https://www.linkedin.com/in/felixAmay"]').should('be.visible');
    cy.get(':nth-child(5) > [href="https://github.com/fandrademay"]').should('be.visible');
    cy.get(':nth-child(5) > [href="https://github.com/fandrademay"]').find('img').should('be.visible');
  })
})