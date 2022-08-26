/// <reference types ="cypress" />

const faker = require('faker-br')
//const email = faker.internet.email()

describe('Acessar teste Conexao QA - primeira aula', () => {

    const user = {}

    beforeEach(() => {
        cy.visit('https://conexaoqa.herokuapp.com')
        user.email = faker.internet.email()
        user.username = faker.name.firstName()
        user.password = faker.internet.password()
    })

    it('Cadastro manualmente', () => {
        cy.get('[data-test="landing-register"]').click()
        cy.get('[data-test="register-name"]').type('joao')
        cy.get('[data-test="register-email"]').type('joao@joao.com')
        cy.get('[data-test="register-password"]').type('123456')
        cy.get('[data-test="register-password2"]').type('123456')
        cy.get('[data-test="register-login"]').should('contain', 'Login')
        cy.get('[data-test="register-submit"]').click()
    })

    it('Realizando cadastro Faker', () => {
        cy.get('[data-test="landing-register"]').click()
        cy.get('[data-test="register-name"]').type(user.username)
        cy.get('[data-test="register-email"]').type(user.email)
        cy.get('[data-test="register-password"]').type(user.password)
        cy.get('[data-test="register-password2"]').type(user.password)
        cy.get('[data-test="register-login"]').should('contain', 'Login').and("exist")
        cy.get('[data-test="register-submit"]').click()

    })

    it('Cadastro utilizando commands', () => {
        cy.cadastro('nei', 'nei@nei.com', '123456')
        cy.get('[data-test="register-submit"]').click()
    })


    it('Validar o preenchimento dos campos obrigatórios', () => {
        cy.get('[data-test="landing-register"]').click()
        cy.get('[data-test="register-submit"]').click()
        cy.get('.MuiFormHelperText-root').should('be.visible')
        
        cy.contains('.MuiFormHelperText-root','Senha é obrigatória')
            .should('be.visible')
            
            //.and('contain','obrigatório')

    })
/*
    it('Login com email inválido', () => {
        cy.get('[data-test="landing-login"]').click()
        cy.get('[data-test="login-email"]').type('joao@gmail.com')
        cy.get('[data-test="login-password"]').type(user.password)
        cy.get('[data-test="login-submit"]').click()
        cy.get('.MuiFormHelperText-root').should('be.visible')
            .and('contain', 'Digite um email válido')
    })

    it('Login com email não cadastrado', () => {
        cy.get('[data-test="landing-login"]').click()
        cy.get('[data-test="login-email"]').type('joao@gmail.com')
        cy.get('[data-test="login-password"]').type(user.password)
        cy.get('[data-test="login-submit"]').click()
        cy.get('[data-test="alert"]').should('be.visible')
            .and('contain', 'Credenciais inválidas')
    })

    it('Realizar login do cliente', () => {
        
        const usuario = {
            mail:'teste@teste.com',
            senha: '123456'
        }

        cy.get('[data-test="landing-login"]').click()
        cy.get('[data-test="login-email"]').type(usuario.mail)
        cy.get('[data-test="login-password"]').type(usuario.senha)
        cy.get('[data-test="login-submit"]').click()
        cy.get('.large').should('contain', 'Dashboard')

    })
*/
    it.only('Criar um perfil', () => {
        cy.loginCliente()
        cy.get('[data-test="dashboard-createProfile"]').click()
        cy.get('#mui-component-select-status').click()
        cy.get('[data-test="status-7"]').click()
        cy.get('[data-test="profile-company"]').type('Empresa Teste')
        cy.get('[name="skills"]').type('Cypress')
    })
})