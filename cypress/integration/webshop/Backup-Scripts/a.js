/// <reference types="cypress" />
import { weblocator } from '../weblocator'

describe('Testsuite', function()
{

    beforeEach(function()
    {
        cy.fixture('WebshopDatatable/MultipleDataGiftcards').then((TestData) =>
        {
            this.data = TestData
        })
    })

    it('AddingGiftCards', function()
    {
        //Launch the url
        cy.visit('http://demowebshop.tricentis.com/')

        // Enter the login details
        cy.get('.ico-login').click()

        cy.get('#Email').type(this.data.email)
        cy.get('#Password').type(this.data.password)
        cy.get('.button-1.login-button').click()


    })

})