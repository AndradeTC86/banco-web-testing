describe('Login', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('Login com dados válidos deve permitir entrada no sistema', () => {    
    cy.fazerLoginComCredenciaisValidas()    
    cy.get(':nth-child(1) > .col > h4').should('have.text', 'Realizar Transferência')
    cy.get(':nth-child(2) > .col > h4').should('have.text', 'Lista de Transferências')
  })

  it('Login com dados inválidos deve retornar mensagem de erro', () => {    
    cy.fazerComLoginComCredenciaisInvalidas()    
    cy.validarMensagemDoToast('Erro no login. Tente novamente.')
  })
})