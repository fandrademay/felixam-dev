describe('EN Contact Page Content', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/en/contact')
  })

  it('should load the contact page', () => {
    cy.get('h1').contains("Contact").should('be.visible')
    cy.get('h2').contains("E-Mail").should('be.visible')
    cy.get('h2').contains("Social Media").should("be.hidden")
  })

  it('should load the email button', () => {
    cy.get('a').contains("f.andrademay@gmail.com").should('be.visible')
    cy.get('a').contains("f.andrademay@gmail.com").find('img').should('be.visible')
    cy.get('a').contains("f.andrademay@gmail.com").should('have.attr', 'href', "mailto:f.andrademay@gmail.com")
  })

  // it('should not load the social media buttons on desktop', () => {
  //   cy.get(':nth-child(5) > [href="https://www.linkedin.com/in/felixAmay"]').find('img').should('be.hidden');
  //   cy.get(':nth-child(5) > [href="https://www.linkedin.com/in/felixAmay"]').should('be.hidden');
  //   cy.get(':nth-child(5) > [href="https://github.com/fandrademay"]').should('be.hidden');
  //   cy.get(':nth-child(5) > [href="https://github.com/fandrademay"]').find('img').should('be.hidden');
  // })
})
