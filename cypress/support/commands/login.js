Cypress.Commands.add('fazerLoginComCredenciaisValidas', () => {
    cy.fixture('credenciais').then(credenciais => {
        cy.get('#username').click().type(credenciais.valida.username)
        cy.get('#senha').click().type(credenciais.valida.senha)
    })
    cy.contains('button', 'Entrar').click()
})

Cypress.Commands.add('fazerComLoginComCredenciaisInvalidas', () => {
    cy.fixture('credenciais').then(credenciais => {
        cy.get('#username').click().type(credenciais.invalida.username)
        cy.get('#senha').click().type(credenciais.invalida.senha)
    })
    cy.contains('button', 'Entrar').click()
})