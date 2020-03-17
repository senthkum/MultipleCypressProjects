/// <reference types="cypress" />

describe('Testsuite', function()
{

    it('AddingGiftCards', function()
    {
        //Launch the url
        cy.visit('http://demowebshop.tricentis.com/')

        // Enter the login details
        cy.get('.ico-login').click()

        cy.get('#Email').type('boy@mail.com')
        cy.get('#Password').type('Boy123')
        cy.get('.button-1.login-button').click()

        //select the CATEGORIES
            cy.Clickonlink('Gift Cards')
            
        // Select the position
            cy.get('#products-orderby').select('Price: Low to High')
        //Select display
            cy.get('#products-pagesize').select('4')
        //Select view
            cy.get('#products-viewmode').select('List')

        // Select the product from the table
         cy.CategoriesTable('$100 Physical Gift Card', 'senthil', 'testing')

        // Click on shoping cart lable
        cy.get('.ico-cart').find('.cart-label').click()

        //Get the quantity from the table
        cy.get('.cart').find('.cart-item-row').each((cart, index, $list) =>
        {
           cart.find('.remove-from-cart').find('input[type="checkbox"]').click()

            var Price = cart.find('.product-unit-price').text()
            var Quantity = cart.find('.qty-input').val() 
            var Total = cart.find('.product-subtotal').text()
            var TotPrice = (Number(Price) * Number(Quantity))

            expect(Total).to.equals(TotPrice +'.00')
            
        })

        cy.get('[type="checkbox"]').check()
        cy.get('#checkout').click()

        //Billing Address
        cy.get('#billing-address-select').select('tarun boy, asdf, asdf 3034, Australia').should('have.value', "1233919")
        cy.get('#billing-buttons-container').find('input[title="Continue"]').click()

        //Shipping address
        cy.get('.description i').should('have.text', 'Pick up your items at the store (put your store address here)') 
        cy.get('#shipping-buttons-container').find('input[title="Continue"]').click()

        //Shipping method
        cy.get('.method-name').find('#shippingoption_0').click()
        cy.get('#shipping-method-buttons-container').find('input[value="Continue"]').click()
        //
        cy.get('#paymentmethod_0').click()
        cy.get('#payment-method-buttons-container').find('input[value="Continue"]').click()    

        cy.get('td > p').should('have.text', 'You will pay by COD')
        cy.get('#payment-info-buttons-container').find('input[value="Continue"]').click()

        cy.get('#confirm-order-buttons-container').find('input[value="Confirm"]').click()
        cy.get('div.title').find('strong').should('have.text', 'Your order has been successfully processed!')

        cy.get('.details > :nth-child(1)').then(function(Onum)
        {
            cy.log(Onum.text())
        })

        cy.get('.details > :nth-child(2)').then(function(Modifylink)
        {
            cy.log(Modifylink.text())
        })
        cy.get('div.buttons').find('input[value="Continue"]').click()        

    })

})




