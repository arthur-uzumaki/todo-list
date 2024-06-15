describe('Login user', () => {
  it('should be able login user', () => {
    cy.visit('/sign-in')
    cy.get('input#username').type('ronaldo')
    cy.get('input#password').type('123mudar')

    cy.location('pathname').should('include', '/sign-in')

    cy.get('form').submit()

    cy.contains('Olá')
  })
})
