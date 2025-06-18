describe('EN Settings Page', () => {
  it('should load settings page', () => {
    cy.visit('http://localhost:3000/en/settings')

    cy.get('h1').contains("Settings").should('be.visible')
    cy.get('a').contains("Toggle Theme").should('be.visible')
    cy.get('a').contains("Newid i Gymraeg").should('be.visible')

    cy.get('a').contains("Toggle Theme").find('img').should('be.visible')
    cy.get('a').contains("Newid i Gymraeg").find('img').should('be.visible')

    cy.get('p').contains("This website was built with Next.js in TypeScript.").should('be.visible')

    cy.get('p').find('a').contains('Next.js').should('have.attr', 'href', "https://nextjs.org/")

    cy.get('p').find('a').contains('TypeScript').should('have.attr', 'href', "https://www.typescriptlang.org/")
  })
})