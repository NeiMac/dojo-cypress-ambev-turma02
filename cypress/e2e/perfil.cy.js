describe('Perfil', () => {
    beforeEach(() => {
        cy.visit('/login')
        cy.loginCliente()
    })

    it('Utilizando HTML', () => {
        cy.get('[data-test="dashboard-createProfile"]').click()
        cy.get('#mui-component-select-status').click()
        cy.get('[data-test="status-7"]').click()
        cy.get('[data-test="profile-company"]').type('Empresa Teste')
        cy.get('[name="skills"]').type('Cypress')
    })
})