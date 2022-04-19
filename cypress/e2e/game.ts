describe('Game Page', () => {
  it('should render game page sections', () => {
    cy.visit('/game/the-witcher-2')

    cy.get('[data-cy="game-info"]').within(() => {
      cy.findByRole('heading', {
        name: 'The Witcher 2: Assassins of Kings Enhanced Edition'
      }).should('exist')

      cy.findByText('$5.59').should('exist')
      cy.findByRole('button', { name: 'Add to cart' }).should('exist')
    })
  })
})
