describe('EN Documents Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/en/documents')
  })
  it('should load documents page', () => {
    cy.get('h1').contains("Documents").should('be.visible')
    cy.contains("Download My Dissertation Thesis").should('have.attr', 'href', "/pdfs/fea6_ProjectReport_2024.pdf").should('be.visible')
    cy.contains("Download My Full CV").should('have.attr', 'href', "/pdfs/FelixAM_cv.pdf").should('be.visible')
    cy.contains("Download My ‘Evaluating Metagenomic Assemblies’ Paper").should('have.attr', 'href', "/pdfs/cbi-report.pdf").should('be.visible')
  })

  it('should download files correctly', () => {
    cy.contains("Download My Dissertation Thesis").should('have.attr', 'href', "/pdfs/fea6_ProjectReport_2024.pdf").click()
    cy.verifyDownload("fea6_ProjectReport_2024.pdf")

    cy.contains("Download My Full CV").should('have.attr', 'href', "/pdfs/FelixAM_cv.pdf").click()
    cy.verifyDownload("FelixAM_cv.pdf")

    cy.contains("Download My ‘Evaluating Metagenomic Assemblies’ Paper").should('have.attr', 'href', "/pdfs/cbi-report.pdf").click()
    cy.verifyDownload("cbi-report.pdf")
  })

  it('should load image thumbnails correctly', () => {
    cy.get('a').contains("Download My Dissertation Thesis").parent()
      .find('img').should('be.visible').and('have.attr', 'src', '/_next/image?url=%2Fimages%2Fpdf_covers%2Ffea6-ProjectReport-2024-cover.png&w=384&q=75');

    cy.get('a').contains("Download My Full CV").parent()
      .find('img').should('be.visible').and('have.attr', 'src', '/_next/image?url=%2Fimages%2Fpdf_covers%2FFelixAM-cv-cover.png&w=384&q=75');

    cy.get('a').contains("Download My ‘Evaluating Metagenomic Assemblies’ Paper").parent()
      .find('img').should('be.visible').and('have.attr', 'src', '/_next/image?url=%2Fimages%2Fpdf_covers%2Fcbi-report-cover.png&w=384&q=75');
  })
})