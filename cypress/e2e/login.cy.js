describe('Login', () => {

  beforeEach(() => {
    cy.visit('http://localhost:4000/')
  })

  it('Login com dados válidos deve permitir entrada no sistema', () => {    
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('123456')
    cy.contains('button', 'Entrar').click()
    
    cy.get(':nth-child(1) > .col > h4').should('have.text', 'Realizar Transferência')
    cy.get(':nth-child(2) > .col > h4').should('have.text', 'Lista de Transferências')
  })

  it('Login com dados inválidos deve retornar mensagem de erro', () => {    
    cy.get('#username').click().type('lucio.lima')
    cy.get('#senha').click().type('123456')
    cy.contains('button', 'Entrar').click()
    
    cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.')
  })
})