describe('cadastrar task', () => {
  it('should be able cadastrar task', () => {
    cy.visit('/sign-in')

    cy.get('input#username').type('ronaldo')
    cy.get('input#password').type('123mudar')

    cy.get('form').first().submit()

    cy.get('a[href^="/tasks/cadastrar"]').first().click()

    cy.location('pathname').should('include', 'tasks/cadastrar')

    cy.get('input#title').type('Auditoria de Segurança')
    cy.get('input#priority').type('Alta')
    cy.get('input#startAt').type('2024-06-16')
    cy.get('input#endAt').type('2024-06-19')
    cy.get('textarea#description').type(
      'Conduzir auditoria de segurança em todos os sistemas de TI, identificar vulnerabilidades e propor soluções para mitigação de riscos, seguindo melhores práticas.',
    )

    cy.get('form').last().submit()
  })
})
