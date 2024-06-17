describe('Logout user ', () => {
  beforeEach(() => {
    cy.login('ronaldo', '123mudar')
  })

  it('should be able logout user', () => {
    cy.location('pathname').should('include', '/')

    cy.get('#dropdown-menu-trigger').click()
    cy.contains('Sair').click()
  })
})
