describe('Login', () => {

  beforeEach(() => {
    cy.visit('http://localhost:4000/')
  })

  it('Login com dados válidos deve permitir entrada no sistema', () => {    
    cy.fixture('credenciais').then(credenciais => {
      cy.get('#username').click().type(credenciais.valida.username)
      cy.get('#senha').click().type(credenciais.valida.senha)
    })
    cy.contains('button', 'Entrar').click()
    
    cy.get(':nth-child(1) > .col > h4').should('have.text', 'Realizar Transferência')
    cy.get(':nth-child(2) > .col > h4').should('have.text', 'Lista de Transferências')
  })

  it('Login com dados inválidos deve retornar mensagem de erro', () => {    
    cy.fixture('credenciais').then(credenciais => {
      cy.get('#username').click().type(credenciais.invalida.username)
      cy.get('#senha').click().type(credenciais.invalida.senha)
    })
    cy.contains('button', 'Entrar').click()
    
    cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.')
  })
})