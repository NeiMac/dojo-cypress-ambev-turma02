// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('cadastro', (nome, email, senha) => {
    cy.get('[data-test="landing-register"]').click()
    cy.get('[data-test="register-name"]').type(nome)
    cy.get('[data-test="register-email"]').type(email)
    cy.get('[data-test="register-password"]').type(senha)
    cy.get('[data-test="register-password2"]').type(senha)

})

Cypress.Commands.add('loginCliente', () =>{
    cy.get('[data-test="login-email"]').type('1234@1234.com')
    cy.get('[data-test="login-password"]').type('123456')
    cy.get('[data-test="login-submit"]').click()
})