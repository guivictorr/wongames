describe('Home', () => {
  it('should render home sections', () => {
    cy.visit('/')

    cy.get('.slick-slider').within(() => {
      cy.findByRole('link')
      cy.findAllByRole('heading')
      cy.findByRole('img')

      cy.get('.slick-dots > :nth-child(2) > button').click()

      cy.findByRole('link')
      cy.findAllByRole('heading')
      cy.findByRole('img')
    })

    cy.shouldRenderShowcase({ name: 'New Games', highlight: false })
    cy.shouldRenderShowcase({ name: 'Upcoming Games', highlight: true })
    cy.shouldRenderShowcase({ name: 'Free Games', highlight: true })
    cy.shouldRenderShowcase({ name: 'Popular Games', highlight: true })
  })
})
