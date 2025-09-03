describe('CY Home Page Content', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/cy')
  })

  it('should load the home page', () => {
    cy.get('h1').contains("Felix Andrade May").should('be.visible')
    cy.get('h2').contains("Swyddog Rhaglen TGCh yn Cyngor Dosbarth Dde Hams & Cyngor Bwrdeistref Gorllewin Dyfnaint").should('be.visible')
  })

  it('should render header buttons', () => {
    cy.get('a').contains("Cysylltu").should('be.visible')
    cy.get('a').contains("Dogfennau").should('be.visible')
    cy.get('a').contains("Postiadau").should('be.visible')

    // test major/minor buttons images
    cy.get('a').contains("Cysylltu").find("img").should('be.visible')
    cy.get('a').contains("Dogfennau").find("img").should('be.visible')
    cy.get('a').contains("Postiadau").find("img").should('be.visible')

    // test other buttons
    cy.get('[href="https://www.linkedin.com/in/felixAmay"]').should('be.visible');
    cy.get('[href="https://github.com/fandrademay"]').should('be.visible');
    cy.get('[href="/cy"]').should('be.visible');

    // test other buttons images
    cy.get('[href="https://www.linkedin.com/in/felixAmay"]').find('img').should('be.visible');
    cy.get('[href="https://github.com/fandrademay"]').find('img').should('be.visible');
    cy.get('[href="/cy"]').find('img').should('be.visible');
  })

  it('should render correct header button icons', () => {
    cy.get('a').contains("Cysylltu").find("img").should('have.attr', 'src', '/images/icons/contact.svg')
    cy.get('a').contains("Dogfennau").find("img").should('have.attr', 'src', '/images/icons/file.svg')
    cy.get('a').contains("Postiadau").find("img").should('have.attr', 'src', '/images/icons/posts.svg')

    cy.get('[href="https://www.linkedin.com/in/felixAmay"]').should('be.visible');
    cy.get('[href="https://www.linkedin.com/in/felixAmay"]').find('img').should('be.visible');

    cy.get('[href="https://github.com/fandrademay"]').should('be.visible');
    cy.get('[href="https://github.com/fandrademay"]').find('img').should('be.visible');

    cy.get('[href="/cy"]').should('be.visible');
    cy.get('[href="/cy"]').find('img').should('be.visible');
  })

  it('should render footer buttons', () => {
    // webring
    cy.get('a').contains("<").should('be.visible')
    cy.get('a').contains("Gwe-gylch Aber").should('be.visible')
    cy.get('a').contains(">").should('be.visible')

    // settings
    cy.get('[href="/settings"]').should('be.visible');
  })

  it('should render correct footer button icons', () => {
    cy.get('[href="/settings"]').find("img").should('have.attr', 'src', '/images/icons/settings.svg');
  })
})

describe('CY Home Page Navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/cy')
  })

  it('should have header buttons redirect user to correct page', () => {

    cy.get('a').contains("Cysylltu").click()
    cy.url().should('eq', 'http://localhost:3000/cy/contact')

    cy.visit('http://localhost:3000/cy')
    cy.get('a').contains("Dogfennau").click()
    cy.url().should('eq', 'http://localhost:3000/cy/documents')

    cy.visit('http://localhost:3000/cy')
    cy.get('a').contains("Postiadau").click()
    cy.url().should('eq', 'http://localhost:3000/cy/posts')

    cy.get('.page_otherButtons__aKJjs > [href="/cy"]').click();
    cy.url().should('eq', 'http://localhost:3000/cy')
  })

  it('should have footer buttons redirect user to correct page', () => {
    cy.get('[href="/settings"]').click();
    cy.url().should('eq', 'http://localhost:3000/cy/settings')

    cy.get('a').contains("<").should('have.attr', 'href', "https://aberwebr.ing/felixam/left")
    cy.get('a').contains("Gwe-gylch Aber").should('have.attr', 'href', "https://aberwebr.ing")
    cy.get('a').contains(">").should('have.attr', 'href', "https://aberwebr.ing/felixam/right")
  })
})