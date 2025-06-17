describe('EN Home Page Content', () => {
  it('should load the home page', () => {
    // Start from the home page
    cy.visit('http://localhost:3000/en')
 
    // Find a link with an href attribute containing "contact" and click it
    cy.get('h1').contains("Felix Andrade May").should('be.visible')
    cy.get('h3').contains("A Computer Science Graduate of Aberystwyth University").should('be.visible')
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
    cy.get('.page_otherButtons__fgvBE > [href="https://www.linkedin.com/in/felixAmay"]').should('be.visible')
    cy.get('.page_otherButtons__fgvBE > [href="https://github.com/fandrademay"]').should('be.visible')
    cy.get('.page_otherButtons__fgvBE > [href="/en"]').should('be.visible')

    // test other buttons images
    cy.get('.page_otherButtons__fgvBE > [href="https://www.linkedin.com/in/felixAmay"]').find('img').should('be.visible')
    cy.get('.page_otherButtons__fgvBE > [href="https://github.com/fandrademay"]').find('img').should('be.visible')
    cy.get('.page_otherButtons__fgvBE > [href="/en"]').find('img').should('be.visible')
  })

  it('should render footer buttons', () => {
    cy.visit('http://localhost:3000/en')
    // webring
    cy.get('a').contains("<").should('be.visible')
    cy.get('a').contains("Aber Webring").should('be.visible')
    cy.get('a').contains(">").should('be.visible')

    // settings
    cy.get('.page_settings_icon__tmC_e').should('be.visible')
  })
})

describe('EN Home Page Navigation', () => {
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

  it('should have footer buttons redirect user to correct page', () => {
    cy.visit('http://localhost:3000/en')

    cy.get('.page_settings_icon__tmC_e').click()
    cy.url().should('eq', 'http://localhost:3000/en/settings')
    cy.visit('http://localhost:3000/en')

    cy.get('a').contains("<").should('have.attr', 'href', "https://aberwebr.ing/felixam/left")
    cy.get('a').contains("Aber Webring").should('have.attr', 'href', "https://aberwebr.ing")
    cy.get('a').contains(">").should('have.attr', 'href', "https://aberwebr.ing/felixam/right")

  })
})

describe('EN Contact Page Content', () => {
  it('should load the contact page', () => {
    cy.visit('http://localhost:3000/en/contact')
 
    cy.get('h1').contains("Contact").should('be.visible')
    cy.get('h2').contains("E-Mail").should('be.visible')
    cy.get('a').contains("f.andrademay@gmail.com").should('be.visible')
    cy.get('a').contains("f.andrademay@gmail.com").should('have.attr', 'href', "mailto:f.andrademay@gmail.com")
  })
})

describe('EN Documents Page', () => {
  it('should load documents page', () => {
    cy.visit('http://localhost:3000/en/documents')

    cy.get('h1').contains("Documents").should('be.visible')
    cy.contains("Download My Dissertation Thesis").should('have.attr', 'href', "/pdfs/fea6_ProjectReport_2024.pdf").should('be.visible')
    cy.contains("Download My Full CV").should('have.attr', 'href', "/pdfs/FelixAM_cv.pdf").should('be.visible')
    cy.contains("Download My ‘Evaluating Metagenomic Assemblies’ Paper").should('have.attr', 'href', "/pdfs/cbi-report.pdf").should('be.visible')
  })

  it('should download files correctly', () => {
    cy.visit('http://localhost:3000/en/documents')

    cy.contains("Download My Dissertation Thesis").should('have.attr', 'href', "/pdfs/fea6_ProjectReport_2024.pdf").click()
    cy.verifyDownload("fea6_ProjectReport_2024.pdf")

    cy.contains("Download My Full CV").should('have.attr', 'href', "/pdfs/FelixAM_cv.pdf").click()
    cy.verifyDownload("FelixAM_cv.pdf")

    cy.contains("Download My ‘Evaluating Metagenomic Assemblies’ Paper").should('have.attr', 'href', "/pdfs/cbi-report.pdf").click()
    cy.verifyDownload("cbi-report.pdf")
  })
})

describe('EN Posts Page', () => {
  it('should load posts page', () => {
    cy.visit('http://localhost:3000/en/posts')

    cy.get('h1').contains("Posts").should('be.visible')
    cy.get('ul').should('be.visible');
  })
})

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

  it('should change locale', () => {
    cy.visit('http://localhost:3000/en/settings')

    cy.get('a').contains("Newid i Gymraeg").click()
    cy.url().should('eq', "http://localhost:3000/cy/settings")

    cy.get('h1').contains("Gosodiadau").should('be.visible')
    cy.get('a').contains("Toglo'r Thema").should('be.visible')
    cy.get('a').contains("Switch to English").should('be.visible')

    cy.get('.page_otherButtons__fgvBE > [href="/cy"]').click()
    cy.url().should('eq', 'http://localhost:3000/cy')
  })
})

describe('EN Theme Toggling', () => {
  it('should load the page in light mode', () => {
    cy.visit('http://localhost:3000/en')

    cy.get('body').should('have.css', 'background-color').and('be.colored', '#accab2')
    cy.get('h1').should('have.css', 'color').and('be.colored', '#d4472d')

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

    // cy.get('.page_otherButtons__fgvBE > [href="https://www.linkedin.com/in/felixAmay"]').find('img').should('have.css', 'fill').and('be.colored', '#ffffff')
    // cy.get('.page_otherButtons__fgvBE > [href="https://github.com/fandrademay"]').find('img').should('have.css', 'fill').and('be.colored', '#ffffff')
    // cy.get('.page_otherButtons__fgvBE > [href="/cy"]').find('img').should('have.css', 'fill').and('be.colored', '#ffffff')
  })
})