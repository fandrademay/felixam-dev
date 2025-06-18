var chaiColors = require('chai-colors');    
chai.use(chaiColors);

describe('CY Home Page Content', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/cy')
  })

  it('should load the home page', () => {
    cy.get('h1').contains("Felix Andrade May")
    cy.get('h3').contains("Graddedig o Cyfrifadureg o Brifysgol Aberystwyth")
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
    cy.get('.page_otherButtons__fgvBE > [href="https://www.linkedin.com/in/felixAmay"]').should('be.visible');
    cy.get('.page_otherButtons__fgvBE > [href="https://github.com/fandrademay"]').should('be.visible');
    cy.get('.page_otherButtons__fgvBE > [href="/cy"]').should('be.visible');

    // test other buttons images
    cy.get('.page_otherButtons__fgvBE > [href="https://www.linkedin.com/in/felixAmay"]').find('img').should('be.visible');
    cy.get('.page_otherButtons__fgvBE > [href="https://github.com/fandrademay"]').find('img').should('be.visible');
    cy.get('.page_otherButtons__fgvBE > [href="/cy"]').find('img').should('be.visible');
  })

  it('should render correct header button icons', () => {
    cy.get('a').contains("Cysylltu").find("img").should('have.attr', 'src', '/images/icons/contact.svg')
    cy.get('a').contains("Dogfennau").find("img").should('have.attr', 'src', '/images/icons/file.svg')
    cy.get('a').contains("Postiadau").find("img").should('have.attr', 'src', '/images/icons/posts.svg')

    cy.get('.page_otherButtons__fgvBE > [href="https://www.linkedin.com/in/felixAmay"]').find("img")
      .should('have.attr', 'src', '/_next/image?url=%2Fimages%2Ficons%2Flinkedin-White-34.png&w=48&q=75')

    cy.get('.page_otherButtons__fgvBE > [href="https://github.com/fandrademay"]').find("img")
      .should('have.attr', 'src', '/images/icons/github-mark-white.svg')

    cy.get('.page_otherButtons__fgvBE > [href="/cy"]').find("img")
      .should('have.attr', 'src', '/images/icons/home.svg')
  })

  it('should render footer buttons', () => {
    // webring
    cy.get('a').contains("<").should('be.visible')
    cy.get('a').contains("Gwe-gylch Aber").should('be.visible')
    cy.get('a').contains(">").should('be.visible')

    // settings
    cy.get('.page_settings_icon__tmC_e').should('be.visible');
  })

  it('should render correct footer button icons', () => {
    cy.get('.page_settings_icon__tmC_e').should('have.attr', 'src', '/images/icons/settings.svg');
  })
})

describe('CY Home Page Navigation', () => {
  it('should have header buttons redirect user to correct page', () => {
    cy.visit('http://localhost:3000/cy')
    cy.get('a').contains("Cysylltu").click()
    cy.url().should('eq', 'http://localhost:3000/cy/contact')

    cy.visit('http://localhost:3000/cy')
    cy.get('a').contains("Dogfennau").click()
    cy.url().should('eq', 'http://localhost:3000/cy/documents')

    cy.visit('http://localhost:3000/cy')
    cy.get('a').contains("Postiadau").click()
    cy.url().should('eq', 'http://localhost:3000/cy/posts')

    cy.visit('http://localhost:3000/cy')
    cy.get('.page_otherButtons__fgvBE > [href="/cy"]').click()
    cy.url().should('eq', 'http://localhost:3000/cy')
  })

  it('should have footer buttons redirect user to correct page', () => {
    cy.visit('http://localhost:3000/cy')

    cy.get('.page_settings_icon__tmC_e').click();
    cy.url().should('eq', 'http://localhost:3000/cy/settings')
    cy.visit('http://localhost:3000/cy')

    cy.get('a').contains("<").should('have.attr', 'href', "https://aberwebr.ing/felixam/left")
    cy.get('a').contains("Gwe-gylch Aber").should('have.attr', 'href', "https://aberwebr.ing")
    cy.get('a').contains(">").should('have.attr', 'href', "https://aberwebr.ing/felixam/right")

  })
})

describe('CY Contact Page Content', () => {
  it('should load the contact page', () => {
    cy.visit('http://localhost:3000/cy/contact')
 
    cy.get('h1').contains("Cysylltu").should('be.visible')
    cy.get('h2').contains("E-Bost").should('be.visible')
    cy.get('a').contains("f.andrademay@gmail.com").should('be.visible')
    cy.get('a').contains("f.andrademay@gmail.com").should('have.attr', 'href', "mailto:f.andrademay@gmail.com")
  })
})

describe('CY Documents Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/cy/documents')
  })

  it('should load documents page', () => {
    cy.get('h1').contains("Dogfennau").should('be.visible')
    cy.contains("Lawrlwytha Fy Traethawd").should('have.attr', 'href', "/pdfs/fea6_ProjectReport_2024.pdf").should('be.visible')
    cy.contains("Lawrlwytha Fy CV Lawn").should('have.attr', 'href', "/pdfs/FelixAM_cv.pdf").should('be.visible')
    cy.contains("Lawrlwytha Fy ‘Gwerthuso Cynulliadau Metagenomig’ Papur").should('have.attr', 'href', "/pdfs/cbi-report.pdf").should('be.visible')
  })

  it('should download files correctly', () => {
    cy.contains("Lawrlwytha Fy Traethawd").should('have.attr', 'href', "/pdfs/fea6_ProjectReport_2024.pdf").click()
    cy.verifyDownload("fea6_ProjectReport_2024.pdf")

    cy.contains("Lawrlwytha Fy CV Lawn").should('have.attr', 'href', "/pdfs/FelixAM_cv.pdf").click()
    cy.verifyDownload("FelixAM_cv.pdf")

    cy.contains("Lawrlwytha Fy ‘Gwerthuso Cynulliadau Metagenomig’ Papur").should('have.attr', 'href', "/pdfs/cbi-report.pdf").click()
    cy.verifyDownload("cbi-report.pdf")
  })

  it('should load image thumbnails correctly', () => {
    cy.get('a').contains("Lawrlwytha Fy Traethawd").parent()
      .find('img').should('be.visible').and('have.attr', 'src', '/_next/image?url=%2Fimages%2Fpdf_covers%2Ffea6-ProjectReport-2024-cover.png&w=384&q=75');

    cy.get('a').contains("Lawrlwytha Fy CV Lawn").parent()
      .find('img').should('be.visible').and('have.attr', 'src', '/_next/image?url=%2Fimages%2Fpdf_covers%2FFelixAM-cv-cover.png&w=384&q=75');

    cy.get('a').contains("Lawrlwytha Fy ‘Gwerthuso Cynulliadau Metagenomig’ Papur").parent()
      .find('img').should('be.visible').and('have.attr', 'src', '/_next/image?url=%2Fimages%2Fpdf_covers%2Fcbi-report-cover.png&w=384&q=75');
  })
})

describe('CY Posts Page', () => {
  it('should load posts page', () => {
    cy.visit('http://localhost:3000/cy/posts')

    cy.get('h1').contains("Postiadau").should('be.visible')
    cy.get('ul').should('be.visible');
  })
})

describe('CY Settings Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/cy/settings')
  })
  it('should load settings page', () => {
    cy.get('h1').contains("Gosodiadau").should('be.visible')
    cy.get('a').contains("Toglo'r Thema").should('be.visible')
    cy.get('a').contains("Switch to English").should('be.visible')

    cy.get('a').contains("Toglo'r Thema").find('img').should('be.visible')
    cy.get('a').contains("Switch to English").find('img').should('be.visible')

    cy.get('p').contains("Adeiladwyd y wefan hon gyda Next.js mewn TypeScript.").should('be.visible')

    cy.get('p').find('a').contains('Next.js').should('have.attr', 'href', "https://nextjs.org/")

    cy.get('p').find('a').contains('TypeScript').should('have.attr', 'href', "https://www.typescriptlang.org/")
  })

  it('should change locale', () => {
    cy.get('a').contains("Switch to English").click()
    cy.url().should('eq', "http://localhost:3000/en/settings")

    cy.get('h1').contains("Settings").should('be.visible')
    cy.get('a').contains("Toggle Theme").should('be.visible')
    cy.get('a').contains("Newid i Gymraeg").should('be.visible')

    cy.get('.page_otherButtons__fgvBE > [href="/en"]').click()
    cy.url().should('eq', 'http://localhost:3000/en')
  })
})

describe('CY Light Theme', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/cy')
  })

  it('should load the page in light mode', () => {
    cy.get('body').should('have.css', 'background-color').and('be.colored', '#accab2')
    cy.get('h1').should('have.css', 'color').and('be.colored', '#d4472d')
  })

  it('should load the header buttons in light mode', () => {
    cy.get('a').contains("Cysylltu").should('have.css', 'background-color').and('be.colored', '#d4472d')
    cy.get('a').contains("Cysylltu").should('have.css', 'color').and('be.colored', '#e9a752')
    cy.get('a').contains("Cysylltu").find('img').should('have.css', 'filter', 'invert(0.93) sepia(0.11) saturate(50.67) hue-rotate(319deg) brightness(0.96) contrast(0.9)')

    cy.get('a').contains("Dogfennau").should('have.css', 'color').and('be.colored', '#d4472d')
    cy.get('a').contains("Dogfennau").find('img').should('have.css', 'filter', 'invert(0.35) sepia(0.17) saturate(63.09) hue-rotate(344deg) brightness(0.91) contrast(0.88)')

    cy.get('a').contains("Postiadau").should('have.css', 'color').and('be.colored', '#d4472d')
    cy.get('a').contains("Postiadau").find('img').should('have.css', 'filter', 'invert(0.35) sepia(0.17) saturate(63.09) hue-rotate(344deg) brightness(0.91) contrast(0.88)')

    cy.get('.page_otherButtons__fgvBE > [href="https://www.linkedin.com/in/felixAmay"]').should('have.css', 'background-color').and('be.colored', '#d4472d')
    cy.get('.page_otherButtons__fgvBE > [href="https://github.com/fandrademay"]').should('have.css', 'background-color').and('be.colored', '#d4472d')
    cy.get('.page_otherButtons__fgvBE > [href="/cy"]').should('have.css', 'background-color').and('be.colored', '#d4472d')

    cy.get('.page_otherButtons__fgvBE > [href="https://www.linkedin.com/in/felixAmay"]').find('img').should('have.attr', 'style', 'color:transparent');
    cy.get('.page_otherButtons__fgvBE > [href="https://github.com/fandrademay"] > img').should('have.attr', 'style', 'color:transparent');
    cy.get('.page_otherButtons__fgvBE > [href="/cy"] > img').should('have.attr', 'style', 'color:transparent');
  })

  it('should load the footer buttons in light mode', () => {
    cy.get('.page_settings_icon__tmC_e').should('have.attr', 'style', 'color:transparent');
  })

  it('should load the document buttons in light mode', () => {
    cy.visit('http://localhost:3000/cy/documents')

    cy.get('a').contains("Lawrlwytha Fy Traethawd").parent().should('have.css', 'background-color').and('be.colored', '#e9a752')
    cy.get('a').contains("Lawrlwytha Fy Traethawd").parent().should('have.css', 'border-color').and('be.colored', '#d4472d')

  })
})

describe('CY Theme Toggle', () => {
  it('should load in light mode, then switch to dark mode', () => {
    // visit home in light mode and check background colour is correct
    cy.visit('http://localhost:3000/cy')
    cy.get('body').should('have.css', 'background-color').and('be.colored', '#accab2')

    // go to settings and switch to dark mode
    cy.visit('http://localhost:3000/cy/settings')
    cy.get('a').contains("Toglo'r Thema").click()

    // go back to home and check background colour is now dark
    cy.visit('http://localhost:3000/cy')
    cy.get('body').should('have.css', 'background-color').and('be.colored', '#060f37')

    // go back and switch back to light theme
    cy.visit('http://localhost:3000/cy/settings')
    cy.get('a').contains("Toglo'r Thema").click()
    
    // visit home and confirm the background colour
    cy.visit('http://localhost:3000/cy')
    cy.get('body').should('have.css', 'background-color').and('be.colored', '#accab2')
  })

})

describe('CY Dark Theme', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/cy/settings')
    cy.get('a').contains("Toglo'r Thema").click()
    cy.visit('http://localhost:3000/cy')
  })

  it('should load the page in dark mode', () => {
    cy.get('body').should('have.css', 'background-color').and('be.colored', '#060f37')
    cy.get('h1').should('have.css', 'color').and('be.colored', '#e9a752')
  })

  it('should load the header buttons in dark mode', () => {
    cy.get('a').contains("Cysylltu").should('have.css', 'background-color').and('be.colored', '#e9a752')
    cy.get('a').contains("Cysylltu").should('have.css', 'color').and('be.colored', '#1E6496')
    cy.get('a').contains("Cysylltu").find('img')
      .should('have.css', 'filter', 'invert(0.31) sepia(0.29) saturate(18.68) hue-rotate(169deg) brightness(0.95) contrast(0.86)')

    cy.get('a').contains("Dogfennau").should('have.css', 'color').and('be.colored', '#e9a752')
    cy.get('a').contains("Dogfennau").find('img')
      .should('have.css', 'filter', 'invert(0.66) sepia(0.21) saturate(10.6) hue-rotate(354deg) brightness(1.02) contrast(0.91)')

    cy.get('a').contains("Postiadau").should('have.css', 'color').and('be.colored', '#e9a752')
    cy.get('a').contains("Postiadau").find('img')
      .should('have.css', 'filter', 'invert(0.66) sepia(0.21) saturate(10.6) hue-rotate(354deg) brightness(1.02) contrast(0.91)')

    cy.get('.page_otherButtons__fgvBE > [href="https://www.linkedin.com/in/felixAmay"]').should('have.css', 'background-color').and('be.colored', '#e9a752')
    cy.get('.page_otherButtons__fgvBE > [href="https://github.com/fandrademay"]').should('have.css', 'background-color').and('be.colored', '#e9a752')
    cy.get('.page_otherButtons__fgvBE > [href="/cy"]').should('have.css', 'background-color').and('be.colored', '#e9a752')

    cy.get('.page_otherButtons__fgvBE > [href="https://www.linkedin.com/in/felixAmay"]').find('img').should('have.attr', 'style', 'color:transparent');
    cy.get('.page_otherButtons__fgvBE > [href="https://github.com/fandrademay"] > img').should('have.attr', 'style', 'color:transparent');
    cy.get('.page_otherButtons__fgvBE > [href="/cy"] > img').should('have.attr', 'style', 'color:transparent');
  })

  it('should load the footer buttons in dark mode', () => {
    cy.get('.page_settings_icon__tmC_e').should('have.attr', 'style', 'color:transparent');
  })

  it('should load the document buttons in dark mode', () => {
    cy.visit('http://localhost:3000/cy/documents')

    cy.get('a').contains("Lawrlwytha Fy Traethawd").parent().should('have.css', 'background-color').and('be.colored', '#e9a752')
    cy.get('a').contains("Lawrlwytha Fy Traethawd").parent().should('have.css', 'border-color').and('be.colored', '#d4472d')
  })
})