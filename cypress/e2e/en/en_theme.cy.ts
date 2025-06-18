var chaiColors = require('chai-colors');    
chai.use(chaiColors);

describe('EN Light Theme', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/en')
  })

  it('should load the page in light mode', () => {
    cy.get('body').should('have.css', 'background-color').and('be.colored', '#accab2')
    cy.get('h1').should('have.css', 'color').and('be.colored', '#d4472d')
  })

  it('should load the header buttons in light mode', () => {
    cy.get('a').contains("Contact").should('have.css', 'background-color').and('be.colored', '#d4472d')
    cy.get('a').contains("Contact").should('have.css', 'color').and('be.colored', '#e9a752')
    cy.get('a').contains("Contact").find('img').should('have.css', 'filter', 'invert(0.93) sepia(0.11) saturate(50.67) hue-rotate(319deg) brightness(0.96) contrast(0.9)')

    cy.get('a').contains("Documents").should('have.css', 'color').and('be.colored', '#d4472d')
    cy.get('a').contains("Documents").find('img').should('have.css', 'filter', 'invert(0.35) sepia(0.17) saturate(63.09) hue-rotate(344deg) brightness(0.91) contrast(0.88)')

    cy.get('a').contains("Posts").should('have.css', 'color').and('be.colored', '#d4472d')
    cy.get('a').contains("Posts").find('img').should('have.css', 'filter', 'invert(0.35) sepia(0.17) saturate(63.09) hue-rotate(344deg) brightness(0.91) contrast(0.88)')

    cy.get('.page_otherButtons__fgvBE > [href="https://www.linkedin.com/in/felixAmay"]').should('have.css', 'background-color').and('be.colored', '#d4472d')
    cy.get('.page_otherButtons__fgvBE > [href="https://github.com/fandrademay"]').should('have.css', 'background-color').and('be.colored', '#d4472d')
    cy.get('.page_otherButtons__fgvBE > [href="/en"]').should('have.css', 'background-color').and('be.colored', '#d4472d')

    cy.get('.page_otherButtons__fgvBE > [href="https://www.linkedin.com/in/felixAmay"]').find('img').should('have.attr', 'style', 'color:transparent');
    cy.get('.page_otherButtons__fgvBE > [href="https://github.com/fandrademay"]').find('img').should('have.attr', 'style', 'color:transparent');
    cy.get('.page_otherButtons__fgvBE > [href="/en"]').find('img').should('have.attr', 'style', 'color:transparent');
  })

  it('should load the footer buttons in light mode', () => {
    cy.get('.page_settings_icon__tmC_e').should('have.attr', 'style', 'color:transparent');
  })

  it('should load the document buttons in light mode', () => {
    cy.visit('http://localhost:3000/en/documents')

    cy.get('a').contains("Download My Dissertation Thesis").parent().should('have.css', 'background-color').and('be.colored', '#e9a752')
    cy.get('a').contains("Download My Dissertation Thesis").parent().should('have.css', 'border-color').and('be.colored', '#d4472d')

  })
})

describe('EN Theme Toggle', () => {
  it('should load in light mode, then switch to dark mode', () => {
    // visit home in light mode and check background colour is correct
    cy.visit('http://localhost:3000/en')
    cy.get('body').should('have.css', 'background-color').and('be.colored', '#accab2')

    // go to settings and switch to dark mode
    cy.visit('http://localhost:3000/en/settings')
    cy.get('a').contains("Toggle Theme").click()

    // go back to home and check background colour is now dark
    cy.visit('http://localhost:3000/en')
    cy.get('body').should('have.css', 'background-color').and('be.colored', '#060f37')

    // go back and switch back to light theme
    cy.visit('http://localhost:3000/en/settings')
    cy.get('a').contains("Toggle Theme").click()
    
    // visit home and confirm the background colour
    cy.visit('http://localhost:3000/en')
    cy.get('body').should('have.css', 'background-color').and('be.colored', '#accab2')
  })

})

describe('EN Dark Theme', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/en/settings')
    cy.get('a').contains("Toggle Theme").click()
    cy.visit('http://localhost:3000/en')
  })

  it('should load the page in dark mode', () => {
    cy.get('body').should('have.css', 'background-color').and('be.colored', '#060f37')
    cy.get('h1').should('have.css', 'color').and('be.colored', '#e9a752')
  })

  it('should load the header buttons in dark mode', () => {
    cy.get('a').contains("Contact").should('have.css', 'background-color').and('be.colored', '#e9a752')
    cy.get('a').contains("Contact").should('have.css', 'color').and('be.colored', '#1E6496')
    cy.get('a').contains("Contact").find('img')
      .should('have.css', 'filter', 'invert(0.31) sepia(0.29) saturate(18.68) hue-rotate(169deg) brightness(0.95) contrast(0.86)')

    cy.get('a').contains("Documents").should('have.css', 'color').and('be.colored', '#e9a752')
    cy.get('a').contains("Documents").find('img')
      .should('have.css', 'filter', 'invert(0.66) sepia(0.21) saturate(10.6) hue-rotate(354deg) brightness(1.02) contrast(0.91)')

    cy.get('a').contains("Posts").should('have.css', 'color').and('be.colored', '#e9a752')
    cy.get('a').contains("Posts").find('img')
      .should('have.css', 'filter', 'invert(0.66) sepia(0.21) saturate(10.6) hue-rotate(354deg) brightness(1.02) contrast(0.91)')

    cy.get('.page_otherButtons__fgvBE > [href="https://www.linkedin.com/in/felixAmay"]').should('have.css', 'background-color').and('be.colored', '#e9a752')
    cy.get('.page_otherButtons__fgvBE > [href="https://github.com/fandrademay"]').should('have.css', 'background-color').and('be.colored', '#e9a752')
    cy.get('.page_otherButtons__fgvBE > [href="/en"]').should('have.css', 'background-color').and('be.colored', '#e9a752')

    cy.get('.page_otherButtons__fgvBE > [href="https://www.linkedin.com/in/felixAmay"]').find('img').should('have.attr', 'style', 'color:transparent');
    cy.get('.page_otherButtons__fgvBE > [href="https://github.com/fandrademay"] > img').should('have.attr', 'style', 'color:transparent');
    cy.get('.page_otherButtons__fgvBE > [href="/en"] > img').should('have.attr', 'style', 'color:transparent');
  })

  it('should load the footer buttons in dark mode', () => {
    cy.get('.page_settings_icon__tmC_e').should('have.attr', 'style', 'color:transparent');
  })

  it('should load the document buttons in dark mode', () => {
    cy.visit('http://localhost:3000/en/documents')

    cy.get('a').contains("Download My Dissertation Thesis").parent().should('have.css', 'background-color').and('be.colored', '#e9a752')
    cy.get('a').contains("Download My Dissertation Thesis").parent().should('have.css', 'border-color').and('be.colored', '#d4472d')
  })
})