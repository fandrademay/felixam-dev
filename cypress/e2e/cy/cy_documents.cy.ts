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