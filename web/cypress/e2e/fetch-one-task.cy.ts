describe('fetch one task', () => {
  beforeEach(() => {
    cy.login('ronaldo', '123mudar')
  })

  it('should be able fetch one task', () => {
    cy.location('pathname').should('include', '/')

    cy.get('a').eq(2).first().should('exist').click()
  })
})
