describe('Transferencias', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.fazerLoginComCredenciaisValidas()
        })

    it('Deve realizar transferencias quando informo dados de valor válidos', ()=> {
        cy.informarDadosTransferencia('João da Silva', 'Maria Oliveira', '10.00')        
        cy.validarMensagemDoToast('Transferência realizada!')
    })

    it('Deve apresentar mensagem de erro quando o valor for maior que R$5000,00 e o token não for informado na tentativa de transferência', ()=> {
        cy.informarDadosTransferencia('João da Silva', 'Maria Oliveira', '5000.01') 
        cy.validarMensagemDoToast('Autenticação necessária para transferências acima de R$5.000,00.')
    })
})
