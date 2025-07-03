describe('CY Change Locale', () => {
  it('should change from cymraeg to english and back', () => {
    // switch to english
    cy.visit("http://localhost:3000/cy/settings")
    cy.get('h1').contains("Gosodiadau").should('be.visible')

    cy.get('a').contains("Switch to English").click()
    cy.url().should('eq', "http://localhost:3000/en/settings")

    cy.get('h1').contains("Settings").should('be.visible')
    cy.get('a').contains("Toggle Theme").should('be.visible')
    cy.get('a').contains("Newid i Gymraeg").should('be.visible')

    cy.get('.page_otherButtons__fgvBE > [href="/en"]').click()
    cy.url().should('eq', 'http://localhost:3000/en')
    cy.get('h2').contains("A Computer Science Graduate of Aberystwyth University").should('be.visible')

    // switch to welsh
    cy.visit("http://localhost:3000/en/settings")
    cy.get('h1').contains("Settings").should('be.visible')

    cy.get('a').contains("Newid i Gymraeg").click()
    cy.url().should('eq', "http://localhost:3000/cy/settings")

    cy.get('h1').contains("Gosodiadau").should('be.visible')
    cy.get('a').contains("Toglo'r Thema").should('be.visible')
    cy.get('a').contains("Switch to English").should('be.visible')

    cy.get('.page_otherButtons__fgvBE > [href="/cy"]').click()
    cy.url().should('eq', 'http://localhost:3000/cy')
    cy.get('h2').contains("Graddedig o Cyfrifadureg o Brifysgol Aberystwyth").should('be.visible')
  })
})