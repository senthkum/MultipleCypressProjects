/// <reference types="cypress" />

describe('MochaReporter Suit', function()
{

    it('Launch App 1', function()
    {
        //Launch the url
        cy.visit('http://demowebshop.tricentis.com/')
        cy.clearCookies()
        // Enter the login details
        cy.get('.ico-login').click()

        cy.get('#Email').type('boy@mail.com')
        cy.get('#Password').type('Boy123')
        cy.get('.button-1.login-button').click()

    })

    it('Launch App 2', function()
    {
        //Launch the url
        cy.visit('http://demowebshop.tricentis.com/')
        cy.clearCookies()
        // Enter the login details
        cy.get('.ico-login').click()

        cy.get('#Email').type('boy@mail.com')
        cy.get('#Password').type('Boy123')
        cy.get('.button-1.login-button').click()
    })

    it('Launch App 3', function()
    {
        //Launch the url
        cy.visit('http://demowebshop.tricentis.com/')
        cy.clearCookies()
        // Enter the login details
        cy.get('.ico-login').click()

        cy.get('#Email').type('boy@mail.com')
        cy.get('#Password').type('Boy123')
        cy.get('.button-1.login-button').click()

    })
})
