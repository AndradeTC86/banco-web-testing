Cypress.Commands.add('validarMensagemDoToast', (texto) => {
    cy.get('.toast').should('have.text', texto)
})

Cypress.Commands.add('selecionarOpcaoNaCombobox', (label, opcao) => {
    cy.get(`label[for="${label}"]`)
        .parent().as(`campo-${label}`).click()
    cy.get(`@campo-${label}`).contains(opcao).click()
})