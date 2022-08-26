const faker = require('faker-br')
//const email = faker.internet.email()

describe('Testes de Login', () => {
    const user = {}

    beforeEach(() => {
        user.email = faker.internet.email()
        user.username = faker.name.firstName()
        user.password = faker.internet.password()
    })


    it('Realizar login do cliente', () => {
        cy.visit('/login')
        cy.fixture('login').then((user) => {
            cy.get('[data-test="login-email"]').type(user.email)
            cy.get('[data-test="login-password"]').type(user.password)

        })
        cy.get('[data-test="login-submit"]').click()
        cy.get('.large').should('contain', 'Dashboard')

    })

    it('Login com email inválido', () => {
        cy.visit('/login')
        cy.get('[data-test="login-email"]').type('joao@gmail.com')
        cy.get('[data-test="login-password"]').type(user.password)
        cy.get('[data-test="login-submit"]').click()
        cy.get('[data-test="alert"]').should('be.visible')
            .and('contain', 'Credenciais inválidas')
    })

    it.only('Login com email não cadastrado', () => {
        cy.visit('/login')
        cy.get('[data-test="login-email"]').type('joao@gmail.com')
        cy.get('[data-test="login-password"]').type(user.password)
        cy.get('[data-test="login-submit"]').click()
        cy.get('[data-test="alert"]').should('be.visible')
            .and('contain', 'Credenciais inválidas')
    })
    
})