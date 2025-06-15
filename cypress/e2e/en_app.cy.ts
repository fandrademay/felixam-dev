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

    cy.get('a').contains("Contact").should('be.visible')
    cy.get('a').contains("Documents").should('be.visible')
    cy.get('a').contains("Posts").should('be.visible')

    // test major/minor buttons images
    cy.get('a').contains("Contact").find("img").should('be.visible')
    cy.get('a').contains("Documents").find("img").should('be.visible')
    cy.get('a').contains("Posts").find("img").should('be.visible')

    // test other buttons
    cy.get('.page_otherButtons__fgvBE > [href="https://www.linkedin.com/in/felixAmay"]').should('be.visible');
    cy.get('.page_otherButtons__fgvBE > [href="https://github.com/fandrademay"]').should('be.visible');
    cy.get('.page_otherButtons__fgvBE > [href="/en"]').should('be.visible');

    // test other buttons images
    cy.get('.page_otherButtons__fgvBE > [href="https://www.linkedin.com/in/felixAmay"]').find('img').should('be.visible');
    cy.get('.page_otherButtons__fgvBE > [href="https://github.com/fandrademay"]').find('img').should('be.visible');
    cy.get('.page_otherButtons__fgvBE > [href="/en"]').find('img').should('be.visible');
  })

  it('should have header buttons redirect user to correct page', () => {
    cy.visit('http://localhost:3000/en')
    cy.get('a').contains("Contact").click()
    cy.url().should('eq', 'http://localhost:3000/en/contact')

    cy.visit('http://localhost:3000/en')
    cy.get('a').contains("Documents").click()
    cy.url().should('eq', 'http://localhost:3000/en/documents')

    cy.visit('http://localhost:3000/en')
    cy.get('a').contains("Posts").click()
    cy.url().should('eq', 'http://localhost:3000/en/posts')

    cy.visit('http://localhost:3000/en')
    cy.get('.page_otherButtons__fgvBE > [href="/en"]').click()
    cy.url().should('eq', 'http://localhost:3000/en')
  })

  it('should render footer buttons', () => {
    cy.visit('http://localhost:3000/en')
    // webring
    cy.get('a').contains("<").should('be.visible')
    cy.get('a').contains("Aber Webring").should('be.visible')
    cy.get('a').contains(">").should('be.visible')

    // settings
    cy.get('.page_settings_icon__tmC_e').should('be.visible');
  })

  it('should have footer buttons redirect user to correct page', () => {
    cy.visit('http://localhost:3000/en')

    cy.get('.page_settings_icon__tmC_e').click();
    cy.url().should('eq', 'http://localhost:3000/en/settings')

  })
})