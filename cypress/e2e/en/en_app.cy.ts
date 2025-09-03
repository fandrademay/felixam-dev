describe('EN Home Page Content', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/en')
  })
  
  it('should load the home page', () => {
    cy.get('h1').contains("Felix Andrade May").should('be.visible')
    cy.get('h2').contains("ICT Applications Officer at South Hams District Council & West Devon Borough Council").should('be.visible')
  })

  it('should render header buttons', () => {
    cy.get('a').contains("Contact").should('be.visible')
    cy.get('a').contains("Documents").should('be.visible')
    cy.get('a').contains("Posts").should('be.visible')

    // test major/minor buttons images
    cy.get('a').contains("Contact").find("img").should('be.visible')
    cy.get('a').contains("Documents").find("img").should('be.visible')
    cy.get('a').contains("Posts").find("img").should('be.visible')

    // test other buttons
    cy.get('[href="https://www.linkedin.com/in/felixAmay"]').should('be.visible');
    cy.get('[href="https://github.com/fandrademay"]').should('be.visible');
    cy.get('[href="/en"]').should('be.visible');

    // test other buttons images
    cy.get('[href="https://www.linkedin.com/in/felixAmay"]').find('img').should('be.visible');
    cy.get('[href="https://github.com/fandrademay"]').find('img').should('be.visible');
    cy.get('[href="/en"]').find('img').should('be.visible');
  })

  it('should render correct header button icons', () => {
    cy.get('a').contains("Contact").find("img").should('have.attr', 'src', '/images/icons/contact.svg')
    cy.get('a').contains("Documents").find("img").should('have.attr', 'src', '/images/icons/file.svg')
    cy.get('a').contains("Posts").find("img").should('have.attr', 'src', '/images/icons/posts.svg')

    cy.get('[href="https://www.linkedin.com/in/felixAmay"]').should('be.visible');
    cy.get('[href="https://www.linkedin.com/in/felixAmay"]').find('img').should('be.visible');

    cy.get('[href="https://github.com/fandrademay"]').should('be.visible');
    cy.get('[href="https://github.com/fandrademay"]').find('img').should('be.visible');

    cy.get('[href="/en"]').should('be.visible');
    cy.get('[href="/en"]').find('img').should('be.visible');
  })

  it('should render footer buttons', () => {
    // web ring
    cy.get('a').contains("<").should('be.visible')
    cy.get('a').contains("Aber Webring").should('be.visible')
    cy.get('a').contains(">").should('be.visible')

    // settings
    cy.get('[href="/settings"]').should('be.visible');
  })

  it('should render correct footer button icons', () => {
    cy.get('[href="/settings"]').find("img").should('have.attr', 'src', '/images/icons/settings.svg');
  })
})

describe('EN Home Page Navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/en')
  })

  it('should have header buttons redirect user to correct page', () => {

    cy.get('a').contains("Contact").click()
    cy.url().should('eq', 'http://localhost:3000/en/contact')

    cy.visit('http://localhost:3000/en')
    cy.get('a').contains("Documents").click()
    cy.url().should('eq', 'http://localhost:3000/en/documents')

    cy.visit('http://localhost:3000/en')
    cy.get('a').contains("Posts").click()
    cy.url().should('eq', 'http://localhost:3000/en/posts')

    cy.get('.page_otherButtons__aKJjs > [href="/en"]').click()
    cy.url().should('eq', 'http://localhost:3000/en')
  })

  it('should have footer buttons redirect user to correct page', () => {
    cy.get('[href="/settings"]').click();
    cy.url().should('eq', 'http://localhost:3000/en/settings')

    cy.get('a').contains("<").should('have.attr', 'href', "https://aberwebr.ing/felixam/left")
    cy.get('a').contains("Aber Webring").should('have.attr', 'href', "https://aberwebr.ing")
    cy.get('a').contains(">").should('have.attr', 'href', "https://aberwebr.ing/felixam/right")
  })
})