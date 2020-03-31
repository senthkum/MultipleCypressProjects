/// <reference types="cypress" />
/// <reference types="cypress-iframe" />

import 'cypress-iframe'

describe('Testsuite', function()
{

    it('AddingList', function()
    {
        //Launch the url
        cy.visit('http://demowebshop.tricentis.com/')

        // Enter the login details
        cy.get('.ico-login').click()

        cy.get('#Email').type('boy@mail.com')
        cy.get('#Password').type('Boy123')
        cy.get('.button-1.login-button').click()

        //select the CATEGORIES
            cy.get('div.listbox').find('.inactive').contains('Gift Cards').click()

        // Select the position
            cy.get('#products-orderby').select('Price: Low to High')
        //Select display
            cy.get('#products-pagesize').select('4')
        //Select view
            cy.get('#products-viewmode').select('List')

        // Select the product from the table
            cy.get('div.product-list').find('div.details').each((ProdN, index, $list) =>{
            const ProdName = ProdN.find('h2.product-title').text()
            if(ProdName.includes('$100 Physical Gift Card'))
            {
                cy.get('input[value="Add to cart"]').eq(index).click()

                // Enter the customer details
                cy.get('.recipient-name').type('asgkjdsf')
                cy.get('.message').type('testing')

                cy.get('.qty-input').then(function(strValue)
                {
                      cy.log(strValue.text())
                })

                cy.get('.button-1.add-to-cart-button').click()
            }
        }) 

        cy.get('.ico-cart').find('.cart-label').click()
        //Get the quantity from thetable

        cy.get('.cart').find('.cart-item-row').each((cart, index, $list) =>
        {
           cart.find('.remove-from-cart').find('input[type="checkbox"]').click()

             const Price = cart.find('.product-unit-price').text()

            const Quantity = cart.find('.qty.nobr').find('.qty-input').text()
            cy.log(Quantity) 
            const Total = cart.find('.product-subtotal').text()
            if(Total === (Price * Quantity))
            {
                cy.log('Amount matched')
            }
            else
            {
                cy.log('Amount did not matched')
            } 
            
        })


    })

})




            //  cy.get('.qty-input').then(function(strValue)
            //  {
            //     cy.log(strValue.eq(index).text())
            //  })
