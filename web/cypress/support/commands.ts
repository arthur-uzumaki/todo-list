/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    login(username: string, password: string): Chainable<void>
  }
}

// -- This is a parent command --
Cypress.Commands.add('login', (username: string, password: string) => {
  cy.visit('/sign-in')
  cy.location('pathname').should('include', '/sign-in')
  cy.get('input#username').type(username)
  cy.get('input#password').type(password)
  cy.get('form').first().submit()
})
