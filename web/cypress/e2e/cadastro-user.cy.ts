describe('Register  user', () => {
  it('should be able register  user', () => {
    cy.visit('/sign-in')

    cy.get('a[href^="/sing-up"]').first().click()

    const username = `messi_${Date.now()}`

    cy.get('input#name').type('Lionel Messi')
    cy.get('input#username').type(username)
    cy.get('input#password').type('123mudar')

    cy.get('form').submit()

    cy.contains('Login')
  })
})
