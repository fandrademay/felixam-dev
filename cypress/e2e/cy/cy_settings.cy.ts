describe('CY Settings Page', () => {
  it('should load settings page', () => {
    cy.visit('http://localhost:3000/cy/settings')

    cy.get('h1').contains("Gosodiadau").should('be.visible')
    cy.get('a').contains("Toglo'r Thema").should('be.visible')
    cy.get('a').contains("Switch to English").should('be.visible')

    cy.get('a').contains("Toglo'r Thema").find('img').should('be.visible')
    cy.get('a').contains("Switch to English").find('img').should('be.visible')

    cy.get('p').contains("Adeiladwyd y wefan hon gyda Next.js mewn TypeScript.").should('be.visible')

    cy.get('p').find('a').contains('Next.js').should('have.attr', 'href', "https://nextjs.org/")

    cy.get('p').find('a').contains('TypeScript').should('have.attr', 'href', "https://www.typescriptlang.org/")
  })
})