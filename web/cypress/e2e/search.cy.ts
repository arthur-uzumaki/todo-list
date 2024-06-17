describe('search for tasks', () => {
  beforeEach(() => {
    cy.login('ronaldo', '123mudar')

    cy.location('pathname', { timeout: 10000 }).should('equal', '/')
  })
  it('should be able search for tasks', () => {
    cy.get('input[name=title]').type('p').parent('form').submit()

    cy.location('pathname').should('include', '/search')
    cy.location('search').should('include', 'title=p')

    cy.get('a').eq(2).click()
  })

  it('should not be able to visit   page without a search query', () => {
    cy.visit('/search')

    cy.on('uncaught:exception', () => {
      return false
    })
    cy.location('pathname').should('equal', '/')
  })
})
